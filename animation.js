document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
  
    setTimeout(() => {
      splashScreen.classList.add('animate');
    }, 200); // Délai avant l'animation
  
    splashScreen.addEventListener('animationend', () => {
      splashScreen.style.display = 'none';
      mainContent.style.display = 'block';
      document.body.style.overflow = 'auto';
    });
  
    // Menu burger
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  