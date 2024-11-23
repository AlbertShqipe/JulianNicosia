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
          const prevButton = document.querySelector('.swiper-button-prev');
          const nextButton = document.querySelector('.swiper-button-next');
          prevButton.style.color = '#ceceff';
          nextButton.style.color = '#ceceff';

        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1; // Use realIndex for looped slides
          const totalSlides = this.slides.length;
          const prevButton = document.querySelector('.swiper-button-prev');
          const nextButton = document.querySelector('.swiper-button-next');
          const burgerMenu = document.getElementById('burger-menu');
          const lines = burgerMenu.querySelectorAll('.line');
          const meter = document.getElementById('meter');
          const workTextElements = document.getElementsByClassName('work_text'); // Get all elements with the class 'work_text'

          if (this.realIndex === 0) {
            prevButton.style.color = '#ceceff';
            nextButton.style.color = '#ceceff';
            meter.style.backgroundColor = '#ceceff';
            workTextElements[0].querySelector('h1').style.color = '#ceceff';
            workTextElements[0].querySelector('a').style.color = '#ceceff';
            workTextElements[0].querySelector('svg').style.fill = '#ceceff';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = '#ceceff';
            });
          } else if (this.realIndex === 1) {
            prevButton.style.color = 'rgb(100, 0, 0)';
            nextButton.style.color = 'rgb(100, 0, 0)';
            meter.style.backgroundColor = 'rgb(100, 0, 0)';
            workTextElements[1].querySelector('h1').style.color = 'rgb(100, 0, 0)';
            workTextElements[1].querySelector('a').style.color ='rgb(100, 0, 0)';
            workTextElements[1].querySelector('svg').style.fill ='rgb(100, 0, 0)';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(100, 0, 0)';
            });
          } else if (this.realIndex === 2) { // Third slide condition
            prevButton.style.color = 'rgb(100, 10, 149)';
            nextButton.style.color = 'rgb(100, 10, 149)';
            meter.style.backgroundColor = 'rgb(100, 10, 149)';
            workTextElements[2].querySelector('h1').style.color = 'rgb(100, 10, 149)';
            workTextElements[2].querySelector('a').style.color = 'rgb(100, 10, 149)';
            workTextElements[2].querySelector('svg').style.fill = 'rgb(100, 10, 149)';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(100, 10, 149)';
            });
          } else if (this.realIndex === 4){
            prevButton.style.color = '#898c5e';
            nextButton.style.color = '#898c5e';
            meter.style.backgroundColor = '#898c5e';
            workTextElements[4].querySelector('h1').style.color = '#898c5e';
            workTextElements[4].querySelector('a').style.color = '#898c5e';
            workTextElements[4].querySelector('svg').style.fill = '#898c5e';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = '#898c5e';
            });
          } else {
            prevButton.style.color = 'white';
            nextButton.style.color = 'white';
            meter.style.backgroundColor = 'white';
            workTextElements[3].querySelector('h1').style.color = 'white';
            workTextElements[3].querySelector('a').style.color = 'white';
            workTextElements[3].querySelector('svg').style.fill = 'white';
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
