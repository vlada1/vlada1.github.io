var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
<<<<<<< HEAD

/* function btnUncheck() {
  var slideBtn = document.querySelector('#btn-2');
  if (window.innerWidth == '1200px') {
    slideBtn.checked = false;
  }
} */
=======
>>>>>>> 8388b4223d176b437a6c70a5f3f3084c780f5695
