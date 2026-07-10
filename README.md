# Playwright Agentic Framework

Welcome to the **Playwright Agentic Framework**! This repository is designed to demonstrate an advanced, fully automated QA workflow using Agentic AI, Playwright, and Jira. 

By leveraging the Model Context Protocol (MCP), this repository contains AI Agent profiles and instructions that can autonomously pull Jira stories, execute manual tests against a web UI, and write framework-compliant Playwright automation scripts.

## 🌟 Key Features

* **End-to-End Automation Loop**: Turns Jira User Stories into Playwright code in a single prompt.
* **Framework Agnostic Learning**: The agent dynamically scans the repository's directories (`pom/`, `fixtures/`, `tests/`) to understand your coding standards and dependency injection mechanisms before writing code.
* **Page Object Model (POM) Standard**: Strictly enforces the use of POMs and Playwright Fixtures (`customFixtures.ts`).
* **MCP Integrations**:
  * **Jira MCP**: Used to pull project lists, active sprints, and user stories directly from Atlassian.
  * **Playwright MCP**: Used to launch headless browsers and analyze the DOM for robust element locators.

## 📁 Repository Structure

* `.agents/skills/`: Contains the Antigravity `SKILL.md` file that defines the 7-step interactive workflow.
* `.github/agents/`: Contains the AI Agent Profile (`copilot-qa-automation.md`) mapping the agent to the custom skill.
* `pom/`: Page Object Models defining UI elements and actions (e.g., `ContactPage.ts`, `Navigation.ts`).
* `fixtures/`: Playwright custom fixtures (`customFixtures.ts`) used for injecting POMs into test scripts.
* `tests/`: Generated Playwright test scripts (`.spec.ts`).
* `USER_GUIDE.md`: Detailed guide on how to trigger and use the QA Automation Agent.

## 🚀 Getting Started

If you are using an Agentic IDE (like Antigravity, Cursor, or Claude Code):

1. **Trigger the Agent**: Open a chat in your IDE and simply type:
   > *"Trigger QA automation"*
2. **Follow the Prompts**: The agent will guide you through selecting a Jira project and story.
3. **Review Code**: The agent will write the Playwright script. You can run the test using:
   ```bash
   npx playwright test
   ```

For full details on the 7-step process, see the [USER_GUIDE.md](./USER_GUIDE.md).

## 🛠️ Tech Stack
* **Playwright** (Testing Framework)
* **TypeScript**
* **Model Context Protocol (MCP)** (Jira & Playwright)
