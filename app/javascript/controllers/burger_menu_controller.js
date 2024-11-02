import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="burger-menu"
export default class extends Controller {
  connect() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu-container');
    const julian = document.getElementById('logo-text');
    const textInfo1Pc = document.getElementById('text-info-1-pc');
    const textInfo1Phone = document.getElementById('text-info-1-phone');
    const textInfo2Pc = document.getElementById('text-info-2-pc');
    const textInfo2Phone = document.getElementById('text-info-2-phone');
    const textInfo3Pc = document.getElementById('text-info-3-pc');
    const textInfo3Phone = document.getElementById('text-info-3-phone');
    const media = document.querySelector('gallery');

    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      if (burgerMenu.classList.contains('active')) {
        menu.style = 'opacity: 1;z-index:1000';
        julian.style = 'display: none'
        textInfo1Pc.style = 'display: none'
        textInfo1Phone.style = 'display: none'
        textInfo2Pc.style = 'display: none'
        textInfo2Phone.style = 'display: none'
        textInfo3Pc.style = 'display: none'
        textInfo3Phone.style = 'display: none'
      } else {
        menu.style = 'display: none';
        julian.style = 'display: inline-block'
        textInfo1Pc.style = 'display: inline-block'
        textInfo1Phone.style = 'display: inline-block'
        textInfo2Pc.style = 'display: inline-block'
        textInfo2Phone.style = 'display: inline-block'
        textInfo3Pc.style = 'display: inline-block'
        textInfo3Phone.style = 'display: inline-block'
      }
    });
  }
}
