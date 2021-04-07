var slideIndex = 1;
showDivs(slideIndex);

function nextSlide(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

/*Nav Bar Mobile Version*/

const burger = document.querySelector('.hamurger');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');
const icon = document.querySelector('.icon');


burger.addEventListener('click', ()=>{
  nav.classList.add('modal');
  navLinks.classList.add('open');
  icon.classList.add('out');
});

close.addEventListener('click', ()=>{
  nav.classList.remove('modal');
  navLinks.classList.remove('open');
  icon.classList.remove('out');
})