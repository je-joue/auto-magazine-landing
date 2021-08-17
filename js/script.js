// Создание точек
const pressSlider = document.querySelector(".press__slider-wrap");
const pressSliderItems = pressSlider.querySelectorAll(".slider__item");
// const pressSliderItemsArray = Array.from(ressSliderItems);
// const pressSliderItems = Math.ceil(publCards.length / 3);

for (let i = 1; i <= pressSliderItems.length; i++) {
  document
    .querySelector("#press-dots")
    .append(
      document.querySelector("#press-dot").content.cloneNode(true)
    );
}

// const publBtnNext = document.querySelector("#publications-carousel-next-btn");
// const publBtnPrev = document.querySelector("#publications-carousel-prev-btn");
const pressDots = document.querySelectorAll(".press__dot");
pressDots[0].classList.add("press__dot_active");
