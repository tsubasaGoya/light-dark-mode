const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function imageMode(mode) {
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

function switchedTo(mode) {
    mode === 'light' ? toggleSwitch.checked = false : toggleSwitch.checked = true;
    nav.style.backgroundColor = mode === 'light' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = mode === 'light' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = mode === 'light' ? 'Light Mode' : 'Dark Mode';
    mode === 'light' ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode(mode);
}

function setItems(key) {
    document.documentElement.setAttribute('data-theme', key);
    localStorage.setItem('theme', key);
    switchedTo(key);
}

// Switch Theme
function switchTheme(e) {
    let mode = e.target.checked ? 'dark' : 'light';
    setItems(mode);
}

// Toggle event
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage value for Theme
const theTheme = localStorage.getItem('theme');
if (theTheme) {
    document.documentElement.setAttribute('data-theme', theTheme);
    switchedTo(theTheme);
}