import * as fs from 'fs';
import * as path from 'path';
import { AgentConfig } from './types';

export class ScaffoldService {
    static async scaffoldAgent(workspacePath: string, extensionPath: string, config: AgentConfig): Promise<void> {
        const fullSkillDir = path.join(workspacePath, ...config.skillDir.split('/'));
        const fullPrJiraSkillDir = path.join(workspacePath, ...config.prJiraSkillDir.split('/'));
        const fullFrameworkInitSkillDir = path.join(workspacePath, ...config.frameworkInitSkillDir.split('/'));
        const fullAgentDir = path.join(workspacePath, ...config.agentDir.split('/'));
        const fullMcpConfigPath = path.join(workspacePath, ...config.mcpConfigPath.split('/'));

        // Ensure directories exist
        fs.mkdirSync(fullSkillDir, { recursive: true });
        fs.mkdirSync(fullPrJiraSkillDir, { recursive: true });
        fs.mkdirSync(fullFrameworkInitSkillDir, { recursive: true });
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
                },
                "postman-mcp-server": {
                    command: "npx",
                    args: ["-y", "@anthropic-pb/postman-mcp-server"],
                    env: {
                        POSTMAN_API_KEY: "<YOUR_POSTMAN_API_KEY>"
                    }
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
        const templateFrameworkInitSkillPath = path.join(extensionPath, 'templates', 'framework-initializer-SKILL.md');
        const templateFrameworkInitAgentPath = path.join(extensionPath, 'templates', 'framework-initializer.md');

        // Copy files
        if (config.renameTemplates) {
            fs.copyFileSync(templateSkillPath, path.join(fullSkillDir, 'qa-automation-SKILL.md'));
            fs.copyFileSync(templateAgentPath, path.join(fullAgentDir, 'copilot-qa-automation.md'));
            fs.copyFileSync(templatePrJiraSkillPath, path.join(fullPrJiraSkillDir, 'pr-jira-sync-SKILL.md'));
            fs.copyFileSync(templatePrJiraAgentPath, path.join(fullAgentDir, 'pr-jira-sync.md'));
            fs.copyFileSync(templateFrameworkInitSkillPath, path.join(fullFrameworkInitSkillDir, 'framework-initializer-SKILL.md'));
            fs.copyFileSync(templateFrameworkInitAgentPath, path.join(fullAgentDir, 'framework-initializer.md'));
        } else {
            fs.copyFileSync(templateSkillPath, path.join(fullSkillDir, 'SKILL.md'));
            fs.copyFileSync(templateAgentPath, path.join(fullAgentDir, 'copilot-qa-automation.md'));
            fs.copyFileSync(templatePrJiraSkillPath, path.join(fullPrJiraSkillDir, 'SKILL.md'));
            fs.copyFileSync(templatePrJiraAgentPath, path.join(fullAgentDir, 'pr-jira-sync.md'));
            fs.copyFileSync(templateFrameworkInitSkillPath, path.join(fullFrameworkInitSkillDir, 'SKILL.md'));
            fs.copyFileSync(templateFrameworkInitAgentPath, path.join(fullAgentDir, 'framework-initializer.md'));
        }
    }
}
