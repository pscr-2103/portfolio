// Theme Switcher — persists preference in localStorage
(function () {
  const root = document.documentElement;
  const btn  = document.getElementById('theme-toggle');
  const icon = btn?.querySelector('.theme-toggle__icon');
  const label = btn?.querySelector('.theme-toggle__label');

  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (icon)  icon.textContent  = theme === 'dark' ? '☀️' : '🌙';
    if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  apply(saved);

  btn?.addEventListener('click', () => {
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
