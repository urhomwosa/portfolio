const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const closeToggle = document.querySelector('.closebtn');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


closeToggle.addEventListener('click', () => {
    document.body.classList.remove("nav-open");
    document.body.classList.toggle('nav-close');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});
