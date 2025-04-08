import { Controller } from "@hotwired/stimulus"

let animationIntervals = new Map();

function animateButton(button) {
  // Avoid starting multiple intervals for the same button
  if (animationIntervals.has(button)) return;

  let scaleUp = true;

  const interval = setInterval(() => {
    button.style.transform = scaleUp ? 'scale(1.7)' : 'scale(1)';
    button.style.transition = 'transform 0.5s ease';
    scaleUp = !scaleUp;
  }, 500);

  animationIntervals.set(button, interval);
}

function stopAnimateButton(button) {
  const interval = animationIntervals.get(button);

  if (interval) {
    clearInterval(interval);
    animationIntervals.delete(button);
  }

  button.style.transform = 'scale(1)';
  button.style.transition = 'none';
}

// Connects to data-controller="swiper-pc"
export default class extends Controller {
  connect() {
    var swiper = new Swiper('.swiper-container-pc', {
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
          const prevButton = document.querySelector('.swiper-button-prev');
          const nextButton = document.querySelector('.swiper-button-next');

          prevButton.style.color = 'rgb(101, 101, 92)';
          nextButton.style.color = 'rgb(101, 101, 92)';

          animateButton(nextButton);

          const addHoverEffect = (button) => {
            button.addEventListener('mouseenter', () => {
              stopAnimateButton(button);
              button.style.transform = 'scale(1.7)';
              button.style.transition = 'transform 0.3s ease';
            });

            button.addEventListener('mouseleave', () => {
              if (this.realIndex === 0) {
                animateButton(nextButton);
              }
              button.style.transform = 'scale(1)';
            });
          };

          addHoverEffect(prevButton);
          addHoverEffect(nextButton);

        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          const totalSlides = this.slides.length;
          const prevButton = document.querySelector('.swiper-button-prev');
          const nextButton = document.querySelector('.swiper-button-next');
          const burgerMenu = document.getElementById('burger-menu');
          const lines = burgerMenu.querySelectorAll('.line');
          const meter = document.getElementById('meter');
          const workTextElements = document.getElementsByClassName('work_text');
          // console.log(this.realIndex)

          // CF - VOP - AITII - FOT - LH
          if (this.realIndex === 0) { // Celestial Fractures
            animateButton(nextButton);
            prevButton.style.color = 'rgb(101, 101, 92)';
            nextButton.style.color = 'rgb(101, 101, 92)';
            meter.style.backgroundColor = 'rgb(101, 101, 92)';
            workTextElements[0].querySelector('h1').style.color = 'rgb(101, 101, 92)';
            workTextElements[0].querySelector('a').style.color = 'rgb(101, 101, 92)';
            if (workTextElements[0].querySelector('svg')) {
              workTextElements[0].querySelector('svg').style.fill = 'rgb(101, 101, 92)';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(101, 101, 92)';
            });
          } else if (this.realIndex === 1) { // Veil of Perspective
            stopAnimateButton(nextButton);
            prevButton.style.color = 'rgb(119, 106, 124)';
            nextButton.style.color = 'rgb(119, 106, 124)';
            meter.style.backgroundColor = 'rgb(119, 106, 124)';
            workTextElements[1].querySelector('h1').style.color = 'rgb(119, 106, 124)';
            workTextElements[1].querySelector('a').style.color = 'rgb(119, 106, 124)';
            if (workTextElements[1].querySelector('svg')) {
              workTextElements[1].querySelector('svg').style.fill = 'rgb(119, 106, 124)';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(119, 106, 124)';
            });
          } else if (this.realIndex === 2) { // And if this it
            prevButton.style.color = 'rgb(44, 54, 81)'; // And if this it
            nextButton.style.color = 'rgb(44, 54, 81)';
            meter.style.backgroundColor = 'rgb(44, 54, 81)';
            workTextElements[2].querySelector('h1').style.color = 'rgb(44, 54, 81)';
            workTextElements[2].querySelector('a').style.color = 'rgb(44, 54, 81)';
            if (workTextElements[2].querySelector('svg')) {
              workTextElements[2].querySelector('svg').style.fill = 'rgb(44, 54, 81)';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(44, 54, 81)';
            });
          } else if (this.realIndex === 3) { // Fragments of Time
            prevButton.style.color = 'rgb(100, 50, 200)';
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
          } else if (this.realIndex === 4) { // Love Hurts
            animateButton(prevButton);
            prevButton.style.color = 'rgb(100, 0, 0)';
            nextButton.style.color = 'rgb(100, 0, 0)';
            meter.style.backgroundColor = 'rgb(100, 0, 0)';
            workTextElements[4].querySelector('h1').style.color = 'rgb(100, 0, 0)';
            workTextElements[4].querySelector('a').style.color ='rgb(100, 0, 0)';
            if (workTextElements[4].querySelector('svg')) {
              workTextElements[4].querySelector('svg').style.fill ='rgb(100, 0, 0)';
            }
            meter.style.width = (100 / totalSlides) * currentSlide + '%';
            lines.forEach((line) => {
              line.style.backgroundColor = 'rgb(100, 0, 0)';
            });
          };
        }
      }
    });
  }
}
