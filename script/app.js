const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');
const navMenu = document.getElementById('nav_menu')


if(navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navClose.classList.add('show-menu')
    })
}

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navClose.classList.toggle("active");
})

const navLink = document.getElementById('nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu');
    
    navMenu.classList.remove('show-menu');
}