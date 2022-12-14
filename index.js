// Nav Taggle

let menu = document.querySelector('aside');
let close = document.querySelector('#close');
let nav_toggle = document.querySelector('.show-hide');

nav_toggle.addEventListener('click', () => {
  console.log(menu.classList.contains);

  menu.classList.toggle('show-menu');
  
})

close.addEventListener('click', () => {
  console.log(menu.classList.contains);

  menu.classList.toggle('show-menu');
  
})