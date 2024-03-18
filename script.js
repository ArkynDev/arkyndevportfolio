const toggleMenuInput = document.getElementById('checkbox');
const menuNav = document.getElementById('nav');

function toggleMenu() {
    if(toggleMenuInput.checked) {
        menuNav.classList.add('showNav');
        menuNav.classList.remove('hideNav');
    } else {
        menuNav.classList.add('hideNav');
        menuNav.classList.remove('showNav');
    }
}

toggleMenu();