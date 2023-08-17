const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
});

nextBtn.addEventListener("click", () => {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
});
