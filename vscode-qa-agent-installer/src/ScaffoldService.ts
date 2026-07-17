import * as fs from 'fs';
import * as path from 'path';
import { AgentConfig } from './types';

export class ScaffoldService {
    static async scaffoldAgent(workspacePath: string, extensionPath: string, config: AgentConfig): Promise<void> {
        const fullSkillDir = path.join(workspacePath, ...config.skillDir.split('/'));
        const fullPrJiraSkillDir = path.join(workspacePath, ...config.prJiraSkillDir.split('/'));
        const fullAgentDir = path.join(workspacePath, ...config.agentDir.split('/'));
        const fullMcpConfigPath = path.join(workspacePath, ...config.mcpConfigPath.split('/'));

        // Ensure directories exist
        fs.mkdirSync(fullSkillDir, { recursive: true });
        fs.mkdirSync(fullPrJiraSkillDir, { recursive: true });
        fs.mkdirSync(fullAgentDir, { recursive: true });

        // Write MCP Config
        const mcpConfigContent = JSON.stringify({
            mcpServers: {
                playwright: {
                    command: "npx",
                    args: ["-y", "@playwright/mcp"]
                },
                jira: {
                    command: "npx",
                    args: ["-y", "mcp-remote"]
                }
            }
        }, null, 2);

        const mcpDir = path.dirname(fullMcpConfigPath);
        if (!fs.existsSync(mcpDir)) {
             fs.mkdirSync(mcpDir, { recursive: true });
        }
        
        fs.writeFileSync(fullMcpConfigPath, mcpConfigContent, 'utf-8');

        // Paths to the templates bundled with the extension
        const templateSkillPath = path.join(extensionPath, 'templates', 'SKILL.md');
        const templateAgentPath = path.join(extensionPath, 'templates', 'copilot-qa-automation.md');
        const templatePrJiraSkillPath = path.join(extensionPath, 'templates', 'pr-jira-sync-SKILL.md');
        const templatePrJiraAgentPath = path.join(extensionPath, 'templates', 'pr-jira-sync.md');

        // Copy files
        if (config.renameTemplates) {
            fs.copyFileSync(templateSkillPath, path.join(fullSkillDir, 'qa-automation-SKILL.md'));
            fs.copyFileSync(templateAgentPath, path.join(fullAgentDir, 'copilot-qa-automation.md'));
            fs.copyFileSync(templatePrJiraSkillPath, path.join(fullPrJiraSkillDir, 'pr-jira-sync-SKILL.md'));
            fs.copyFileSync(templatePrJiraAgentPath, path.join(fullAgentDir, 'pr-jira-sync.md'));
        } else {
            fs.copyFileSync(templateSkillPath, path.join(fullSkillDir, 'SKILL.md'));
            fs.copyFileSync(templateAgentPath, path.join(fullAgentDir, 'copilot-qa-automation.md'));
            fs.copyFileSync(templatePrJiraSkillPath, path.join(fullPrJiraSkillDir, 'SKILL.md'));
            fs.copyFileSync(templatePrJiraAgentPath, path.join(fullAgentDir, 'pr-jira-sync.md'));
        }
    }
}
