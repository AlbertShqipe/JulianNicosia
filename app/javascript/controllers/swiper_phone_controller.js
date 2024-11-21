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
          const prevButton = document.getElementById('phone-prev');
          const nextButton = document.getElementById('phone-next');
          prevButton.style.color = 'blue';
          nextButton.style.color = 'blue';
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
          const workTextElements = document.getElementsByClassName('work_text_phone');
          // const julian = document.getElementById('logo-text').firstElementChild;
          // console.log(this.realIndex);
          // console.log(julian);

          if (this.realIndex === 0) {
            // prevButton.style.color = 'rgb(13, 110, 253)';
            // nextButton.style.color = 'rgb(13, 110, 253)';
            // meter.style.backgroundColor = 'rgb(13, 110, 253)';
            // // julian.style.color = 'rgb(13, 110, 253)';
            // workTextElements[0].querySelector('h1').style.color = 'rgb(13, 110, 253)';
            // workTextElements[0].querySelector('a').style.color = 'rgb(13, 110, 253)';
            // workTextElements[0].querySelector('svg').style.fill = 'rgb(13, 110, 253)';
            prevButton.style.color = 'blue';
            nextButton.style.color = 'blue';
            meter.style.backgroundColor = 'blue';
            // julian.style.color = 'blue';
            workTextElements[0].querySelector('h1').style.color = 'blue';
            workTextElements[0].querySelector('a').style.color = 'blue';
            workTextElements[0].querySelector('svg').style.fill = 'blue';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              // line.style.backgroundColor = 'rgb(13, 110, 253)';
              line.style.backgroundColor = 'blue';
            });
          } else if (this.realIndex === 1) {
            // prevButton.style.color = 'red';
            // nextButton.style.color = 'red';
            // meter.style.backgroundColor = 'red';
            // // julian.style.color = 'red';
            // workTextElements[1].querySelector('h1').style.color = 'red';
            // workTextElements[1].querySelector('a').style.color ='red';
            // workTextElements[1].querySelector('svg').style.fill ='red';
            prevButton.style.color = 'rgb(100, 0, 0)';
            nextButton.style.color = 'rgb(100, 0, 0)';
            meter.style.backgroundColor = 'rgb(100, 0, 0)';
            // julian.style.color = 'rgb(100, 0, 0)';
            workTextElements[1].querySelector('h1').style.color = 'rgb(100, 0, 0)';
            workTextElements[1].querySelector('a').style.color ='rgb(100, 0, 0)';
            workTextElements[1].querySelector('svg').style.fill ='rgb(100, 0, 0)';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              // line.style.backgroundColor = 'red';
              line.style.backgroundColor = 'rgb(100, 0, 0)';
            });
          } else if (this.realIndex === 2) { // Third slide condition
            // prevButton.style.color = 'rgb(100, 91, 149)';
            // nextButton.style.color = 'rgb(100, 91, 149)';
            // meter.style.backgroundColor = 'rgb(100, 91, 149)';
            // // julian.style.color = 'rgb(100, 91, 149)';
            // workTextElements[2].querySelector('h1').style.color = 'rgb(100, 91, 149)';
            // workTextElements[2].querySelector('a').style.color = 'rgb(100, 91, 149)';
            // workTextElements[2].querySelector('svg').style.fill = 'rgb(100, 91, 149)';
            prevButton.style.color = 'rgb(100, 10, 149)';
            nextButton.style.color = 'rgb(100, 10, 149)';
            meter.style.backgroundColor = 'rgb(100, 10, 149)';
            // julian.style.color = 'rgb(100, 10, 149)';
            workTextElements[2].querySelector('h1').style.color = 'rgb(100, 10, 149)';
            workTextElements[2].querySelector('a').style.color = 'rgb(100, 10, 149)';
            workTextElements[2].querySelector('svg').style.fill = 'rgb(100, 10, 149)';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              // line.style.backgroundColor = 'rgb(100, 91, 149)';
              line.style.backgroundColor = 'rgb(100, 10, 149)';
            });
          } else if (this.realIndex === 3){
            prevButton.style.color = '#898c5e';
            nextButton.style.color = '#898c5e';
            meter.style.backgroundColor = '#898c5e';
            // julian.style.color = '#898c5e';
            workTextElements[3].querySelector('h1').style.color = '#898c5e';
            workTextElements[3].querySelector('a').style.color = '#898c5e';
            workTextElements[3].querySelector('svg').style.fill = '#898c5e';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = '#898c5e';
            });
          } else  if (this.realIndex === 4){
            prevButton.style.color = 'black';
            nextButton.style.color = 'black';
            meter.style.backgroundColor = 'black';
            // julian.style.color = 'black';
            workTextElements[4].querySelector('h1').style.color = 'black';
            workTextElements[4].querySelector('a').style.color = 'black';
            workTextElements[4].querySelector('svg').style.fill = 'black';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'black';
            });
          }
        }
      }
    });
  }
}
