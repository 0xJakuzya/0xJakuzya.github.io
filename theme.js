(function () {
  var savedTheme;
  
  try {
    savedTheme = localStorage.getItem('theme');
  } catch (error) {}

  if (savedTheme === 'dark') {
    document.documentElement.dataset.theme = 'dark'
  };

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;

    function updateButton() {
      var dark = document.documentElement.dataset.theme === 'dark';
      var label = document.documentElement.lang === 'ru'
        ? (dark ? 'Включить светлую тему' : 'Включить тёмную тему')
        : (dark ? 'Switch to light theme' : 'Switch to dark theme');
      button.textContent = dark ? '☀' : '☾';
      button.setAttribute('aria-label', label);
      button.title = label;
    }

    button.addEventListener('click', function () {
      var theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {}
      updateButton();
    });
    document.addEventListener('languagechange', updateButton);
    updateButton();
  });
})();
