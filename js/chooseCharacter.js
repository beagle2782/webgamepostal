let currentSlideIndexP1 = 0; 
let currentSlideIndexP2 = 0;
let slideIndexP1 = 1;
let slideIndexP2 = 1;
showSlidesP1(slideIndexP1);
showSlidesP2(slideIndexP2);

// P1
function plusSlidesP1(n) {
  showSlidesP1(slideIndexP1 += n);
}

function currentSlideP1(n) {
  showSlidesP1(slideIndexP1 = n);
}

function showSlidesP1(n) {
  let i;
  let slidesP1 = document.querySelectorAll(".slideshow-containerP1 .mySlides");
  let dotsP1 = document.querySelectorAll(".slideshow-containerP1 .dot");
  if (n > slidesP1.length) {slideIndexP1 = 1}
  if (n < 1) {slideIndexP1 = slidesP1.length}
  for (i = 0; i < slidesP1.length; i++) {
    slidesP1[i].style.display = "none";
  }
  for (i = 0; i < dotsP1.length; i++) {
    dotsP1[i].className = dotsP1[i].className.replace(" active", "");
  }
  slidesP1[slideIndexP1-1].style.display = "block";
  dotsP1[slideIndexP1-1].className += " active";
}

// P2
function plusSlidesP2(n) {
  showSlidesP2(slideIndexP2 += n);
}

function currentSlideP2(n) {
  showSlidesP2(slideIndexP2 = n);
}

function showSlidesP2(n) {
  let i;
  let slidesP2 = document.querySelectorAll(".slideshow-containerP2 .mySlides");
  let dotsP2 = document.querySelectorAll(".slideshow-containerP2 .dot");
  if (n > slidesP2.length) {slideIndexP2 = 1}
  if (n < 1) {slideIndexP2 = slidesP2.length}
  for (i = 0; i < slidesP2.length; i++) {
    slidesP2[i].style.display = "none";
  }
  for (i = 0; i < dotsP2.length; i++) {
    dotsP2[i].className = dotsP2[i].className.replace(" active", "");
  }
  slidesP2[slideIndexP2-1].style.display = "block";
  dotsP2[slideIndexP2-1].className += " active";
}
//boton
document.getElementById('readyButton').addEventListener('click', function() {

  const selectedP1 = currentSlideIndexP1; 
  const selectedP2 = currentSlideIndexP2; 


  localStorage.setItem('selectedP1', selectedP1);
  localStorage.setItem('selectedP2', selectedP2);

 
  window.location.href = './game.html';
})