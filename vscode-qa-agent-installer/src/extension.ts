import * as vscode from 'vscode';
import { SUPPORTED_AGENTS } from './constants';
import { ScaffoldService } from './ScaffoldService';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('qa-agent.initialize', async () => {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            vscode.window.showErrorMessage('No workspace folder open. Please open a project first.');
            return;
        }

        const workspacePath = workspaceFolders[0].uri.fsPath;

        const selectedAgents = await vscode.window.showQuickPick(SUPPORTED_AGENTS, {
            canPickMany: true,
            placeHolder: 'Which AI agent(s) are you using?'
        });

        if (!selectedAgents || selectedAgents.length === 0) {
            vscode.window.showInformationMessage('No AI agent selected. Initialization cancelled.');
            return;
        }

        try {
            for (const agent of selectedAgents) {
                await ScaffoldService.scaffoldAgent(workspacePath, context.extensionPath, agent);
            }
            vscode.window.showInformationMessage(`QA Automation Agent successfully installed for selected agents! 🚀`);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to initialize QA Agent: ${error}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
