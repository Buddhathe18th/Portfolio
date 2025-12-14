const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();


const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

// Prefer saved theme, otherwise OS preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

setTheme(initialTheme);

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  localStorage.setItem('theme', next);
});

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
  } else {
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
  }
}
