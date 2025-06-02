document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

document.getElementById('toggleContactBtn').addEventListener('click', () => {
  const form = document.getElementById('contactForm');
  form.classList.toggle('hidden');
});

// Load saved theme
window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark');
  }
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskTime = document.getElementById('taskTime');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();
  const time = taskTime.value;

  if (taskText === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  const label = document.createElement('label');
  label.textContent = ` ${taskText} (${time})`;

  li.appendChild(checkbox);
  li.appendChild(label);
  taskList.appendChild(li);

  // Optional: show reminder
  if (time) {
    const [hour, minute] = time.split(':').map(Number);
    const now = new Date();
    const reminderTime = new Date();
    reminderTime.setHours(hour, minute, 0, 0);
    const delay = reminderTime - now;

    if (delay > 0) {
      setTimeout(() => {
        alert(`⏰ Reminder: ${taskText}`);
      }, delay);
    }
  }

  taskInput.value = '';
  taskTime.value = '';
}
