import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="swiper-phone"
export default class extends Controller {
  connect() {
    var swiper = new Swiper('.swiper-container-phone', {
      loop: false,
      allowTouchMove: true,
      lazy: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          // Initialization logic (if any)
          const prevButton = document.getElementById('phone-prev');
          const nextButton = document.getElementById('phone-next');
          prevButton.style.color = '#ceceff';
          nextButton.style.color = '#ceceff';
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1; // Use realIndex for looped slides
          const totalSlides = this.slides.length;
          // console.log('Current slide is', currentSlide);

          const prevButton = document.getElementById('phone-prev');
          const nextButton = document.getElementById('phone-next');
          const burgerMenu = document.getElementById('burger-menu');
          const lines = burgerMenu.querySelectorAll('.line');
          const meter = document.getElementById('meter-phone');
          const workTextElements = document.getElementsByClassName('work_text_phone');


          if (this.realIndex === 0) {
            prevButton.style.color = '#ceceff';
            nextButton.style.color = '#ceceff';
            meter.style.backgroundColor = '#ceceff';
            // julian.style.color = '#ceceff';
            workTextElements[0].querySelector('h1').style.color = '#ceceff';
            workTextElements[0].querySelector('a').style.color = '#ceceff';
            if (workTextElements[0].querySelector('svg')) {
              workTextElements[0].querySelector('svg').style.fill = '#ceceff';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              // line.style.backgroundColor = 'rgb(13, 110, 253)';
              line.style.backgroundColor = '#ceceff';
            });
          } else if (this.realIndex === 1) {
            prevButton.style.color = 'rgb(100, 0, 0)';
            nextButton.style.color = 'rgb(100, 0, 0)';
            meter.style.backgroundColor = 'rgb(100, 0, 0)';
            // julian.style.color = 'rgb(100, 0, 0)';
            workTextElements[1].querySelector('h1').style.color = 'rgb(100, 0, 0)';
            workTextElements[1].querySelector('a').style.color ='rgb(100, 0, 0)';
            if (workTextElements[1].querySelector('svg')) {
            workTextElements[1].querySelector('svg').style.fill ='rgb(100, 0, 0)';
            }
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
            if (workTextElements[2].querySelector('svg')) {
              workTextElements[2].querySelector('svg').style.fill = 'rgb(100, 10, 149)';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(100, 10, 149)';
            });
          } else if (this.realIndex === 3) {
            prevButton.style.color = '#898c5e';
            nextButton.style.color = '#898c5e';
            meter.style.backgroundColor = '#898c5e';
            workTextElements[3].querySelector('h1').style.color = '#898c5e';
            workTextElements[3].querySelector('a').style.color = '#898c5e';
            if (workTextElements[3].querySelector('svg')) {
              workTextElements[3].querySelector('svg').style.fill = '#898c5e';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = '#898c5e';
            });
          } else if (this.realIndex === 4) {
            prevButton.style.color = 'black';
            nextButton.style.color = 'black';
            meter.style.backgroundColor = 'black';
            workTextElements[4].querySelector('h1').style.color = 'black';
            workTextElements[4].querySelector('a').style.color = 'black';
            if (workTextElements[4].querySelector('svg')) {
              workTextElements[4].querySelector('svg').style.fill = 'black';
            };
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'black';
            });
          } else if (this.realIndex === 5) {
            prevButton.style.color = '#b0885e';
            nextButton.style.color = '#b0885e';
            meter.style.backgroundColor = '#b0885e';
            workTextElements[5].querySelector('h1').style.color = '#b0885e';
            workTextElements[5].querySelector('a').style.color = '#b0885e';
            if (workTextElements[5].querySelector('svg')) {
              workTextElements[5].querySelector('svg').style.fill = '#b0885e';
            };
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = '#b0885e';
            });
          // } else if (this.realIndex === 6){
          //   prevButton.style.color = '#4871bc';
          //   nextButton.style.color = '#4871bc';
          //   meter.style.backgroundColor = '#4871bc';
          //   workTextElements[6].querySelector('h1').style.color = '#4871bc';
          //   workTextElements[6].querySelector('a').style.color = '#4871bc';
          //   meter.style.width = (100 / totalSlides) * currentSlide + '%';
          //   lines.forEach((line) => {
          //     line.style.backgroundColor = '#4871bc';
          //   });
          };
        }
      }
    });
  }
}
