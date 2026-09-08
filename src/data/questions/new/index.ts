import { agentsWorkflows } from "./agentsWorkflows";
import { applicationsIntegration } from "./applicationsIntegration";
import { claudeCode } from "./claudeCode";
import { evalTestingDebugging } from "./evalTestingDebugging";
import { modelSelectionOptimization } from "./modelSelectionOptimization";
import { promptContextEngineering } from "./promptContextEngineering";
import { securitySafety } from "./securitySafety";
import { toolsMcp } from "./toolsMcp";

export const NEW_QUESTIONS = [...agentsWorkflows, ...applicationsIntegration, ...claudeCode, ...evalTestingDebugging, ...modelSelectionOptimization, ...promptContextEngineering, ...securitySafety, ...toolsMcp];
