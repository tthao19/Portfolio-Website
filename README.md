# TTHAO — Developer Hub & Portfolio

> A personal developer portfolio and project hub — self-contained static HTML, ready to deploy.

## 🧭 What's inside

- **Home** (`/`) — a data-driven project carousel. Each card is driven by a single entry in `src/lib/projects.js`.
- **Todo App** (`/todo/`) — a self-contained task manager with LocalStorage persistence.

## 📦 How it's deployed

The repository on GitHub contains only the built, self-contained static files (all CSS and JS are inlined into each HTML page). No build step is needed — just clone and open `index.html`, or point your hosting at the repo root.

## ➕ Adding a new project

1. Add a page under `src/pages/` (or point to an external URL).
2. Add one object to the `projects` array in `src/lib/projects.js`.

That's it — the carousel picks it up automatically.

## 🤖 How it's built

A hybrid, AI-assisted workflow: **local models build the majority of the project, and frontier models assist when it matters.** I architect the solution and direct the AI agents that write the code.

## 🧞 Local Development

The Astro source lives locally (git-ignored) and can be regenerated:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the local build                     |