import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas"
export default class extends Controller {
  connect() {
    document.getElementById("main-itii").addEventListener("click", () => {
      document.getElementById("main-itii").style = "display: none";
      document.getElementById("mySidenav-itii").style.width = "100%";
      document.getElementById('phone-prev').style = 'display: none ';
      document.getElementById('phone-next').style = 'display: none';
      document.getElementById('logo-text').style = "display: none";
      document.getElementById('burger-menu').style = "display: none";
      // document.getElementById('text-info-1-phone').style = 'display: none ';
      // document.getElementById('text-info-2-phone').style = 'display: none ';
      // document.getElementById('text-info-3-phone').style = 'display: none ';
    });
    document.getElementById("closebtn-itii").addEventListener("click", () => {
      document.getElementById("main-itii").style = "display: block";
      document.getElementById("mySidenav-itii").style.width = "0";
      document.getElementById('phone-prev').style = 'display: inline-block ';
      document.getElementById('phone-next').style = 'display: inline-block';
      document.getElementById('logo-text').style = "display: inline-block";
      document.getElementById('burger-menu').style = "display: flex";
      // document.getElementById('text-info-1-phone').style = 'display: block';
      // document.getElementById('text-info-2-phone').style = 'display: block';
      // document.getElementById('text-info-3-phone').style = 'display: block';
    });


    document.getElementById("main-lh").addEventListener("click", () => {
      document.getElementById("main-lh").style = "display: none";
      document.getElementById("mySidenav-lh").style.width = "100%";
      document.getElementById('phone-prev').style = 'display: none ';
      document.getElementById('phone-next').style = 'display: none';
      document.getElementById('logo-text').style = "display: none";
      document.getElementById('burger-menu').style = "display: none";
    });
    document.getElementById("closebtn-lh").addEventListener("click", () => {
      document.getElementById("main-lh").style = "display: block";
      document.getElementById("mySidenav-lh").style.width = "0";
      document.getElementById('phone-prev').style = 'display: inline-block;color:red ';
      document.getElementById('phone-next').style = 'display: inline-block;color:red';
      document.getElementById('logo-text').style = "display: inline-block;color:red";
      document.getElementById('burger-menu').style = "display: flex";
    });


    document.getElementById("main-fot").addEventListener("click", () => {
      document.getElementById("main-fot").style = "display: none";
      document.getElementById("mySidenav-fot").style.width = "100%";
      document.getElementById('phone-prev').style = 'display: none ';
      document.getElementById('phone-next').style = 'display: none';
      document.getElementById('logo-text').style = "display: none";
      document.getElementById('burger-menu').style = "display: none";
    });
    document.getElementById("closebtn-fot").addEventListener("click", () => {
      document.getElementById("main-fot").style = "display: block";
      document.getElementById("mySidenav-fot").style.width = "0";
      document.getElementById('phone-prev').style = 'display: inline-block; color:violet ';
      document.getElementById('phone-next').style = 'display: inline-block; color:violet';
      document.getElementById('logo-text').style = "display: inline-block";
      document.getElementById('burger-menu').style = "display: flex";
    });


    document.getElementById("main-d").addEventListener("click", () => {
      document.getElementById("main-d").style = "display: none";
      document.getElementById("mySidenav-d").style.width = "100%";
      document.getElementById('phone-prev').style = 'display: none ';
      document.getElementById('phone-next').style = 'display: none';
      document.getElementById('logo-text').style = "display: none";
      document.getElementById('burger-menu').style = "display: none";
      // document.getElementById('text-info-1-phone').style = 'display: none ';
      // document.getElementById('text-info-2-phone').style = 'display: none ';
      // document.getElementById('text-info-3-phone').style = 'display: none ';
    });
    document.getElementById("closebtn-d").addEventListener("click", () => {
      document.getElementById("main-d").style = "display: block";
      document.getElementById("mySidenav-d").style.width = "0";
      document.getElementById('phone-prev').style = 'display: inline-block; color:white ';
      document.getElementById('phone-next').style = 'display: inline-block; color:white';
      document.getElementById('logo-text').style = "display: inline-block";
      document.getElementById('burger-menu').style = "display: flex";
    });
  }
}
