const toggleMenuInput = document.getElementById('checkbox');
const menuToggle = document.getElementById('menuToggle');
const backTopTop = document.getElementById('backtop-btn');
const menuNav = document.getElementById('nav');

function start() {
    toggleMenu();
}

function toggleMenu() {
    if(toggleMenuInput.checked) {
        menuNav.classList.add('showNav');
        menuNav.classList.remove('hideNav');
    } else {
        menuNav.classList.remove('showNav');
        menuNav.classList.add('hideNav');
    }
}

function toSection() {
    if(toggleMenuInput.checked) {
        toggleMenuInput.checked = false;
        toggleMenu();
    }
}

document.addEventListener('mousedown', (event) => {
    if(!menuNav.contains(event.target) && !event.target.closest('#menuToggle')) {
        toggleMenuInput.checked = false;
        toggleMenu();
    }
});

function toHome() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if(scrollY >= 69.5999984741211) {
        backTopTop.classList.add('showBacktoTop');
        if(backTopTop.classList.contains('hideBacktoTop')) {
            backTopTop.classList.remove('hideBacktoTop');
        }
    } else if (scrollY < 90) {
        backTopTop.classList.add('hideBacktoTop');
        if(backTopTop.classList.contains('showBacktoTop')) {
            backTopTop.classList.remove('showBacktoTop');
        }
    }
})

toggleMenuInput.addEventListener('click', toggleMenu);
backTopTop.addEventListener('click', toHome);