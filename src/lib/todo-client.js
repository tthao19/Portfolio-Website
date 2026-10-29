import { addTask, deleteTask, loadTasks, saveTasks, toggleTask } from './todo.js';

/**
 * Wire up the todo app UI: form submit, checkbox toggle, delete, and rendering.
 * @param {Document|ParentNode} [root=document]
 */
export function initTodoApp(root = document) {
  if (typeof document === 'undefined') return;

  const form = root.querySelector('#task-form');
  const input = root.querySelector('#task-input');
  const list = root.querySelector('#task-list');
  const counter = root.querySelector('#task-counter');

  const targets = [['#task-form', form], ['#task-input', input], ['#task-list', list], ['#task-counter', counter]];
  for (const [id, el] of targets) {
    if (!el) {
      console.warn('[todo] missing element:', id);
      return;
    }
  }

  let tasks = loadTasks();

  function render() {
    list.replaceChildren();

    if (tasks.length === 0) {
      const item = document.createElement('li');
      item.className = 'task-empty';
      const text = document.createElement('span');
      text.className = 'task-empty__text';
      text.textContent = 'No tasks yet. Add one above.';
      item.append(text);
      list.append(item);
    } else {
      for (const task of tasks) {
        const item = document.createElement('li');
        item.className = 'task-item';
        item.dataset.id = task.id;
        if (task.done) item.classList.add('is-done');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.id = `task-${task.id}`;
        checkbox.dataset.id = task.id;
        checkbox.checked = task.done;
        checkbox.setAttribute('aria-label', 'Mark task as done');

        const label = document.createElement('label');
        label.className = 'task-label';
        label.htmlFor = `task-${task.id}`;
        label.textContent = task.title;

        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'task-delete';
        del.dataset.id = task.id;
        del.setAttribute('aria-label', 'Delete task');
        del.textContent = '×';

        item.append(checkbox, label, del);
        list.append(item);
      }
    }

    const remaining = tasks.filter((t) => !t.done).length;
    counter.textContent = `${remaining} task${remaining === 1 ? '' : 's'} remaining`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    const result = addTask(tasks, value);
    if (result.created) {
      tasks = result.tasks;
      saveTasks(tasks);
      input.value = '';
      render();
      input.focus();
    }
  });

  list.addEventListener('change', (e) => {
    const cb = e.target.closest('.task-checkbox');
    if (!cb) return;
    tasks = toggleTask(tasks, cb.dataset.id);
    saveTasks(tasks);
    render();
  });

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.task-delete');
    if (!btn) return;
    tasks = deleteTask(tasks, btn.dataset.id);
    saveTasks(tasks);
    render();
  });

  render();
}
