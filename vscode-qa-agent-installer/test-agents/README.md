# AI Driven Consultancy - QA Automation Framework

This is a High Level (Enterprise) Playwright Automation Framework scaffolded for testing the [AI Driven Consultancy](https://aidrivenconsultancy.com/) web application.

## Directory Structure

```text
├── api/             # API test helpers (to be expanded)
├── components/      # Reusable UI components (e.g., HeaderComponent.ts)
├── data/            # Static test data (JSON/CSV)
├── fixtures/        # Custom Playwright fixtures for page injection
├── pages/           # Page Objects (BasePage, HomePage, etc.)
├── tests/           # Test scripts (sanity.spec.ts)
├── utils/           # Helper utilities (Network helpers, Env helpers, Faker data)
├── playwright.config.ts # Playwright configuration
```

## Setup & Installation

1. Install dependencies:
```bash
npm install
npx playwright install
```

2. Environment Variables:
Copy `.env.example` to `.env` or set `BASE_URL=https://aidrivenconsultancy.com`

## Running Tests

- Run all tests headlessly:
  ```bash
  npm run test
  ```
- Run tests with UI mode:
  ```bash
  npm run test:ui
  ```

## Linting & Formatting

- Check code quality:
  ```bash
  npm run lint
  ```
- Format code automatically:
  ```bash
  npm run format
  ```
