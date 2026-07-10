# QA Automation Agent Installer

Welcome to the **QA Automation Agent Installer** extension!

This extension is designed to instantly scaffold advanced Agentic QA Automation capabilities into any VS Code workspace. By installing this extension and running its command, you will automatically generate the required Model Context Protocol (MCP) skills and Copilot Agent configurations needed to connect your workspace to Jira and Playwright.

## 🚀 Features

- **One-Click Scaffold**: Automatically generates the `.agents` and `.github/agents` directories in your active workspace.
- **Jira Integration**: Installs the instructions needed for Copilot to fetch Jira Projects, Sprints, and User Stories.
- **Playwright Integration**: Installs the instructions needed for Copilot to launch a headless browser, perform manual UI flows, and extract robust DOM locators.
- **Framework Agnostic**: The generated agent dynamically learns your existing repository's framework standards (e.g., custom fixtures, Page Object Models) before writing any code.

## 🛠️ Usage

1. Open any project or folder in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac).
3. Type and select: **`Initialize QA Automation Agent`**.
4. The `.github` and `.agents` folders will be instantly created in your workspace!

You can now open a Copilot chat and say **"Trigger QA automation"** to begin the interactive flow.

## 📋 Requirements

To fully utilize the generated Agent, your Agentic IDE (e.g., GitHub Copilot, Claude Code, or Antigravity) must be configured with the following MCP servers:
* `@playwright/mcp`
* `mcp-remote` (Atlassian Jira)

## 🤝 Contributing

This extension is part of the broader **Playwright Agentic Framework**. Feel free to submit pull requests or file issues on the main repository!
