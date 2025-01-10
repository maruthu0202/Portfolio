let slideIndex1 = 0;
let slideIndex2 = 0;

function showSlides1(n) {
  let slides = document.querySelectorAll(".slimage .myslides");
  if (n >= slides.length) slideIndex1 = 0;
  if (n < 0) slideIndex1 = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1].style.display = "block";
}

function plusSlides1(n) {
  slideIndex1 += n;
  showSlides1(slideIndex1);
}

function showSlides2(n) {
  let slides = document.querySelectorAll(".s2image .mySlides");
  if (n >= slides.length) slideIndex2 = 0;
  if (n < 0) slideIndex2 = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2].style.display = "block";
}

function plusSlides2(n) {
  slideIndex2 += n;
  showSlides2(slideIndex2);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides1(slideIndex1);
  showSlides2(slideIndex2);
});
