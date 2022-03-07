const mainMenu = document.querySelector(".menu");
const nav = document.querySelector('.menu-mobile')
const navList = document.querySelector(".nav-list");
const bars = document.getElementById('bars')
const xBtn = document.querySelector('.x-btn');
const links = document.querySelectorAll('.link')


function pop() {
    nav.classList.add('popNav')
    navList.classList.add('popUl')

}
bars.addEventListener("click",pop)

function closePopup(){
    nav.classList.remove('popNav')
    navList.classList.remove('popUl')
}
xBtn.addEventListener("click",closePopup)

links.forEach((link) =>{
    link.addEventListener("click",closePopup)
})