const menuIcon = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.side-menu');

menuIcon.addEventListener('mouseenter', () => {
    sideMenu.style.left = '0';
});

sideMenu.addEventListener('mouseleave', () => {
    sideMenu.style.left = '-250px';
});
