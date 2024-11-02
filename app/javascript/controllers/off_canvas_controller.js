import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas"
export default class extends Controller {
  connect() {
    document.getElementById("main-itii").addEventListener("click", () => {
      document.getElementById("mySidenav-itii").style.width = "100%";
      document.getElementById('phone-prev').style = 'display: none ';
      document.getElementById('phone-next').style = 'display: none';
      document.getElementById('logo-text').style = "display: none";
      document.getElementById('burger-menu').style = "display: none";
      document.getElementById('text-info-1-phone').style = 'display: none ';
      document.getElementById('text-info-2-phone').style = 'display: none ';
      document.getElementById('text-info-3-phone').style = 'display: none ';
    });

    document.getElementById("closebtn-itii").addEventListener("click", () => {
      document.getElementById("mySidenav-itii").style.width = "0";
      document.getElementById('phone-prev').style = 'display: inline-block ';
      document.getElementById('phone-next').style = 'display: inline-block';
      document.getElementById('logo-text').style = "display: inline-block";
      document.getElementById('burger-menu').style = "display: flex";
      document.getElementById('text-info-1-phone').style = 'display: block';
      document.getElementById('text-info-2-phone').style = 'display: block';
      document.getElementById('text-info-3-phone').style = 'display: block';
    });

    document.getElementById("main-lh").addEventListener("click", () => {
      document.getElementById("mySidenav-lh").style.width = "100%";
      document.getElementById('phone-prev').style = 'display: none ';
      document.getElementById('phone-next').style = 'display: none';
      document.getElementById('logo-text').style = "display: none";
      document.getElementById('burger-menu').style = "display: none";
      document.getElementById('text-info-1-phone').style = 'display: none ';
      document.getElementById('text-info-2-phone').style = 'display: none ';
      document.getElementById('text-info-3-phone').style = 'display: none ';
    });

    document.getElementById("closebtn-lh").addEventListener("click", () => {
      document.getElementById("mySidenav-lh").style.width = "0";
      document.getElementById('phone-prev').style = 'display: inline-block; color:red ';
      document.getElementById('phone-next').style = 'display: inline-block; color:red';
      document.getElementById('logo-text').style = "display: inline-block";
      document.getElementById('burger-menu').style = "display: flex";
      document.getElementById('text-info-1-phone').style = 'display: block';
      document.getElementById('text-info-2-phone').style = 'display: block';
      document.getElementById('text-info-3-phone').style = 'display: block';
    });
  }
}
