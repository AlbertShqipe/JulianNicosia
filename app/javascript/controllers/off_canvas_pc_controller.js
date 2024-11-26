import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas-pc"
export default class extends Controller {
  connect() {
    document.getElementById('text-info-1-pc').addEventListener('click', () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("mySidenav-itii").style.width = "100%";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-itii").addEventListener("click", () => {
      document.getElementById("mySidenav-itii").style.width = "0";
      document.getElementById("burger-menu").style = "opacity: 1; color: #ceceff";
      document.getElementById("pc-prev").style = "opacity: 1; color: #ceceff";
      document.getElementById("pc-next").style = "opacity: 1; color: #ceceff";
    });


    document.getElementById('text-info-2-pc').addEventListener('click', () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("mySidenav-lh").style.width = "100%";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-lh").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color: #640000";
      document.getElementById("mySidenav-lh").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color: #640000";
      document.getElementById('pc-next').style = "opacity: 1; color: #640000";
    });

    document.getElementById('text-info-3-pc').addEventListener('click', () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("mySidenav-fot").style.width = "100%";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-fot").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color: #640a95";
      document.getElementById("mySidenav-fot").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color: #640a95";
      document.getElementById('pc-next').style = "opacity: 1; color: #640a95";
    });

    document.getElementById('text-info-4-pc').addEventListener('click', () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("mySidenav-lgdd").style.width = "100%";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-lgdd").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color: white";
      document.getElementById("mySidenav-lgdd").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color: white";
      document.getElementById('pc-next').style = "opacity: 1; color: white";
    });

    document.getElementById('text-info-5-pc').addEventListener('click', () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("mySidenav-d").style.width = "100%";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-d").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color:#898c5e";
      document.getElementById("mySidenav-d").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color:#898c5e";
      document.getElementById('pc-next').style = "opacity: 1; color:#898c5e";
    });

    document.getElementById('text-info-6-pc').addEventListener('click', () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("mySidenav-ofri").style.width = "100%";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-ofri").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color:#898c5e";
      document.getElementById("mySidenav-ofri").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color:#898c5e";
      document.getElementById('pc-next').style = "opacity: 1; color:#898c5e";
    });

    document.getElementById('text-info-7-pc').addEventListener('click', () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("mySidenav-ut").style.width = "100%";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-ut").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color:#4871bc";
      document.getElementById("mySidenav-ut").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color:#4871bc";
      document.getElementById('pc-next').style = "opacity: 1; color:#4871bc";
    });
  }
}
