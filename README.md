# Playwright Agentic Framework

Welcome to the **Playwright Agentic Framework**! This repository is designed to demonstrate an advanced, fully automated QA workflow using Agentic AI, Playwright, and Jira. 

By leveraging the Model Context Protocol (MCP), this repository contains AI Agent profiles and instructions that can autonomously pull Jira stories, execute manual tests against a web UI, and write framework-compliant Playwright automation scripts.

## 🌟 Key Features

* **End-to-End Automation Loop**: Turns Jira User Stories into Playwright code in a single prompt.
* **Post-Automation Sync**: Automatically generates Pull Requests, commits code, and updates Jira status to "Done".
* **Framework Agnostic Learning**: The agent dynamically scans the repository's directories (`pages/`, `fixtures/`, `tests/`) to understand your coding standards and dependency injection mechanisms before writing code.
* **Page Object Model (POM) Standard**: Strictly enforces the use of POMs and Playwright Fixtures (`customFixtures.ts`).
* **MCP Integrations**:
  * **Jira MCP**: Used to pull project lists, active sprints, and user stories directly from Atlassian.
  * **Playwright MCP**: Used to launch headless browsers and analyze the DOM for robust element locators.

## 📸 Test Execution Screenshots in PRs

When the `pr-jira-sync` skill is triggered, the agent generates a Playwright HTML report and captures a screenshot of the test results locally. 

**Important Note:** 
Because the GitHub CLI and GitHub APIs do not allow direct, programmatic uploads to GitHub's issue comment CDN, the agent will present the screenshot to you locally via an artifact. You can then **drag and drop** the screenshot into your Pull Request on GitHub. 
*Alternatively, you can configure GitHub Actions (Recommended CI approach) or use the GitHub MCP server to automatically commit screenshot files into your branch.*

## 📁 Repository Structure

* `.agents/skills/`: Contains the Antigravity `SKILL.md` files that define the interactive workflows (`copilot_qa_automation` and `pr_jira_sync`).
* `.github/agents/`: Contains the AI Agent Profiles (`copilot-qa-automation.md`, `pr-jira-sync.md`) mapping the agents to the custom skills.
* `pages/`: Page Object Models defining UI elements and actions (e.g., `ContactPage.ts`, `Navigation.ts`).
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
4. **Finalize & Sync**: Once testing is complete, type:
   > *"Run the pr-jira-sync skill"*
   The agent will commit changes, raise a PR, and transition your Jira ticket to Done!

For full details on the 7-step process, see the [USER_GUIDE.md](./USER_GUIDE.md).

## 🛠️ Tech Stack
* **Playwright** (Testing Framework)
* **TypeScript**
* **Model Context Protocol (MCP)** (Jira & Playwright)
