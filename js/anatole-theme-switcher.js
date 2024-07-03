function getTheme() {
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

function setTheme(theme) {
    console.log("hello");
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function init() {
    const savedTheme = getTheme();
    if (savedTheme === null) {
        setTheme('light')
    } else {
        savedTheme === 'light' ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function switchTheme() {
    const currentTheme = getTheme();
    currentTheme === 'light' ? setTheme('dark') : setTheme('light');
}

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.theme-switch');
    themeSwitch.addEventListener('click', switchTheme, false);
}, false);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchTheme, false);

init();
