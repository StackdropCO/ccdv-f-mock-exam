# Verification output

2026-09-08, local repository snapshot. All five commands completed successfully. Live browser access limitation is described in FINAL_REPORT.md.

## npm test

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> ccdv-f-mock-exam@0.0.0 test
> vitest run


 RUN  v4.1.11 /workspace/scratch/651930caa4d8/ccdv-f-mock-exam


 Test Files  12 passed (12)
      Tests  73 passed (73)
   Start at  23:26:02
   Duration  9.58s (transform 3.50s, setup 0ms, import 5.24s, tests 18.47s, environment 8.51s)

```

## npm run typecheck

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> ccdv-f-mock-exam@0.0.0 typecheck
> tsc -b --noEmit

```

## npm run lint

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> ccdv-f-mock-exam@0.0.0 lint
> oxlint

```

## npm run build

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> ccdv-f-mock-exam@0.0.0 build
> tsc -b && vite build

vite v8.2.2 building client environment for production...
transforming...
✓ 315 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.91 kB │ gzip:   0.52 kB
dist/assets/index-DKIafamv.css   21.89 kB │ gzip:   4.43 kB
dist/assets/index-wHywP4-d.js   749.98 kB │ gzip: 213.35 kB

[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 468ms
```

## npm run bank:generate

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> ccdv-f-mock-exam@0.0.0 bank:generate
> node scripts/build-question-bank.mjs

Generated 318 centrally approved items across 8 domain files.
```
