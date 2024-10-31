import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="burger-menu"
export default class extends Controller {
  connect() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu-container');
    const julian = document.getElementById('logo-text');
    const textInfo = document.getElementById('text-info');

    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      if (burgerMenu.classList.contains('active')) {
        menu.style = 'opacity: 1;z-index:1000';
        julian.style = 'display: none'
        textInfo.style = 'display: none'
      } else {
        menu.style = 'opacity: 0; z-index:0';
        julian.style = 'display: inline-block'
        textInfo.style = 'display: inline-block'
      }
    });
  }
}
