// click burger button
const clickBurgerBtn =(btn)=> {
  const navLink = document.querySelector('.nav-links');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('noscroll');
    navLink.classList.toggle('show');
    (navLink.classList.contains('show')) ? btn.src = 'img/icon-close.svg' : btn.src = 'img/icon-hamburger.svg';
  });
}
clickBurgerBtn(document.querySelector('.burger-btn'));

// scroll animations
const scrollAnimations =()=> {
  alert("what the hell!");
  const vrGuyImage = document.querySelector('.vr-guy');
  const vrText = document.querySelector('.vr-txt');
  const vrPText = vrText.querySelector('p');
  const creationsIncont = document.querySelectorAll('.creation-incont');
  const footLinks = document.querySelectorAll('.foot-link');
  const socialLinks = document.querySelectorAll('.social-link');
  
  const screenHeight = window.innerHeight / 1.4;
  (vrGuyImage.getBoundingClientRect().top < screenHeight) ? vrGuyImage.classList.add('active') : vrGuyImage.classList.remove('active');
  (vrText.getBoundingClientRect().top < screenHeight) ? vrText.classList.add('active') : vrText.classList.remove('active');
  (vrPText.getBoundingClientRect().top < screenHeight) ? vrPText.classList.add('active') : vrPText.classList.remove('active');
  creationsIncont.forEach(creation => (creation.getBoundingClientRect().top < screenHeight) ? creation.classList.add('active') : creation.classList.remove('active'));
  footLinks.forEach(link => (link.getBoundingClientRect().top /1.35 < screenHeight) ? link.classList.add('active') : link.classList.remove('active'));
  socialLinks.forEach(link => (link.getBoundingClientRect().top / 1.3 < screenHeight) ? link.classList.add('active') : link.classList.remove('active'));
  
}
window.addEventListener('scroll', scrollAnimations);

const introAnimate =()=> document.querySelector('.title-cont').classList.add('active');
