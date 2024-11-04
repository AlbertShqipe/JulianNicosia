import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="swiper-pc"
export default class extends Controller {
  connect() {
    var swiper = new Swiper('.swiper-container-pc', {
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

          const prevButton = document.querySelector('.swiper-button-prev');
          const nextButton = document.querySelector('.swiper-button-next');
          const burgerMenu = document.getElementById('burger-menu');
          const lines = burgerMenu.querySelectorAll('.line');
          const meter = document.getElementById('meter');
          const julian = document.getElementById('logo-text').firstElementChild;
          // console.log(julian);


          if (this.realIndex === 0) {
            prevButton.style.color = 'rgb(13, 110, 253)';
            nextButton.style.color = 'rgb(13, 110, 253)';
            meter.style.backgroundColor = 'rgb(13, 110, 253)';
            julian.style.color = 'rgb(13, 110, 253)';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(13, 110, 253)';
            });
          } else if (this.realIndex === 1) {
            prevButton.style.color = 'red';
            nextButton.style.color = 'red';
            meter.style.backgroundColor = 'red';
            julian.style.color = 'red';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'red';
            });
          } else if (this.realIndex === 2) { // Third slide condition
            prevButton.style.color = 'rgb(100, 91, 149)';
            nextButton.style.color = 'rgb(100, 91, 149)';
            meter.style.backgroundColor = 'rgb(100, 91, 149)';
            julian.style.color = 'rgb(100, 91, 149)';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(100, 91, 149)';
            });
          } else {
            prevButton.style.color = 'white';
            nextButton.style.color = 'white';
            meter.style.backgroundColor = 'white';
            julian.style.color = 'white';
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
