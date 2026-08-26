# Copilot QA Automation Agent - User Guide

Welcome to your new **Copilot QA Automation Agent**! This agent leverages Jira, Playwright, and your codebase to seamlessly turn Jira user stories into fully automated, framework-compliant test scripts.

---

## 🚀 How to Trigger the Agent

### Step 1: Invoke the Agent Context
Before triggering the workflow, you must ensure the AI assistant is reading the generated instructions. Depending on your chosen AI assistant, the invocation method differs:
- **Antigravity:** The agents are installed as native "Skills". Simply type: `run the <agent-name> skill` (e.g., `run the copilot_qa_automation skill`).
- **GitHub Copilot:** Use the `@workspace` tag and reference the file directly: `@workspace please follow the instructions in .github/agents/copilot-qa-automation.md to Trigger QA automation`.
- **Claude Code / Cline / Kiro / Codex:** Reference the generated file in your prompt: `Follow the instructions in .claude/agents/copilot-qa-automation.md to Trigger QA automation`.

### Step 2: Trigger the Workflow
Once the context is invoked, the agent will begin its process. The general trigger phrases are:

> **"Trigger QA automation"** or **"Start the QA automation workflow"**

The agent will immediately recognize this prompt and begin its interactive 7-step process to generate your tests.

Whenever you have finished automating a task and want to raise a Pull Request and sync it back to Jira, type:

> **"Run the pr-jira-sync skill"**

This will trigger the post-automation sync workflow to finalize your changes.

---

## 🏗️ Framework Initialization Workflow

If you are starting a new project from scratch, you can use the **Framework Initializer** agent to build your repository architecture before you write any tests.

Trigger it by saying: **"Initialize my automation framework"**

The agent will guide you through scaffolding the repository:
1. **Framework Type Selection:** Choose between **UI Only**, **API Only**, or **Hybrid (UI + API)**.
2. **API/Postman Integration:** If you chose API or Hybrid, the agent will prompt for your Postman Collection and fetch the specs dynamically using the Postman MCP Server.
3. **HTTP Client Preference:** For API/Hybrid frameworks, choose if you prefer **Playwright Native (APIRequestContext)** or **Axios** for HTTP calls (assertions always use Playwright).
4. **App Exploration:** For UI/Hybrid frameworks, the agent will dynamically explore your application via Playwright and Chrome DevTools to analyze UI and Network behavior.
5. **Architecture & Complexity:** Choose between Playwright Native or Cucumber BDD, and select a **Simple Level** or **High Level (Enterprise)** architecture.
6. **Scaffold:** The agent installs all dependencies and scaffolds the directory structure (e.g., `pages/`, `api/`, `components/`, `utils/`, `data/`).

---

## 🔄 The 7-Step Interactive Workflow

The agent will walk you through the process, pausing for your input where necessary.

### 1. Jira Project Selection
The agent uses the Jira MCP to fetch all Atlassian resources and projects you have access to. 
* **Your Action:** Select the Jira Project you want to work on (e.g., `KAN`).

### 2. Sprint Selection *(Optional)*
The agent will fetch active sprints for the selected project.
* **Your Action:** Select a specific sprint, or tell the agent to skip and fetch all recent stories.

### 3. Story Selection
The agent will retrieve the list of User Stories/Bugs in the chosen project/sprint.
* **Your Action:** Tell the agent which specific story you want to automate (e.g., `KAN-25`).

### 4. Gherkin Extraction
The agent automatically reads the Acceptance Criteria and Test Steps from the selected Jira ticket and converts them into standard **Gherkin BDD format** (Given/When/Then).
* **Your Action:** Review the generated Gherkin. You can ask the agent to add more edge cases or modify steps.

### 5. Manual Flow Execution
The agent will use the Playwright MCP to launch a headless browser and navigate through the web app. It will physically execute the steps in the Gherkin scenario, analyzing the DOM to find the most robust locators (buttons, text fields).
* **Your Action:** You may need to provide the target URL (e.g., `https://aidrivenconsultancy.com`) if it isn't specified in your config.

### 6. Dynamic Framework Analysis
The agent will scan your repository (`tests/`, `fixtures/`, `pages/`, etc.) to dynamically understand your specific testing framework. It learns how you use Page Object Models (POMs) and dependency injection.
* **Your Action:** None! The agent does this automatically to ensure it mimics your coding standards perfectly.

### 7. Automation Script Generation
Finally, the agent writes the Playwright test script (`.spec.ts`) and any required Page Object Models or fixtures. It will strictly adhere to the standards it discovered in Step 6.
* **Your Action:** Review the generated code. You can ask the agent to run the test using a terminal command to prove it passes.

---

## 🔗 Post-Automation: PR & Jira Sync

After you have successfully generated and verified your automated tests, you can use the **pr-jira-sync** skill to finalize your workflow. 

Just say: **"Run the pr-jira-sync skill"** and the agent will:
1. Identify your active branch and ask for the target parent branch (e.g., `master`).
2. Automatically check for uncommitted changes and help you commit them.
3. Analyze your code diffs and draft a highly professional Pull Request description.
4. Raise the Pull Request via GitHub MCP (or GitHub CLI).
5. Capture a screenshot of the Playwright HTML test report locally.
6. Move the associated Jira issue to the "Done" status and add a comment with the link to your new PR.

---

## 🛠️ Tips for Success

> [!TIP]
> **Keep Jira Detailed:** The better the Acceptance Criteria and Test Steps are written in your Jira tickets, the better the final automation script will be.

> [!TIP]
> **Test Execution Screenshots:** The GitHub CLI cannot directly upload local screenshots to the PR body. The agent will present the screenshot as a local artifact for you to drag and drop into the PR. For full automation, we recommend configuring GitHub Actions or using the GitHub MCP to commit the images to the repository.

> [!NOTE]
> **Framework Agnostic:** Because of Step 6, you can drop this agent into a Cypress, Selenium, or different Playwright repository, and it will automatically adapt to the new framework's standards.

> [!IMPORTANT]
> **Use the `/grill-me` command:** If a Jira story is vague or missing details, you can use the `/grill-me` slash command to have the agent interview you and help flesh out the exact requirements before generating code.
