(function(){
var btnToggle = document.querySelector('.nav-toggle');
var menuItems = document.querySelector('.nav-menu');
btnToggle.addEventListener('click', openMenu);
function openMenu(){
    menuItems.classList.toggle('open-nav');
  }

})();