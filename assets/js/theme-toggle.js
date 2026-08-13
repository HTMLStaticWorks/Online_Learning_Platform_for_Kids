(function() {
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return 'light'; // Default to light mode for kid friendliness
  };

  const getPreferredDir = () => {
    return localStorage.getItem('dir') || 'ltr';
  };

  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
      document.body?.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body?.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  };

  const setDir = (dir) => {
    document.documentElement.dir = dir;
    localStorage.setItem('dir', dir);
  };

  // Apply immediately before DOM renders to prevent flashing
  const initialTheme = getPreferredTheme();
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }

  const initialDir = getPreferredDir();
  if (initialDir === 'rtl') {
    document.documentElement.dir = 'rtl';
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (initialTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }

    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
    
    const updateThemeToggleIcons = (theme) => {
      themeToggleBtns.forEach(btn => {
        const sunIcon = btn.querySelector('.sun-icon');
        const moonIcon = btn.querySelector('.moon-icon');
        if (theme === 'dark') {
          if (sunIcon) sunIcon.classList.remove('d-none');
          if (moonIcon) moonIcon.classList.add('d-none');
        } else {
          if (sunIcon) sunIcon.classList.add('d-none');
          if (moonIcon) moonIcon.classList.remove('d-none');
        }
      });
    };

    const updateRtlToggleText = (dir) => {
      rtlToggleBtns.forEach(btn => {
        btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      });
    };

    themeToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        updateThemeToggleIcons(newTheme);
      });
    });

    rtlToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentDir = document.documentElement.dir || 'ltr';
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        setDir(newDir);
        updateRtlToggleText(newDir);
      });
    });

    updateThemeToggleIcons(initialTheme);
    updateRtlToggleText(initialDir);
  });
})();
