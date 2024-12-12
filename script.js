const menuIcon = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.side-menu');

menuIcon.addEventListener('mouseenter', () => {
    sideMenu.style.left = '0';
});

sideMenu.addEventListener('mouseleave', () => {
    sideMenu.style.left = '-250px';
});

const boxes = document.querySelectorAll('.info-box');
const intro = document.querySelector('.intro');

const boxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

boxes.forEach(box => {
    boxObserver.observe(box);
});
