import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="burger-menu"
export default class extends Controller {
  connect() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu-container');
    const textInfosPc = document.querySelectorAll('.work_text');
    const textInfosPhone = document.querySelectorAll('.work_text_phone');
    const swipeText = document.getElementById('h3-swipe');
    const media = document.querySelector('gallery');

    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');

      if (burgerMenu.classList.contains('active')) {
        menu.style = 'opacity: 1; z-index:1000';

        textInfosPhone.forEach((textInfo) => {
          textInfo.style = 'display: none';
        });

        textInfosPc.forEach((textInfo) => {
          textInfo.style = 'display: none';
        });

        swipeText.style = 'opacity: 0';
      } else {
        menu.style = 'display: none';

        textInfosPhone.forEach((textInfo) => {
          textInfo.style = 'display: inline-block';
        });

        textInfosPc.forEach((textInfo) => {
          textInfo.style = 'display: inline-block';
        });
        // swipeText.style = 'opacity: 1';
      }
    });
  }
}
