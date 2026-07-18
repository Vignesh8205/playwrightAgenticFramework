"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_AGENTS = void 0;
exports.SUPPORTED_AGENTS = [
    {
        id: 'antigravity',
        label: 'Antigravity',
        description: 'Install for Antigravity',
        skillDir: '.agents/skills/copilot_qa_automation',
        prJiraSkillDir: '.agents/skills/pr_jira_sync',
        agentDir: '.agents/skills',
        mcpConfigPath: '.agents/mcp.json',
        renameTemplates: false
    },
    {
        id: 'copilot',
        label: 'Copilot',
        description: 'Install for GitHub Copilot',
        skillDir: '.github/agents',
        prJiraSkillDir: '.github/agents',
        agentDir: '.github/agents',
        mcpConfigPath: '.github/mcp.json',
        renameTemplates: true
    },
    {
        id: 'claude',
        label: 'Claude',
        description: 'Install for Claude Code',
        skillDir: '.claude/agents',
        prJiraSkillDir: '.claude/agents',
        agentDir: '.claude/agents',
        mcpConfigPath: '.claude/mcp.json',
        renameTemplates: true
    },
    {
        id: 'cline',
        label: 'Cline',
        description: 'Install for Cline',
        skillDir: '.cline/rules',
        prJiraSkillDir: '.cline/rules',
        agentDir: '.cline/rules',
        mcpConfigPath: 'cline_mcp.json',
        renameTemplates: true
    },
    {
        id: 'kiro',
        label: 'Kiro',
        description: 'Install for Kiro',
        skillDir: '.kiro/agents',
        prJiraSkillDir: '.kiro/agents',
        agentDir: '.kiro/agents',
        mcpConfigPath: '.kiro/mcp.json',
        renameTemplates: true
    },
    {
        id: 'codex',
        label: 'Codex',
        description: 'Install for Codex',
        skillDir: '.codex/agents',
        prJiraSkillDir: '.codex/agents',
        agentDir: '.codex/agents',
        mcpConfigPath: '.codex/mcp.json',
        renameTemplates: true
    }
];
//# sourceMappingURL=constants.js.map