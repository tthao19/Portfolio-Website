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

### B. Portfolio Index (`index.astro`)
- **Status**: 🔄 In Progress
- **Features**:
  - **Hero Section**: "Systems Builder" branding.
  - **Skills Showcase**:
    - **Local AI Inference**: Hybrid approach (Local edge execution + Gemini for assisted wiring).
    - **System Architecture**: Workflow design and mapping.
  - **Design System**: Neo-brutalism with a focus on high-contrast borders (3px solid) and "pop" colors (Red, Yellow, Cyan, Purple).

## 3. Action Items & Roadmap

### High Priority (Current Focus)
1. **Fix Contrast Issue**: "System Architecture & Workflow Design" heading uses yellow text on a white background. 
   - **Task**: Change background to dark, or yellow text to black with a shadow, or use blue text for better readability.
2. **Rewrite "Local AI" Description**: 
   - **Current**: "Running lightweight local models directly on edge environments..."
   - **New Focus**: Clarify the **Hybrid** nature. Local execution is the core, but Gemini was used to assist with the "wiring" and integration of the Todo app logic.
3. **E2E Button Audit**:
   - **Task**: Perform a full End-to-End check of all buttons.
   - **Targets**: "Launch App", "Explore Environment", and navigation links.
   - **Goal**: Ensure no "dead" buttons remain.

### Medium Priority
4. **Build `/info` Page**: 
   - Create a page summarizing the development process and the hybrid AI approach.
   - Include screenshots or diagrams of the "How it was made" process.
5. **GitHub Integration**:
   - Create a new GitHub account with the project's dedicated email.
   - Initialize a Git repo and push the project.

### Low Priority (Finalization)
6. **Final Pre-Push Checklist & Commit**:
   - **Check Modified Files**: Run `git status` to verify only expected files were changed.
   - **Verify `.gitignore`**: Ensure `node_modules/` and `.astro/` are ignored.
   - **Double-Check `LocalStorage`**: Confirm tasks persist after refresh on `/todo`.
   - **Clean Build**: Stop the local dev server (`Ctrl + C`) to release file locks.
   - **Execute Push**:
     ```bash
     git add .
     git commit -m "feat: complete todo app route integration with localstorage state and portfolio navigation"
     git push origin main
     ```

## 4. Technical Notes
- **Astro Version**: 7.4.4
- **Dev Server**: `astro dev --host 127.0.0.1 --port 4322`
- **CSS**: `todo.css` uses a strict Neo-brutalist palette. `index.astro` uses CSS variables for a flexible light/dark theme.
- **Local Storage Keys**: `todo.tasks` (for Todo app), `theme` (for index page dark mode).

## 5. File Structure
```
astro_test/
├── src/
│   ├── pages/
│   │   ├── index.astro      # Portfolio Hub (Astro)
│   │   ├── todo.astro       # Todo App (Astro)
│   │   └── info.astro       # (Pending) Summary page
│   ├── lib/
│   │   └── todo-client.js   # Core logic for the Todo app
│   └── styles/
│       └── todo.css         # Neo-brutalist styles for Todo
├── dist/                    # Build output
└── memory.md                # This file
```