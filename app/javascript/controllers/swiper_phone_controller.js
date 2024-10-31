import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="swiper-phone"
export default class extends Controller {
  connect() {
    var swiper = new Swiper('.swiper-container-phone', {
      loop: false,
      allowTouchMove: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          // Initialization logic (if any)
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1; // Use realIndex for looped slides
          const totalSlides = this.slides.length;
          console.log('Current slide is', currentSlide);

          const prevButton = document.getElementById('phone-prev');
          const nextButton = document.getElementById('phone-next');
          const burgerMenu = document.getElementById('burger-menu');
          const lines = burgerMenu.querySelectorAll('.line');
          const meter = document.getElementById('meter-phone');

          if (this.realIndex === 0) {
            prevButton.style.color = 'blue';
            nextButton.style.color = 'blue';
            meter.style.backgroundColor = 'blue';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'blue';
            });
          } else if (this.realIndex === 1) {
            prevButton.style.color = 'red';
            nextButton.style.color = 'red';
            meter.style.backgroundColor = 'red';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'red';
            });
          } else if (this.realIndex === 2) { // Third slide condition
            prevButton.style.color = 'violet';
            nextButton.style.color = 'violet';
            meter.style.backgroundColor = 'violet';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'violet';
            });
          } else {
            prevButton.style.color = 'white';
            nextButton.style.color = 'white';
            meter.style.backgroundColor = 'white';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'white';
            });
          }
        }
      }
    });
  }
}
