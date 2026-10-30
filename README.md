# TTHAO — Developer Hub & Portfolio

> A personal developer portfolio and project hub, built with [Astro](https://astro.build).

## 🧭 What's inside

- **Home** (`/`) — a data-driven project carousel. Each card is driven by a single entry in `src/lib/projects.js`.
- **Todo App** (`/todo/`) — a self-contained task manager with LocalStorage persistence.

## ➕ Adding a new project

1. Add a page under `src/pages/` (or point to an external URL).
2. Add one object to the `projects` array in `src/lib/projects.js`.

That's it — the carousel picks it up automatically.

## 🤖 How it's built

A hybrid, AI-assisted workflow: **local models build the majority of the project, and frontier models assist when it matters.** I architect the solution and direct the AI agents that write the code.

## 🧞 Commands

Run from the project root:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the local build                     |