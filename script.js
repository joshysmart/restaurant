const toogleNav = document.querySelector('.sandwitch');
const navBar = document.querySelector('.nav-bar');

function toggleMenu() {
 navBar.classList.toggle('display');
}

toogleNav.addEventListener('click', toggleMenu);
window.addEventListener('click', (e) => {
 if(e.target.parentElement != navBar && e.target.parentElement != toogleNav) {
  navBar.classList.remove('display');
 }
})