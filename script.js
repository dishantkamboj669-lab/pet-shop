const menuButtons = document.querySelectorAll('.menu-toggle');

menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const header = button.closest('header');
        const isOpen = header.classList.toggle('menu-open');

        button.setAttribute('aria-expanded', String(isOpen));
        button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        button.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });
});