const mainMenu = document.querySelector(".menu");
const nav = document.querySelector(".menu-mobile");
const navList = document.querySelector(".nav-list");
const bars = document.getElementById("bars");
const evans = document.querySelector(".evans");
const links = document.querySelectorAll(".link");

function pop() {
  nav.classList.add("popNav");
  navList.classList.add("popUl");
}
bars.addEventListener("click", pop);


function closePopup() {
  nav.classList.remove("popNav");
  navList.classList.remove("popUl");
}


evans.addEventListener("click", closePopup);



links.forEach((link) => {
  link.addEventListener("click", closePopup);
});
