// click burger button
const clickBurgerBtn =(btn)=> {
  const navLink = document.querySelector('.nav-links');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('noscroll');
    navLink.classList.toggle('show');
    (navLink.classList.contains('show')) ? btn.src = 'img/icon-close.svg' : btn.src = 'img/icon-hamburger.svg';
  });
}
clickBurgerBtn(document.querySelector('.burger-btn'))