const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  changeSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  changeSlide(currentIndex + 1);
});

carousel.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    changeSlide(currentIndex - 1);
  } else {
    changeSlide(currentIndex + 1);
  }
});

function changeSlide(newIndex) {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (newIndex + carouselItems.length) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
}

// Set the initial active slide
carouselItems[currentIndex].classList.add("active");
