$(document).ready(function(){
    $(".nav-menu").on("click", function(){
        $(".nav").toggleClass("open");

    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(slideNum) {
  let i;
  let numOfSlides = document.getElementsByClassName("uta-slides");
  if (slideNum > numOfSlides.length) {slideIndex = 1}
  if (slideNum < 1) {slideIndex = numOfSlides.length}
  for (i = 0; i < numOfSlides.length; i++) {
    numOfSlides[i].style.display = "none";
  }

  numOfSlides[slideIndex-1].style.display = "block";

}