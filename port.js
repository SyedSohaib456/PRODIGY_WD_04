document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: 'smooth'
                });
            }

            const menuIcon = document.querySelector('#menu-icon');
            const navbar = document.querySelector('.navBar');
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navBar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});
