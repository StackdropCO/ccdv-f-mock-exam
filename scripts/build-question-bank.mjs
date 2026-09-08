import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
const blueprint = read('research/blueprint.json');
const approvals = read('research/reviews/central-approval.json');
const records = fs.readdirSync(path.join(root, 'research/drafts')).filter(n => n.endsWith('.json')).sort().flatMap(n => read(`research/drafts/${n}`));
const publicFields = ['id','domain','objective','conceptKey','type','selectCount','body','options','correctAnswers','explanation','sourceRefs'];
const production = records.map(q => {
  const item = Object.fromEntries(publicFields.map(k => [k, q[k]]));
  const hash = crypto.createHash('sha256').update(JSON.stringify(item)).digest('hex');
  if (approvals.items[q.id]?.contentSha256 !== hash || approvals.items[q.id]?.status !== 'APPROVED') throw new Error(`Missing or stale central approval: ${q.id}`);
  return {...item, qualityStatus:'APPROVED'};
});
if (new Set(production.map(q=>q.id)).size !== production.length) throw new Error('Duplicate authoring IDs');
const out = path.join(root, 'src/data/questions/new');
fs.mkdirSync(out,{recursive:true});
const imports = [], names = [];
for (const d of blueprint.domains) {
  const name = d.id.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
  const items = production.filter(q=>q.domain===d.id).sort((a,b)=>a.id.localeCompare(b.id));
  for(const o of d.objectives) if(items.filter(q=>q.objective===o.id).length!==o.newTarget) throw new Error(`Wrong count for ${o.id}`);
  fs.writeFileSync(path.join(out,`${name}.ts`),`// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.\nimport type { BankQuestion } from "../../bankTypes";\nexport const ${name}: BankQuestion[] = ${JSON.stringify(items,null,2)};\n`);
  imports.push(`import { ${name} } from "./${name}";`);names.push(`...${name}`);
}
fs.writeFileSync(path.join(out,'index.ts'),`${imports.join('\n')}\n\nexport const NEW_QUESTIONS = [${names.join(', ')}];\n`);
const trace = Object.fromEntries(records.map(q=>[q.id,{domain:q.domain,objective:q.objective,conceptKey:q.conceptKey,difficultyEstimate:q.difficultyEstimate,sourceRefs:q.sourceRefs,...q.review,centralApproval:approvals.items[q.id]}]));
fs.writeFileSync(path.join(root,'research/question-sources.json'),JSON.stringify(trace,null,2)+'\n');
console.log(`Generated ${production.length} centrally approved items across ${blueprint.domains.length} domain files.`);
