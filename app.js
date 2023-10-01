var menu=document.getElementsByClassName("toggle_button")[0]
var links=document.getElementsByClassName("navbar_link")[0]
menu.addEventListener('click', () => {
  links.classList.toggle('active')
})