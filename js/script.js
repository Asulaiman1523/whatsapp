let menu  = document.querySelector('#menu-bar');
let navbar  = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('sss');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('sss');
}