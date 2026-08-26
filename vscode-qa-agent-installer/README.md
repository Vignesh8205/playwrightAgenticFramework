# QA Automation Agent Installer

Welcome to the **QA Automation Agent Installer** extension!

This extension is designed to instantly scaffold advanced Agentic QA Automation capabilities into any VS Code workspace. It supports multiple industry-standard AI agents and automatically configures Model Context Protocol (MCP) integrations for Jira and Playwright.

## 🚀 Key Features

- **Multi-Agent Support**: Automatically generates configuration files and directory structures tailored to your specific AI Agent (supports **GitHub Copilot, Antigravity, Claude Code, Cline, Kiro, and Codex**).
- **Auto MCP Configuration**: Generates the necessary `mcp.json` files for your selected agents, pre-configured with Playwright, Jira, and Postman MCP servers.
- **Framework Implementation Agent**: An interactive agent that explores your application dynamically (via Playwright or Postman collections) and scaffolds a robust testing architecture. Supports **UI Only**, **API Only**, or **Hybrid (UI + API)** frameworks, ranging from simple to enterprise-grade with custom utilities and CI optimization.
- **QA Automation Agent**: An interactive agent profile that extracts Gherkin test cases from Jira (including from file attachments like .xlsx or .pdf), executes manual flows, dynamically learns your framework's standards (e.g., Page Object Models), and writes compliant automated test scripts.
- **Post-Automation Sync Agent (`pr-jira-sync`)**: A secondary agent designed to finalize your work. It runs the PR-related tests, captures a screenshot of the Playwright HTML report, raises a Pull Request (via GitHub MCP or CLI), transitions the Jira issue to "Done", and adds a comment with the PR link and test report screenshot.

## 🛠️ How to Use the Extension

1. Open your testing project or repository in VS Code.
2. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac).
3. Type and select: **`Initialize QA Automation Agent`**.
4. A dropdown menu will appear. **Select the AI Agent(s)** you are using (e.g., Copilot, Antigravity, etc.).
5. The extension will automatically scaffold the appropriate templates and MCP configurations directly into your workspace!

## 🤖 How to Use the Agents

Once the extension has scaffolded the files, your AI Assistant will be supercharged with three new workflows. 

### ⚠️ Important: Invoking the Agent Context
Before triggering the workflows below, you must ensure the AI assistant is reading the generated instructions. Depending on which AI assistant you chose, the trigger method slightly differs:
- **Antigravity:** The agents are installed as native "Skills". Simply type: `run the <agent-name> skill` (e.g., `run the framework_initializer skill`).
- **GitHub Copilot:** Use the `@workspace` tag and reference the file directly: `@workspace please follow the instructions in .github/agents/framework-initializer.md to Initialize my automation framework`.
- **Claude Code / Cline / Kiro / Codex:** Reference the generated directory or file in your prompt: `Follow the instructions in the .claude/agents/framework-initializer.md file to Initialize my automation framework.`

### 1. Triggering Framework Initialization
If you are starting from scratch, open your AI Agent's chat and say:
> *"Initialize my automation framework"*

The agent will guide you through scaffolding the repository:
- It will ask what type of framework you want: **UI Only**, **API Only**, or **Hybrid (UI + API)**.
- For API/Hybrid frameworks, it will ask for a Postman Collection and fetch the specs dynamically using the Postman MCP Server.
- For UI/Hybrid frameworks, it will dynamically explore your application via Playwright and Chrome DevTools to analyze UI and Network behavior.
- It will analyze required utilities and determine the optimal test data strategy.
- It will draft a basic sanity test scenario based on the core functionality.
- It will ask whether you prefer Playwright Native or Cucumber BDD (and ask if you want Allure Reporting if Cucumber is chosen).
- For API/Hybrid frameworks, it will ask if you prefer **Playwright Native (APIRequestContext)** or **Axios** for HTTP calls.
- It will ask if you want a **Simple Level** or a **High Level (Enterprise)** architecture, and ask for your preferred test data format.
- It will install dependencies, generate optimized configuration files, and scaffold the directory structure (e.g., `pages/`, `api/`, `components/`, `utils/`, `data/`).
- It will generate a comprehensive `README.md` for your newly scaffolded framework.

### 2. Triggering QA Automation
Open your AI Agent's chat interface (e.g., Copilot Chat, Antigravity) and say:
> *"Trigger QA automation"*

The agent will begin an interactive, step-by-step process:
- It will ask you to select a Jira Project, Sprint, and Story.
- It will fetch the Gherkin scenarios (even from attached Excel or PDF files).
- It will launch a browser via Playwright to verify the manual flow.
- It will study your codebase, prioritize reusing existing Page Objects, and generate a new `.spec.ts` test case following your project's standards.

### 3. Triggering Post-Automation PR & Jira Sync
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
* `@anthropic-pb/postman-mcp-server` (For generating API tests from Postman Collections - *Requires POSTMAN_API_KEY to be set in the generated config*)
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
