// header
const header = document.querySelector('.header');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const menuContainer = document.querySelector('#menu-container');
const headerLogo = document.querySelector('#header-logo');

menuOpenButton.addEventListener('click', function() {
  header.classList.toggle('header_mobile-menu-open');
  menuContainer.classList.toggle('header__menu_open');
  menuOpenButton.classList.toggle('header__menu-btn_type_close');
  headerLogo.classList.toggle('header__element-hidden');
});

// Блок "Пресса"
// Создание точек
const pressSlider = document.querySelector(".press__slider-wrap");
const pressSliderItems = pressSlider.querySelectorAll(".slider__item");

for (let i = 1; i <= pressSliderItems.length; i++) {
  document
    .querySelector("#press-dots")
    .append(
      document.querySelector("#press-dot").content.cloneNode(true)
    );
}
// Слайдер
const pressDots = document.querySelectorAll('.press__dot');
const pressCardsBox = document.querySelector('#press-slider');
const pressCards = document.querySelectorAll('.slider__item_section_press');

pressDots[0].classList.add("press__dot_active");
pressDots.forEach (function(item, index, array) {
  pressDots[index].addEventListener('click', function() {
    pressCardsBox.style.transform = `translate(calc(${index * 100 * -1}%`;
    array.forEach (function(dot) {
      dot.classList.remove('press__dot_active');
    });
    array[index].classList.add('press__dot_active');
  });
});

// Блок "Галерея"
const galleryBtnNext = document.querySelector("#gallery-next-btn");
const galleryBtnPrev = document.querySelector("#gallery-prev-btn");
const galleryCardsBox = document.querySelector('#gallery-slider');
const galleryCards = galleryCardsBox.querySelectorAll('.slider__item');

let i = 1;
galleryBtnPrev.addEventListener('click', moveRight);
function moveRight() {
  if (i > 1) {
    let transformCurrent = galleryCardsBox.style.transform;
    let translateCurrent = transformCurrent.slice(10, -1);
    galleryCardsBox.style.transform = `translate(calc(${translateCurrent} + 100%))`;
  i = i - 1;
  }
}

galleryBtnNext.addEventListener('click', moveLeft);
function moveLeft() {
  if (i < (galleryCards.length)) {
    let transformCurrent = galleryCardsBox.style.transform;
    let translateCurrent = transformCurrent.slice(10, -1);
    galleryCardsBox.style.transform = `translate(calc(${translateCurrent} - 100%))`;
  i = i + 1;
  }
}
