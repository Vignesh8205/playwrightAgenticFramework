# 🚀 VS Code Extension Development Checklist

## ✅ Setup Complete

Your VS Code extension is ready for development. Here's what was created:

### Core Extension Files
- ✅ `extension/src/extension.ts` — Main entry point
- ✅ `extension/src/controllers/agentController.ts` — Workflow orchestration  
- ✅ `extension/src/providers/qaAutomationProvider.ts` — Project detection
- ✅ `extension/src/views/playwrightProjectExplorer.ts` — Tree view UI
- ✅ `extension/src/integrations/jiraIntegration.ts` — Jira integration
- ✅ `extension/package.json` — Extension manifest
- ✅ `extension/tsconfig.json` — TypeScript config

### Documentation
- ✅ `extension/README.md` — User documentation
- ✅ `extension/DEVELOPMENT.md` — Developer guide
- ✅ `extension/CHANGELOG.md` — Version history
- ✅ `EXTENSION_SETUP.md` — Quick setup guide (you are here)

### VS Code Config
- ✅ `.vscode/launch.json` — Debug configuration
- ✅ `.vscode/tasks.json` — Build tasks
- ✅ `extension/.vscodeignore` — Package exclusions

### CI/CD & Publishing
- ✅ `.github/workflows/extension-tests.yml` — Automated tests
- ✅ `.github/workflows/publish-extension.yml` — Marketplace publishing
- ✅ `extension/.github/agents/qa-automation.agent.md` — Agent config

---

## 🎯 Quick Start (3 Steps)

```bash
# 1. Install dependencies
cd extension
npm install

# 2. Start development mode
npm run dev

# 3. Launch debugger (F5 in VS Code)
```

A new VS Code window opens with your extension loaded. Test commands from Command Palette (`Ctrl+Shift+P`).

---

## 📋 Development Workflow

### Daily Development

```bash
npm run dev              # Terminal 1: Watch & compile
# In VS Code: Press F5  # Terminal 2: Launch debugger
```

### Edit & Reload

1. Make changes in `extension/src/`
2. Auto-compiles on save
3. Reload extension: `Ctrl+Shift+F5`
4. Test in extension window

### Testing Commands

- **Start Agent**: `Playwright: Start QA Automation Agent`
- **Generate Test**: `Playwright: Generate Test from Story`
- **Select Project**: `Playwright: Select Playwright Project`
- **Refresh Sprints**: `Playwright: Refresh Jira Sprints`

---

## 📦 Publishing to VS Code Marketplace

### Prerequisites
- Bump version in `extension/package.json`
- Update `extension/CHANGELOG.md`
- VS Code Marketplace account
- Personal Access Token (PAT)

### Commands

```bash
# Install publishing tool
npm install -g vsce

# Package extension
cd extension
vsce package

# Publish to marketplace
vsce publish -p <YOUR_PAT_HERE>
```

---

## 🔧 Architecture Overview

### Extension Lifecycle

```
1. Activation
   ↓ extension.ts activates when:
   ↓ - Command executed
   ↓ - Playwright config detected
   ↓
2. Initialization
   ↓ Register providers & commands
   ↓ Initialize integrations (Jira, etc.)
   ↓
3. Runtime
   ↓ User runs command
   ↓ AgentController orchestrates workflow
   ↓ Results shown in UI/panels
   ↓
4. Code Generation
   ↓ Agent creates files
   ↓ Written to project structure
```

### Key Components

| Component | Purpose | File |
|-----------|---------|------|
| **extension** | Entry & initialization | `src/extension.ts` |
| **AgentController** | Workflow orchestration | `src/controllers/agentController.ts` |
| **QAAutomationProvider** | Project detection | `src/providers/qaAutomationProvider.ts` |
| **PlaywrightProjectExplorer** | Tree view UI | `src/views/playwrightProjectExplorer.ts` |
| **JiraIntegration** | Jira API client | `src/integrations/jiraIntegration.ts` |

---

## 🎮 Testing Your Extension

### Test Project Detection

```
Ctrl+Shift+P → Playwright: Select Playwright Project
```

Extension should detect your Playwright project automatically.

### Test Agent Workflow

```
Ctrl+Shift+P → Playwright: Start QA Automation Agent
→ Enter Jira key (e.g., DEMO-1)
→ Watch workflow execute
```

### Test Settings

```
Ctrl+, → Search "Playwright QA Agent"
Configure Jira URL and project key
```

---

## 🚨 Common Issues & Fixes

### Extension Not Loading

**Problem:** Extension doesn't activate  
**Solution:**
```bash
npm run compile                    # Check TypeScript errors
npm install                        # Reinstall dependencies
code --version                     # Verify VS Code 1.90+
```

### Commands Not Appearing

**Problem:** Command Palette is empty  
**Solution:**
- Reload window: `Ctrl+Shift+F5`
- Check Extension Host logs: `View > Output`
- Verify `activationEvents` in `package.json`

### Jira Not Connecting

**Problem:** Jira integration fails  
**Solution:**
```
1. Verify Jira URL: https://your-org.atlassian.net
2. Check workspace settings (Ctrl+,)
3. Run: Playwright: Configure Jira
```

---

## 📚 File Structure Reference

```
extension/                         # Extension directory
├── src/
│   ├── extension.ts              # DO: Start here
│   ├── controllers/
│   │   └── agentController.ts   # DO: Add workflows
│   ├── providers/
│   │   └── qaAutomationProvider.ts # DO: Add logic
│   ├── views/
│   │   └── playwrightProjectExplorer.ts # DO: Add UI
│   └── integrations/
│       └── jiraIntegration.ts   # DO: Add integrations
├── dist/                        # DON'T: Edit (auto-generated)
├── node_modules/               # DON'T: Edit (dependencies)
├── package.json                # DO: Update version for release
├── tsconfig.json              # MAYBE: Adjust compiler options
├── README.md                  # DO: Update user docs
├── DEVELOPMENT.md             # Reference guide
└── .vscodeignore             # DO: Update before publishing
```

---

## 🔄 Build Pipeline

### Development Build
```bash
npm run esbuild        # Creates dist/extension.js with source maps
```

### Production Build
```bash
npm run vscode:prepublish  # Minified, optimized for release
```

### Type Checking
```bash
npm run compile        # Find TypeScript errors
```

---

## 🎯 Next Steps

### Phase 1: Local Development ✅
- ✅ Install dependencies
- ✅ Start dev mode (`npm run dev`)
- ✅ Launch debugger (`F5`)
- ✅ Test extension features

### Phase 2: Feature Development
- [ ] Add more commands
- [ ] Create web views for UI
- [ ] Integrate MCP servers
- [ ] Add configuration options

### Phase 3: Testing & QA
- [ ] Add unit tests
- [ ] Test on different VS Code versions
- [ ] Test with different Playwright projects
- [ ] Verify marketplace metadata

### Phase 4: Publishing
- [ ] Create marketplace account
- [ ] Generate PAT token
- [ ] Update CHANGELOG
- [ ] Package and publish
- [ ] Verify on marketplace

---

## 💡 Development Tips

### Hot Reload
```bash
npm run dev              # Auto-recompile on save
# Then: Ctrl+Shift+F5 in extension window to reload
```

### Debug Output
```typescript
console.log('Debug info:', data);  // Visible in Extension Host logs
```

### View Extension Logs
```
View > Output > Extension Host
```

### Test Marketplace Locally
```bash
cd extension
vsce package                              # Creates .vsix file
code --install-extension playwright-qa-agent-1.0.0.vsix
```

---

## 📞 Support & Resources

- **VS Code API Docs**: https://code.visualstudio.com/api
- **Extension Publishing**: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
- **Marketplace Guidelines**: https://code.visualstudio.com/api/references/extension-manifest
- **Tree View Guide**: https://code.visualstudio.com/api/extension-guides/tree-view

---

## ✨ You're Ready!

```bash
cd extension
npm install && npm run dev
# Press F5 in VS Code...
# 🚀 Your extension is running!
```

**Happy coding! 🎉**
