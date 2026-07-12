# QA Automation Agent Installer

Welcome to the **QA Automation Agent Installer** extension!

This extension is designed to instantly scaffold advanced Agentic QA Automation capabilities into any VS Code workspace. By installing this extension and running its command, you will automatically generate the required Model Context Protocol (MCP) skills and Copilot Agent configurations needed to connect your workspace to Jira and Playwright.

## 🚀 Features

- **One-Click Scaffold**: Automatically generates the `.agents` and `.github/agents` directories in your active workspace.
- **Jira Integration**: Installs the instructions needed for Copilot to fetch Jira Projects, Sprints, and User Stories.
- **Playwright Integration**: Installs the instructions needed for Copilot to launch a headless browser, perform manual UI flows, and extract robust DOM locators.
- **Post-Automation Sync (PR & Jira)**: Installs the `pr-jira-sync` skill to automatically commit changes, draft professional Pull Requests via GitHub MCP or CLI, and update Jira statuses with the PR link.
- **Framework Agnostic**: The generated agent dynamically learns your existing repository's framework standards (e.g., custom fixtures, Page Object Models) before writing any code.

## 🛠️ Usage

1. Open any project or folder in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac).
3. Type and select: **`Initialize QA Automation Agent`**.
4. The `.github` and `.agents` folders will be instantly created in your workspace!

You can now open a Copilot chat and say **"Trigger QA automation"** to begin the interactive flow, or **"Run the pr-jira-sync skill"** to finalize your completed automation task by raising a PR!

## 📋 Requirements

To fully utilize the generated Agent, your Agentic IDE (e.g., GitHub Copilot, Claude Code, or Antigravity) must be configured with the following MCP servers:
* `@playwright/mcp`
* `mcp-remote` (Atlassian Jira)

## 📦 How to Build the Extension Locally

If you want to build the `.vsix` installer file yourself so you can share it with others, you can package it using the official VS Code Extension manager (`vsce`).

1. Open your terminal and navigate to the extension folder:
   ```bash
   cd vscode-qa-agent-installer
   ```
2. Install the necessary dependencies (including the VSCE CLI tool):
   ```bash
   npm install
   npm install -g @vscode/vsce
   ```
3. Run the package command to generate the `.vsix` file:
   ```bash
   npx @vscode/vsce package --no-dependencies
   ```
4. A file named `vscode-qa-agent-installer-1.0.0.vsix` will be generated in the current folder. You can drag and drop this file into the VS Code Extensions panel to install it, or send it to your team!

## 🤝 Contributing

This extension is part of the broader **Playwright Agentic Framework**. Feel free to submit pull requests or file issues on the main repository!
