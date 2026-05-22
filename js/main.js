/* NAVBAR SCROLL EFFECT */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 30){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

});

/* MOBILE MENU */

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* CLOSE MENU ON LINK CLICK */

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });

});

/* SCROLL REVEAL ANIMATION */

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

  reveals.forEach(el => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();