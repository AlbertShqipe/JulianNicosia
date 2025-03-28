import { Controller } from "@hotwired/stimulus"

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
          const swipeText = document.getElementById('h3-swipe');


          prevButton.style.color = 'rgb(101, 101, 92)';
          nextButton.style.color = 'rgb(101, 101, 92)';
          // animateButton(nextButton);
          animateButton(nextButton);

        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1; // Use realIndex for looped slides
          const totalSlides = this.slides.length;
          // console.log('Current slide is', currentSlide);


          const swipeText = document.getElementById('h3-swipe');
          const prevButton = document.getElementById('phone-prev');
          const nextButton = document.getElementById('phone-next');
          const burgerMenu = document.getElementById('burger-menu');
          const lines = burgerMenu.querySelectorAll('.line');
          const meter = document.getElementById('meter-phone');
          const workTextElements = document.getElementsByClassName('work_text_phone');
          swipeText.style.display = 'none';

          // CF VOP AITII FOT LH
          if (this.realIndex === 0) { // Celestial Fractures
            animateButton(nextButton);
            prevButton.style.color = 'rgb(101, 101, 92)';
            nextButton.style.color = 'rgb(101, 101, 92)';
            meter.style.backgroundColor = 'rgb(101, 101, 92)';
            workTextElements[0].querySelector('h1').style.color = 'rgb(101, 101, 92)';
            workTextElements[0].querySelector('a').style.color = 'rgb(101, 101, 92)';
            if (workTextElements[0].querySelector('svg')) {
              workTextElements[0].querySelector('svg').style.fill = 'rgb(101, 101, 92)';
            };
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(101, 101, 92)';
            });
          } else if (this.realIndex === 1) { // Veil of Perspective
            stopAnimateButton(nextButton);
            prevButton.style.color = '#776a7c';
            nextButton.style.color = '#776a7c';
            meter.style.backgroundColor = '#776a7c';
            workTextElements[1].querySelector('h1').style.color = '#776a7c';
            workTextElements[1].querySelector('a').style.color = '#776a7c';
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = '#776a7c';
            });
          } else if (this.realIndex === 2) { // And if this it
            prevButton.style.color = '#2C3651'; // And if this it
            nextButton.style.color = '#2C3651';
            meter.style.backgroundColor = '#2C3651';
            workTextElements[2].querySelector('h1').style.color = '#2C3651';
            workTextElements[2].querySelector('a').style.color = '#2C3651';
            if (workTextElements[2].querySelector('svg')) {
              workTextElements[2].querySelector('svg').style.fill = '#2C3651';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              // line.style.backgroundColor = 'rgb(13, 110, 253)';
              line.style.backgroundColor = '#2C3651';
            });






          } else if (this.realIndex === 3) { // Fragments Of Time
            prevButton.style.color = 'rgb(100, 50, 200)'; // Fragments Of Time
            nextButton.style.color = 'rgb(100, 50, 200)';
            meter.style.backgroundColor = 'rgb(100, 50, 200)';
            workTextElements[3].querySelector('h1').style.color = 'rgb(100, 50, 200)';
            workTextElements[3].querySelector('a').style.color = 'rgb(100, 50, 200)';
            if (workTextElements[3].querySelector('svg')) {
              workTextElements[3].querySelector('svg').style.fill = 'rgb(100, 50, 200)';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(100, 50, 200)';
            });
          } else if (this.realIndex === 4) {  // Love Hurts
            prevButton.style.color = 'rgb(100, 0, 0)'; // Love Hurts
            nextButton.style.color = 'rgb(100, 0, 0)';
            meter.style.backgroundColor = 'rgb(100, 0, 0)';
            // julian.style.color = 'rgb(100, 0, 0)';
            workTextElements[4].querySelector('h1').style.color = 'rgb(100, 0, 0)';
            workTextElements[4].querySelector('a').style.color ='rgb(100, 0, 0)';
            if (workTextElements[4].querySelector('svg')) {
            workTextElements[4].querySelector('svg').style.fill ='rgb(100, 0, 0)';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(100, 0, 0)';
            });
          }
        }
      }
    });
  }
}
