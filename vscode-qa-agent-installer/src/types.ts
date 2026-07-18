export interface AgentConfig {
    id: string;
    label: string;
    description: string;
    skillDir: string;
    prJiraSkillDir: string;
    agentDir: string;
    mcpConfigPath: string;
    renameTemplates: boolean;
}
