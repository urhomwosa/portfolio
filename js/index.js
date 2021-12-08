const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


const closeToggle = document.querySelector('.closebtn');

closeToggle.addEventListener('click', () => {
    document.body.classList.remove("nav-open");
    document.body.classList.toggle('nav-close');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
