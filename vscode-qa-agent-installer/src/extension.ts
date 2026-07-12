import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
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
            const prJiraSkillDir = path.join(workspacePath, '.agents', 'skills', 'pr_jira_sync');
            const agentDir = path.join(workspacePath, '.github', 'agents');
            
            fs.mkdirSync(skillDir, { recursive: true });
            fs.mkdirSync(prJiraSkillDir, { recursive: true });
            fs.mkdirSync(agentDir, { recursive: true });

            // Paths to the templates bundled with the extension
            const templateSkillPath = path.join(context.extensionPath, 'templates', 'SKILL.md');
            const templateAgentPath = path.join(context.extensionPath, 'templates', 'copilot-qa-automation.md');
            const templatePrJiraSkillPath = path.join(context.extensionPath, 'templates', 'pr-jira-sync-SKILL.md');
            const templatePrJiraAgentPath = path.join(context.extensionPath, 'templates', 'pr-jira-sync.md');

            // Paths in the user's workspace
            const targetSkillPath = path.join(skillDir, 'SKILL.md');
            const targetAgentPath = path.join(agentDir, 'copilot-qa-automation.md');
            const targetPrJiraSkillPath = path.join(prJiraSkillDir, 'SKILL.md');
            const targetPrJiraAgentPath = path.join(agentDir, 'pr-jira-sync.md');

            // Copy files from templates to workspace
            fs.copyFileSync(templateSkillPath, targetSkillPath);
            fs.copyFileSync(templateAgentPath, targetAgentPath);
            fs.copyFileSync(templatePrJiraSkillPath, targetPrJiraSkillPath);
            fs.copyFileSync(templatePrJiraAgentPath, targetPrJiraAgentPath);

            vscode.window.showInformationMessage('QA Automation Agent successfully installed in this project! 🚀');
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to initialize QA Agent: ${error}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
