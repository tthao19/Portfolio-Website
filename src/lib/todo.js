// Pure task-state logic + SSR-safe LocalStorage persistence.
// No dependencies, no DOM access, importable from Node and the browser.

export const STORAGE_KEY = 'todo.tasks';

const MAX_TITLE_LENGTH = 200;

// Browser-only storage key guard. `localStorage` is not part of the SSR runtime,
// so referencing it directly in a module that Astro might import during the
// server render pass would throw.
const canUseBrowserStorage = () =>
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const isString = (v) => typeof v === 'string';

const isArray = (v) => Array.isArray(v);

export function sanitizeTitle(raw) {
  const text = isString(raw) ? raw : '';
  const cleaned = text.trim().replace(/\s+/g, ' ');
  return cleaned.slice(0, MAX_TITLE_LENGTH);
}

export function makeId() {
  const uuid = globalThis.crypto?.randomUUID?.();
  if (typeof uuid === 'string' && uuid.length > 0) {
    return uuid;
  }
  return `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export function addTask(tasks, rawTitle) {
  const safeTitle = sanitizeTitle(rawTitle);
  if (safeTitle === '') {
    return { tasks, created: null };
  }
  const base = isArray(tasks) ? tasks : [];
  const created = {
    id: makeId(),
    title: safeTitle,
    done: false,
    createdAt: new Date().toISOString(),
  };
  return { tasks: [...base, created], created };
}

export function toggleTask(tasks, id) {
  if (!isArray(tasks)) {
    return [];
  }
  return tasks.map((task) =>
    task && task.id === id ? { ...task, done: !task.done } : task,
  );
}

export function deleteTask(tasks, id) {
  if (!isArray(tasks)) {
    return [];
  }
  return tasks.filter((task) => !(task && task.id === id));
}

function isValidTask(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    return false;
  }
  if (!isString(entry.id) || entry.id === '') {
    return false;
  }
  if (!isString(entry.title)) {
    return false;
  }
  return true;
}

function normalizeTask(entry) {
  return {
    id: entry.id,
    title: entry.title,
    done: Boolean(entry.done),
    createdAt: isString(entry.createdAt) ? entry.createdAt : new Date(0).toISOString(),
  };
}

function getStorage() {
  if (!canUseBrowserStorage()) {
    return null;
  }
  return window.localStorage;
}

export function loadTasks() {
  const storage = getStorage();
  if (!storage) {
    return [];
  }
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (raw === null) {
      return [];
    }
    const payload = JSON.parse(raw);
    if (!payload || typeof payload !== 'object' || !isArray(payload.tasks)) {
      return [];
    }
    const tasks = [];
    for (const entry of payload.tasks) {
      if (isValidTask(entry)) {
        tasks.push(normalizeTask(entry));
      }
    }
    return tasks;
  } catch {
    return [];
  }
}

export function saveTasks(tasks) {
  const storage = getStorage();
  if (!storage) {
    return false;
  }
  const list = isArray(tasks) ? tasks : [];
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, tasks: list }));
    return true;
  } catch {
    return false;
  }
}

export function countRemaining(tasks) {
  if (!isArray(tasks)) {
    return 0;
  }
  return tasks.filter((task) => task && task.done !== true).length;
}
