// Load saved theme from Local Storage (or default to light)
let theme = localStorage.getItem('theme');

if (theme === null) {
  setTheme('light');
} else {
  setTheme(theme);
}

// Select all theme buttons and listen for clicks
let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log('Theme option clicked!', mode);
    setTheme(mode);
  });
}

// Change page theme dynamically based on user selection
function setTheme(mode) {
  if (mode === 'light') {
    document.getElementById('theme-style').href = 'assets/css/default.css';
  } else if (mode === 'blue') {
    document.getElementById('theme-style').href = 'assets/styles/blue.css';
  } else if (mode === 'green') {
    document.getElementById('theme-style').href = 'assets/styles/green.css';
  } else if (mode === 'purple') {
    document.getElementById('theme-style').href = 'assets/styles/purple.css';
  } else {
    document.getElementById('theme-style').href = 'assets/css/default.css';
  }

  // Save the selected theme
  localStorage.setItem('theme', mode);
}
