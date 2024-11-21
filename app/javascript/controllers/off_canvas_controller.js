import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas"
export default class extends Controller {
  connect() {
    document.getElementById("main-itii").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-itii").style = "opacity: 0";
      document.getElementById("mySidenav-itii").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
      document.getElementById('logo-text').style = "opacity: 0";
      document.getElementById('burger-menu').style = "opacity: 0";
      // document.getElementById('text-info-1-phone').style = 'display: none ';
      // document.getElementById('text-info-2-phone').style = 'display: none ';
      // document.getElementById('text-info-3-phone').style = 'display: none ';
    });
    document.getElementById("closebtn-itii").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color: blue";
      document.getElementById("main-itii").style = "; color: blue";
      document.getElementById("mySidenav-itii").style.width = "0";
      document.getElementById('phone-prev').style = "; color: blue";
      document.getElementById('phone-next').style = "; color: blue";
      document.getElementById('logo-text').style = "; color: blue";
      document.getElementById('burger-menu').style = "; color: blue";
      // document.getElementById('text-info-1-phone').style = 'display: block';
      // document.getElementById('text-info-2-phone').style = 'display: block';
      // document.getElementById('text-info-3-phone').style = 'display: block';
    });


    document.getElementById("main-lh").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-lh").style = "opacity: 0";
      document.getElementById("mySidenav-lh").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
      document.getElementById('logo-text').style = "opacity: 0";
      document.getElementById('burger-menu').style = "opacity: 0";
    });
    document.getElementById("closebtn-lh").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color:rgb(100, 0, 0)";
      document.getElementById("main-lh").style ="opacity: 1; color:rgb(100, 0, 0)";
      document.getElementById("mySidenav-lh").style.width = "0";
      document.getElementById('phone-prev').style = "opacity: 1; color:rgb(100, 0, 0)";
      document.getElementById('phone-next').style = "opacity: 1; color:rgb(100, 0, 0)";
      document.getElementById('logo-text').style = "opacity: 1; color:rgb(100, 0, 0)";
      document.getElementById('burger-menu').style ="opacity: 1; color:rgb(100, 0, 0)";
    });


    document.getElementById("main-fot").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-fot").style = "opacity: 0";
      document.getElementById("mySidenav-fot").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
      document.getElementById('logo-text').style = "opacity: 0";
      document.getElementById('burger-menu').style ="opacity: 0";
    });
    document.getElementById("closebtn-fot").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color:rgb(100, 10, 149)";
      document.getElementById("main-fot").style = "opacity: 1; color:rgb(100, 10, 149)";
      document.getElementById("mySidenav-fot").style.width = "0";
      document.getElementById('phone-prev').style = "opacity: 1; color:rgb(100, 10, 149)";
      document.getElementById('phone-next').style = "opacity: 1; color:rgb(100, 10, 149)";
      document.getElementById('logo-text').style = "opacity: 1; color:rgb(100, 10, 149)";
      document.getElementById('burger-menu').style ="opacity: 1; color:rgb(100, 10, 149)";
    });


    document.getElementById("main-d").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-d").style = "opacity: 0";
      document.getElementById("mySidenav-d").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
      document.getElementById('logo-text').style = "opacity: 0";
      document.getElementById('burger-menu').style = "opacity: 0";
      // document.getElementById('text-info-1-phone').style = 'display: none ';
      // document.getElementById('text-info-2-phone').style = 'display: none ';
      // document.getElementById('text-info-3-phone').style = 'display: none ';
    });
    document.getElementById("closebtn-d").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1;  color:#898c5e";
      document.getElementById("main-d").style = "opacity: 1;  color:#898c5e";
      document.getElementById("mySidenav-d").style.width = "0";
      document.getElementById('phone-prev').style = "opacity: 1; color:#898c5e";
      document.getElementById('phone-next').style = "opacity: 1; color:#898c5e";
      document.getElementById('logo-text').style = "opacity: 1;  color:#898c5e";
      document.getElementById('burger-menu').style = "opacity: 1;  color:#898c5e";
    });
  }
}
