const pop = () => {
  const nav = document.querySelector('.menu-mobile');
  const navList = document.querySelector('.nav-list');
  nav.classList.add('popNav');
  navList.classList.add('popUl');
};

const closePopup = () => {
  const nav = document.querySelector('.menu-mobile');
  const navList = document.querySelector('.nav-list');
  nav.classList.remove('popNav');
  navList.classList.remove('popUl');
};

const bars = document.getElementById('bars');
bars.addEventListener('click', pop);

const evans = document.querySelector('.evans');
evans.addEventListener('click', closePopup);

const links = document.querySelectorAll('.link');
links.forEach((link) => {
  link.addEventListener('click', closePopup);
});
