# QA Automation Agent Installer

Welcome to the **QA Automation Agent Installer** extension!

This extension is designed to instantly scaffold advanced Agentic QA Automation capabilities into any VS Code workspace. It supports multiple industry-standard AI agents and automatically configures Model Context Protocol (MCP) integrations for Jira and Playwright.

## 🚀 Key Features

- **Multi-Agent Support**: Automatically generates configuration files and directory structures tailored to your specific AI Agent (supports **GitHub Copilot, Antigravity, Claude Code, Cline, Kiro, and Codex**).
- **Auto MCP Configuration**: Generates the necessary `mcp.json` files for your selected agents, pre-configured with Playwright and Jira servers.
- **QA Automation Agent**: An interactive agent profile that extracts Gherkin test cases from Jira (including from file attachments like .xlsx or .pdf), executes manual flows, dynamically learns your framework's standards (e.g., Page Object Models), and writes compliant automated test scripts.
- **Post-Automation Sync Agent (`pr-jira-sync`)**: A secondary agent designed to finalize your work. It runs the PR-related tests, captures a screenshot of the Playwright HTML report, raises a Pull Request (via GitHub MCP or CLI), transitions the Jira issue to "Done", and adds a comment with the PR link and test report screenshot.

## 🛠️ How to Use the Extension

1. Open your testing project or repository in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac).
3. Type and select: **`Initialize QA Automation Agent`**.
4. A dropdown menu will appear. **Select the AI Agent(s)** you are using (e.g., Copilot, Antigravity, etc.).
5. The extension will automatically scaffold the appropriate templates and MCP configurations directly into your workspace!

## 🤖 How to Use the Agents

Once the extension has scaffolded the files, your AI Assistant will be supercharged with two new workflows:

### 1. Triggering QA Automation
Open your AI Agent's chat interface (e.g., Copilot Chat, Antigravity) and say:
> *"Trigger QA automation"*

The agent will begin an interactive, step-by-step process:
- It will ask you to select a Jira Project, Sprint, and Story.
- It will fetch the Gherkin scenarios (even from attached Excel or PDF files).
- It will launch a browser via Playwright to verify the manual flow.
- It will study your codebase, prioritize reusing existing Page Objects, and generate a new `.spec.ts` test case following your project's standards.

### 2. Triggering Post-Automation PR & Jira Sync
After you have reviewed the generated test and are ready to finalize your work, open your AI Agent's chat and say:
> *"Run the pr-jira-sync skill"*

The agent will seamlessly complete your workflow:
- It will ask for the parent branch and confirm the Jira Issue Key.
- It will commit any uncommitted changes.
- It will execute the tests specifically related to your Pull Request.
- It will capture a screenshot of the Playwright HTML report.
- It will raise a Pull Request with a generated description.
- It will transition your Jira issue to "Done" and attach the PR link and test report screenshot to the ticket!

## 📋 Requirements

To fully utilize the generated Agent, your Agentic IDE must support the Model Context Protocol (MCP) and have the following tools available (the extension scaffolds the configuration for these automatically):
* `@playwright/mcp`
* `mcp-remote` (Atlassian Jira)
* GitHub CLI (`gh`) - *Required only if a GitHub MCP server is unavailable for PR creation.*

## 📦 How to Build the Extension Locally

If you want to build the `.vsix` installer file yourself so you can share it with others:

1. Open your terminal and navigate to the extension folder:
   ```bash
   cd vscode-qa-agent-installer
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   npm install -g @vscode/vsce
   ```
3. Run the package command to generate the `.vsix` file:
   ```bash
   npx @vscode/vsce package --no-dependencies
   ```
4. Drag and drop the generated `.vsix` file into the VS Code Extensions panel to install it!
