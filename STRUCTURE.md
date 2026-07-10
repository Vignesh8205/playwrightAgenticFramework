# 📁 Extension Directory Structure

## Complete File Tree

```
playwrightAgenticFramework/
│
├── 📂 extension/                              ← VS CODE EXTENSION
│   ├── 📂 src/
│   │   ├── extension.ts                       # Entry point - registers commands
│   │   ├── 📂 controllers/
│   │   │   └── agentController.ts            # Test generation workflow
│   │   ├── 📂 providers/
│   │   │   └── qaAutomationProvider.ts       # Project detection & management
│   │   ├── 📂 views/
│   │   │   └── playwrightProjectExplorer.ts  # Tree view sidebar UI
│   │   └── 📂 integrations/
│   │       └── jiraIntegration.ts            # Jira API connection
│   │
│   ├── 📂 dist/                               # Generated (do NOT edit)
│   │   └── extension.js                      # Compiled & bundled code
│   │
│   ├── 📂 media/                              # Icons & images (future)
│   │
│   ├── 📂 .github/
│   │   └── 📂 agents/
│   │       └── qa-automation.agent.md        # Agent config for extension
│   │
│   ├── 📄 package.json                        # Extension manifest
│   ├── 📄 tsconfig.json                       # TypeScript configuration
│   ├── 📄 .vscodeignore                       # Files excluded from package
│   ├── 📄 README.md                           # User documentation
│   ├── 📄 DEVELOPMENT.md                      # Developer guide
│   ├── 📄 CHANGELOG.md                        # Release notes
│   └── 📄 node_modules/                       # Dependencies (auto-installed)
│
├── 📂 .vscode/                                # VS Code workspace config
│   ├── launch.json                            # Debug launcher config
│   └── tasks.json                             # Build/compile tasks
│
├── 📂 .github/
│   ├── 📂 workflows/
│   │   ├── extension-tests.yml                # CI/CD tests on push/PR
│   │   └── publish-extension.yml              # Auto-publish on tag
│   │
│   └── 📂 agents/
│       └── qa-automation.agent.md             # Original agent config (root)
│
├── 📂 .github/
│   └── 📂 instructions/
│       └── framework-standards.instructions.md # Framework conventions
│
├── 📂 [Your Playwright Project Files]
│   ├── tests/
│   ├── pom/
│   ├── fixtures/
│   ├── testdata/
│   ├── utils/
│   ├── playwright.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── 📄 EXTENSION_SETUP.md                      # Setup & reference guide
├── 📄 QUICKSTART.md                           # 3-step quick start
└── 📄 STRUCTURE.md                            # This file
```

---

## 🔑 Key Files Explained

### Entry Point
- **`extension/src/extension.ts`**  
  Main activation logic. Registers all commands and initializes providers. This is where the extension "wakes up."

### UI & Navigation
- **`extension/src/views/playwrightProjectExplorer.ts`**  
  Renders the "QA Automation" tree view in the Explorer sidebar.

### Business Logic
- **`extension/src/providers/qaAutomationProvider.ts`**  
  Detects Playwright projects, analyzes framework structure.

### Workflows
- **`extension/src/controllers/agentController.ts`**  
  Orchestrates the test generation workflow (select project → fetch issue → invoke agent → generate code).

### External Integration
- **`extension/src/integrations/jiraIntegration.ts`**  
  Connects to Jira API to fetch issues and sprint data.

### Manifest
- **`extension/package.json`**  
  VS Code extension manifest. Defines commands, contributes, activation events, settings.

### Configuration
- **`.vscode/launch.json`**  
  Debug configuration. Tells VS Code how to launch the extension.

- **`.vscode/tasks.json`**  
  Build tasks. Defines `npm run` commands for compilation.

### CI/CD
- **`.github/workflows/extension-tests.yml`**  
  Runs tests automatically on push/PR.

- **`.github/workflows/publish-extension.yml`**  
  Publishes to VS Code Marketplace on git tag.

### Documentation
- **`extension/README.md`** — What users read when installing
- **`extension/DEVELOPMENT.md`** — Developer guide (extensive)
- **`extension/CHANGELOG.md`** — Release notes
- **`QUICKSTART.md`** — Get started in 3 steps
- **`EXTENSION_SETUP.md`** — Full reference guide

---

## 📊 What Each File Does

| File | Purpose | Edit? |
|------|---------|-------|
| `extension.ts` | Entry point, command registration | ✅ YES |
| `agentController.ts` | Test workflow orchestration | ✅ YES |
| `qaAutomationProvider.ts` | Project detection logic | ✅ YES |
| `playwrightProjectExplorer.ts` | Tree view rendering | ✅ YES |
| `jiraIntegration.ts` | Jira API client | ✅ YES |
| `package.json` | Manifest & config | ✅ YES (version) |
| `tsconfig.json` | TypeScript settings | ⚠️ MAYBE |
| `dist/extension.js` | Compiled code | ❌ NO (auto-generated) |
| `node_modules/` | Dependencies | ❌ NO (auto-installed) |
| `.vscodeignore` | Package exclusions | ⚠️ MAYBE |
| `launch.json` | Debug config | ❌ NO (pre-configured) |
| `tasks.json` | Build tasks | ❌ NO (pre-configured) |
| `README.md` | User docs | ✅ YES |
| `DEVELOPMENT.md` | Dev reference | ✅ YES (as reference) |

---

## 🔄 File Generation & Flow

### 1. Development
```
You edit: src/extension.ts, src/providers/..., src/views/...
         ↓
TypeScript compiles (tsc)
         ↓
esbuild bundles
         ↓
dist/extension.js is generated
         ↓
Extension Host loads dist/extension.js
         ↓
Your changes are live (reload with Ctrl+Shift+F5)
```

### 2. Packaging
```
All source files + assets
         ↓
Files listed in .vscodeignore are excluded
         ↓
vsce package creates .vsix file
         ↓
.vsix is ready for distribution
```

### 3. Publishing
```
.vsix file
         ↓
vsce publish (authenticated with PAT)
         ↓
File uploads to VS Code Marketplace
         ↓
Users can install via marketplace
```

---

## 💾 Dependencies

### Runtime
- None (VS Code provides runtime)

### Development
- **Node.js** 18+ (compile time)
- **TypeScript** (compile time)
- **esbuild** (bundler)
- **vsce** (packaging tool)

Auto-installed with `npm install`.

---

## 🚀 How to Use These Files

### Phase 1: Development
```bash
cd extension
npm install               # Install dependencies
npm run dev             # Watch & compile on save
# Press F5 in VS Code   # Launch debugger
# Edit files in src/    # Make changes
# Ctrl+Shift+F5         # Reload extension
```

### Phase 2: Testing
```
Test commands via Command Palette (Ctrl+Shift+P)
- Playwright: Start QA Automation Agent
- Playwright: Generate Test from Story
- Check sidebar for tree view
```

### Phase 3: Packaging
```bash
npm run vscode:prepublish    # Production build (minified)
vsce package                 # Creates .vsix file
```

### Phase 4: Publishing
```bash
vsce publish -p <TOKEN>      # Push to marketplace
```

---

## 📋 File Statistics

| Category | Count | Location |
|----------|-------|----------|
| TypeScript sources | 5 | `extension/src/**/*.ts` |
| Config files | 4 | `extension/*.json`, `.vscode/*.json` |
| Markdown docs | 6 | `extension/*.md`, root `*.md` |
| CI/CD workflows | 2 | `.github/workflows/*.yml` |
| Agent configs | 2 | `.github/agents/*.md` |
| Generated files | 1+ | `dist/` (auto-generated) |

---

## 🔐 Important Notes

### Don't Edit
- ❌ `dist/extension.js` — Auto-generated from `src/`
- ❌ `node_modules/` — Install with `npm install`
- ❌ `extension.js` files generated by esbuild

### Always Edit
- ✅ `src/**/*.ts` — TypeScript source
- ✅ `package.json` — Update version for release
- ✅ `*.md` — Documentation

### Sometimes Edit
- ⚠️ `tsconfig.json` — If you need different compiler options
- ⚠️ `.vscodeignore` — If you add new asset types to exclude

---

## 📐 Total Project Size

- **Source code**: ~500 lines TypeScript
- **Config files**: ~200 lines (JSON/YAML)
- **Documentation**: ~2000 lines (Markdown)
- **node_modules**: ~500 MB (dev dependencies)
- **Final package**: ~100 KB (minified + bundled)

---

## ✅ Verification Checklist

Verify extension structure:

```bash
# From root of playwrightAgenticFramework
ls -la extension/src/                  # Should show 4 subdirs + extension.ts
ls extension/package.json              # Should exist
ls .vscode/launch.json                 # Should exist
ls .github/workflows/                  # Should have 2 .yml files
```

---

## 🎯 Next Steps

1. ✅ **Read** `QUICKSTART.md` for 3-step setup
2. ✅ **Run** `npm install && npm run dev`
3. ✅ **Launch** debugger with `F5`
4. ✅ **Test** commands from Command Palette
5. ✅ **Develop** new features in `src/`

---

**Everything is set up and ready! Start with `npm run dev` and `F5`. 🚀**
