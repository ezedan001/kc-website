const mobileToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});
