

//! Управление  about me
const aboutElement = document.querySelectorAll('.about__item');

aboutElement[0].classList.add('active');

aboutElement.forEach(function (item) {
  item.addEventListener('click', function (e) {

    if (!item.classList.contains('active')) {
      aboutElement.forEach(function (item) {
        item.classList.remove('active');
      });

      item.classList.add('active');
    }

  });
});

setTimeout(() => {
  aboutElement[2].click();
}, 1500);




//!Добвить класс к хедеру
const header = document.querySelector('.header');
window.document.addEventListener('scroll', function (e) {
  let scrollPos = window.scrollY;
  if (scrollPos > 50) {
    header.classList.add('head-skin');
  } else {
    header.classList.remove('head-skin');
  }
});



//! Навигация - скролл.

const anchors = document.querySelectorAll('.menu__link[data-goto]');
anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.getElementById(anchor.dataset.goto);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ behavior: 'smooth', top: targetPosition, });
  });
});


//! Siganal      OFF

const activeSlide = document.querySelector('.swiper-slide-active');
const signals = document.querySelectorAll('.signalOff');

if (activeSlide && activeSlide.classList.contains('swiper-slide-active')) {

  signals.forEach(function (signal) {
    signal.addEventListener('click', () => {
      signal.classList.add('signalOn');

      if (signal.classList.contains('signalOn')) {
        setTimeout(() => {
          signal.classList.remove('signalOn');
        }, 3000);
      }
    });
  });
}





