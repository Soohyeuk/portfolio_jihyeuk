function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
}


function adjustMenuVisibility() {
    const menu = document.querySelector('.hamburger-menu');
    if (window.innerWidth > 768) {
        menu.style.display = 'none';
    }
}

window.addEventListener('resize', adjustMenuVisibility);
adjustMenuVisibility();