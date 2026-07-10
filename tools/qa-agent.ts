#!/usr/bin/env ts-node
import inquirer from 'inquirer';
import axios from 'axios';
import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const repoRoot = process.cwd();

async function selectJiraProject() {
  const answers = await inquirer.prompt([
    { name: 'projectKey', message: 'Enter Jira project key (e.g. KAN)', validate: v => v ? true : 'Project key is required' },
    { name: 'baseUrl', message: 'Enter Jira base URL (e.g. https://vigneshsugumar2002.atlassian.net)', validate: v => v ? true : 'Jira URL is required' },
    { name: 'email', message: 'Enter Jira email', validate: v => v ? true : 'Email is required' },
    { name: 'apiToken', message: 'Enter Jira API token', type: 'password', validate: v => v ? true : 'API token is required' }
  ]);
  return answers;
}

async function queryCurrentSprintStories(baseUrl: string, auth: string, projectKey: string) {
  const jql = `project = ${projectKey} AND sprint in openSprints() ORDER BY priority DESC`;
  const url = `${baseUrl.replace(/\/$/, '')}/rest/api/2/search`;
  const response = await axios.get(url, { params: { jql, maxResults: 50 }, headers: { Authorization: auth } });
  return response.data.issues;
}

function printIssues(issues: any[]) {
  console.log('\nCurrent sprint stories:');
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.key} | ${issue.fields.summary} | ${issue.fields.status.name}`);
  });
}

async function chooseIssue(issues: any[]) {
  const choices = issues.map(issue => ({ name: `${issue.key} — ${issue.fields.summary} [${issue.fields.status.name}]`, value: issue.key }));
  const answer = await inquirer.prompt([{ name: 'issueKey', message: 'Select a Jira issue', type: 'list', choices }]);
  return answer.issueKey;
}

async function fetchIssueDetails(baseUrl: string, auth: string, issueKey: string) {
  const url = `${baseUrl.replace(/\/$/, '')}/rest/api/2/issue/${issueKey}`;
  const response = await axios.get(url, { headers: { Authorization: auth } });
  return response.data;
}

function extractGherkin(description: string): string {
  if (!description) return '(No description available)';
  const lines = description.split(/\r?\n/);
  const gherkinLines = lines.filter(line => /\b(Given|When|Then|And|Scenario)\b/i.test(line));
  return gherkinLines.length ? gherkinLines.join('\n') : '(No Gherkin found)';
}

function runMcpAnalysis(url: string, issueKey: string) {
  const mcpScript = path.join(repoRoot, 'tools', 'playwright-mcp.ts');
  if (!fs.existsSync(mcpScript)) {
    console.error('MCP analyzer script not found:', mcpScript);
    return;
  }
  spawnSync('npx', ['ts-node', mcpScript, '--url', url, '--issue', issueKey], { stdio: 'inherit' });
}

async function main() {
  console.log('QA Automation Agent Runtime');

  const jira = await selectJiraProject();
  const auth = `Basic ${Buffer.from(`${jira.email}:${jira.apiToken}`).toString('base64')}`;

  const issues = await queryCurrentSprintStories(jira.baseUrl, auth, jira.projectKey);
  if (!issues?.length) {
    console.log('No current sprint stories found.');
    return;
  }

  printIssues(issues);
  const issueKey = await chooseIssue(issues);

  const issueDetails = await fetchIssueDetails(jira.baseUrl, auth, issueKey);
  const gherkin = extractGherkin(issueDetails.fields.description || '');

  console.log('\nExtracted Gherkin:');
  console.log(gherkin);

  const manualUrlAnswer = await inquirer.prompt([{ name: 'targetUrl', message: 'Enter the URL for manual Playwright MCP analysis', validate: v => v ? true : 'URL is required' }]);
  runMcpAnalysis(manualUrlAnswer.targetUrl, issueKey);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
