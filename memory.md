# Memory File: tythao.dev Portfolio & Todo App

## 1. Project Summary
This project is a personal developer hub and a demonstration of a standalone Todo application. It is built using **Astro** with a focus on **Neo-brutalism** aesthetics, **Local AI** capabilities, and **Edge Inference**.

- **Core Goal**: Showcase developer skills in systems building, UI design (Astro/CSS), and AI integration.
- **Stack**: Astro (static site generator), Vanilla JS (interactivity), CSS (custom styling), and local AI models.
- **State**: **MVP Complete**. The Todo app is functional with local storage, and the portfolio index is styled and responsive.

## 2. Development Log & Summary

### A. Todo Application (Standalone)
- **Status**: ✅ Working
- **Features**: Add, delete, and toggle tasks. Persistence via `localStorage`.
- **Technical Wins**: 
  - Fixed ES module scoping issues in `todo.astro` by ensuring `import { initTodoApp }` was inside the `<script>` block.
  - Verified E2E via Playwright (adding tasks and confirming `localStorage` updates).
- **UI**: Added a top navigation bar (HOME / INFO) with a bold, high-contrast style.
- **Info Panel**: Added a collapsible "HOW IT'S BUILT" panel showing the multi-agent git worktree story with commit graph and agent lanes.

### B. Portfolio Index (`index.astro`)
- **Status**: 🔄 In Progress
- **Features**:
  - **Hero Section**: "Systems Builder" branding.
  - **Skills Showcase**:
    - **Hybrid AI Projects**: Hybrid approach (Local edge execution + Gemini for assisted wiring). Updated description text.
    - **System Architecture**: Workflow design and mapping. Added "Explore Pipeline" button (clickable, no action yet).
  - **Design System**: Neo-brutalism with a focus on high-contrast borders (3px solid) and "pop" colors (Red, Yellow, Cyan, Purple).
  - **Theme Toggle**: Fixed icon overlap bug using CSS `:has()` selector + `window.load` event listener for Lucide CDN re-render.

## 3. Action Items & Roadmap

### High Priority (Current Focus)
1. ~~**Fix Contrast Issue**~~ ✅ RESOLVED: "System Architecture" heading uses pop-red accent color.
2. ~~**Rewrite "Local AI" Description**~~ ✅ RESOLVED: Now "HYBRID AI PROJECTS" with clear hybrid approach text.
3. **E2E Button Audit** (in progress):
   - [x] "Explore Environment" — styled, clickable (no action yet)
   - [x] "Explore Pipeline" — styled, clickable (no action yet)
   - [ ] "Launch App ↗" — **DEAD BUTTON** (no href, no onclick)
   - [ ] Navigation links — HOME / INFO verified on /todo
   - **Goal**: Ensure no "dead" buttons remain.

### Medium Priority
4. **Build `/info` Page**: 
   - Create a page summarizing the development process and the hybrid AI approach.
   - Include screenshots or diagrams of the "How it was made" process.
5. **GitHub Integration**:
   - Create a new GitHub account with the project's dedicated email.
   - Initialize a Git repo and push the project.
   - **NOTE**: Local repo exists on `master` branch but NO REMOTE configured.

### Low Priority (Finalization)
6. **Final Pre-Push Checklist & Commit**:
   - [x] **Check Modified Files**: `git status` shows 4 modified files (.gitignore, index.astro, todo.astro, todo.css)
   - [ ] **Verify `.gitignore`**: Ensure `node_modules/` and `.astro/` are ignored.
   - [ ] **Double-Check `LocalStorage`**: Confirm tasks persist after refresh on `/todo`.
   - [ ] **Clean Build**: ✅ `astro build` passes (2 pages, 0 errors)
   - [ ] **Execute Push**: BLOCKED — no remote configured
     ```bash
     git add .
     git commit -m "feat: update portfolio content, fix theme toggle, add info panel and buttons"
     git push origin master
     ```

## 4. Technical Notes
- **Astro Version**: 7.4.4
- **Dev Server**: `astro dev --host 127.0.0.1 --port 4322`
- **CSS**: `todo.css` uses a strict Neo-brutalist palette. `index.astro` uses CSS variables for a flexible light/dark theme.
- **Local Storage Keys**: `todo.tasks` (for Todo app), `theme` (for index page dark mode).
- **Git**: Local repo on `master` branch. No remote configured. 3 commits so far.

## 5. File Structure
```
astro_test/
├── src/
│   ├── pages/
│   │   ├── index.astro      # Portfolio Hub (Astro)
│   │   └── todo.astro       # Todo App (Astro)
│   ├── lib/
│   │   ├── todo.js          # Core Todo logic (pure JS)
│   │   └── todo-client.js   # Client-side Todo wiring
│   └── styles/
│       └── todo.css         # Neo-brutalist styles for Todo
├── dist/                    # Build output
└── memory.md                # This file
```