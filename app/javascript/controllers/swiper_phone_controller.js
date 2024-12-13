import { Controller } from "@hotwired/stimulus"

// function animateButton(button) {
//   let scaleUp = true;

//   setInterval(() => {
//     button.style.transform = scaleUp ? 'scale(2)' : 'scale(1)';
//     button.style.transition = 'transform 1s'; // Smooth transition
//     scaleUp = !scaleUp;
//   }, 300); // Switch scale every 2 seconds
// }
// function stopAnimateButton(button) {
//   // Remove scaling logic entirely or replace with a different animation
//   button.style.transform = 'none'; // No animation
// }

let animationIntervals = new Map(); // Store intervals by button for precise control

function animateButton(button) {
  // Avoid starting multiple intervals for the same button
  if (animationIntervals.has(button)) return;

  let scaleUp = true;

  const interval = setInterval(() => {
    button.style.transform = scaleUp ? 'scale(1.7)' : 'scale(1)';
    button.style.transition = 'transform 0.5s ease'; // Smooth transition
    scaleUp = !scaleUp;
  }, 500); // Switch scale every 0.5 seconds

  animationIntervals.set(button, interval); // Store the interval
}

function stopAnimateButton(button) {
  const interval = animationIntervals.get(button);
  if (interval) {
    clearInterval(interval); // Clear the interval
    animationIntervals.delete(button); // Remove it from the map
  }
  button.style.transform = 'scale(1)'; // Reset scaling
  button.style.transition = 'none'; // Stop transition
}

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

          prevButton.style.color = '#2C3651';
          nextButton.style.color = '#2C3651';
          // animateButton(nextButton);
          animateButton(nextButton);
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
            animateButton(nextButton);
            prevButton.style.color = '#2C3651';
            nextButton.style.color = '#2C3651';
            meter.style.backgroundColor = '#2C3651';
            workTextElements[0].querySelector('h1').style.color = '#2C3651';
            workTextElements[0].querySelector('a').style.color = '#2C3651';
            if (workTextElements[0].querySelector('svg')) {
              workTextElements[0].querySelector('svg').style.fill = '#2C3651';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              // line.style.backgroundColor = 'rgb(13, 110, 253)';
              line.style.backgroundColor = '#2C3651';
            });
          } else if (this.realIndex === 1) {
            stopAnimateButton(nextButton);
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
            stopAnimateButton(prevButton);
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
          } else if (this.realIndex === 6){
            animateButton(prevButton);
            prevButton.style.color = '#4871bc';
            nextButton.style.color = '#4871bc';
            meter.style.backgroundColor = '#4871bc';
            workTextElements[6].querySelector('h1').style.color = '#4871bc';
            workTextElements[6].querySelector('a').style.color = '#4871bc';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = '#4871bc';
            });
          };
        }
      }
    });
  }
}
