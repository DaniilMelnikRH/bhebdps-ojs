const slides = document.querySelectorAll(".slider__item");
const prevArrow = document.querySelector(".slider__arrow_prev");
const nextArrow = document.querySelector(".slider__arrow_next");

const dotsContainer = document.querySelector(".slider__dots");
let dots = [];
if (dotsContainer) dots = Array.from(dotsContainer.children);

let currentIndex = 0;

function showSlide(index){
  slides.forEach((slide, i) => {
    slide.classList.toggle("slider__item_active", i === index);
  });

  if (dots.length > 0){
    dots.forEach((dot, i) => {
      dot.classList.toggle("slider__dot_active", i === index);
    });
  }

}

nextArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

if (dots.length > 0){
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

}

showSlide(currentIndex);