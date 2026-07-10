"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
function activate(context) {
    let disposable = vscode.commands.registerCommand('qa-agent.initialize', () => {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            vscode.window.showErrorMessage('No workspace folder open. Please open a project first.');
            return;
        }
        const workspacePath = workspaceFolders[0].uri.fsPath;
        try {
            // Scaffold directories
            const skillDir = path.join(workspacePath, '.agents', 'skills', 'copilot_qa_automation');
            const agentDir = path.join(workspacePath, '.github', 'agents');
            fs.mkdirSync(skillDir, { recursive: true });
            fs.mkdirSync(agentDir, { recursive: true });
            // Paths to the templates bundled with the extension
            const templateSkillPath = path.join(context.extensionPath, 'templates', 'SKILL.md');
            const templateAgentPath = path.join(context.extensionPath, 'templates', 'copilot-qa-automation.md');
            // Paths in the user's workspace
            const targetSkillPath = path.join(skillDir, 'SKILL.md');
            const targetAgentPath = path.join(agentDir, 'copilot-qa-automation.md');
            // Copy files from templates to workspace
            fs.copyFileSync(templateSkillPath, targetSkillPath);
            fs.copyFileSync(templateAgentPath, targetAgentPath);
            vscode.window.showInformationMessage('QA Automation Agent successfully installed in this project! 🚀');
        }
        catch (error) {
            vscode.window.showErrorMessage(`Failed to initialize QA Agent: ${error}`);
        }
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map