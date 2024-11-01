import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas"
export default class extends Controller {
  connect() {
    document.getElementById("main").addEventListener("click", () => {
      document.getElementById("mySidenav-itii").style.width = "100%";
      document.getElementById('phone-prev').style = 'display: none ';
      document.getElementById('phone-next').style = 'display: none';
      document.getElementById('logo-text').style = "display: none";
      document.getElementById('burger-menu').style = "display: none";
    });

    document.getElementById("closebtn").addEventListener("click", () => {
      document.getElementById("mySidenav-itii").style.width = "0";
      document.getElementById('phone-prev').style = 'display: inline-block ';
      document.getElementById('phone-next').style = 'display: inline-block';
      document.getElementById('logo-text').style = "display: inline-block";
      document.getElementById('burger-menu').style = "display: inline-block";
    });
  }


  closeNav() {

    nextButton.style = 'display: inline-block';
    prevButton.style = 'display: inline-block';
    julian.style = "display: inline-block";
    burgerMenu.style.display = "inline-block";
  }
}
