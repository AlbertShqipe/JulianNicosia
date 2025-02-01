import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas-pc"
export default class extends Controller {
  connect() {
    const aitii = document.getElementById('text-info-1-pc');
    const lh = document.getElementById('text-info-2-pc');
    const fot = document.getElementById('text-info-3-pc');
    const lgdd = document.getElementById('text-info-4-pc');
    const rff = document.getElementById('text-info-7-pc');
    const vop = document.getElementById('text-info-8-pc');
    const burger = document.getElementById('burger-menu');
    // const d = document.getElementById('text-info-5-pc');
    // const ofri = document.getElementById('text-info-6-pc');

    aitii.addEventListener('click', () => {
      document.getElementById("mySidenav-itii").style = "width:100%;opacity:1";
      document.getElementById('pc-prev').style = "opacity: 0";
      aitii.style = "opacity: 0";
      burger.style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-itii").addEventListener("click", () => {
      document.getElementById("mySidenav-itii").style.width = "0";
      aitii.style = "opacity: 1";
      burger.style = "opacity: 1; color: #2C3651";
      document.getElementById("pc-prev").style = "opacity: 1; color: #2C3651";
      document.getElementById("pc-next").style = "opacity: 1; color: #2C3651";
    });

    lh.addEventListener('click', () => {
      document.getElementById("mySidenav-lh").style = "width:100%;opacity:1";
      lh.style = "opacity: 0";
      burger.style = "opacity: 0";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-lh").addEventListener("click", () => {
      document.getElementById("mySidenav-lh").style.width = "0";
      lh.style = "opacity: 1";
      burger.style = "opacity: 1; color: #640000";
      document.getElementById('pc-prev').style = "opacity: 1; color: #640000";
      document.getElementById('pc-next').style = "opacity: 1; color: #640000";
    });

    fot.addEventListener('click', () => {
      document.getElementById("mySidenav-fot").style = "width:100%;opacity:1";
      fot.style = "opacity: 0";
      burger.style = "opacity: 0";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-fot").addEventListener("click", () => {
      document.getElementById("mySidenav-fot").style.width = "0";
      fot.style = "opacity: 1";
      burger.style = "opacity: 1; color: #640a95";
      document.getElementById('pc-prev').style = "opacity: 1; color: #640a95";
      document.getElementById('pc-next').style = "opacity: 1; color: #640a95";
    });

    lgdd.addEventListener('click', () => {
      document.getElementById("mySidenav-lgdd").style = "width:100%;opacity:1";
      burger.style = "opacity: 0";
      lgdd.style = "opacity: 0";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-lgdd").addEventListener("click", () => {
      document.getElementById("mySidenav-lgdd").style.width = "0";
      lgdd.style = "opacity: 1";
      burger.style = "opacity: 1; color: white";
      document.getElementById('pc-prev').style = "opacity: 1; color: white";
      document.getElementById('pc-next').style = "opacity: 1; color: white";
    });

    // d.addEventListener('click', () => {
    //   document.getElementById("mySidenav-d").style = "width:100%;opacity:1";
    //   d.style = "opacity: 0";
    //   burger.style = "opacity: 0";
    //   document.getElementById('pc-prev').style = "opacity: 0";
    //   document.getElementById('pc-next').style = "opacity: 0";
    // });
    // document.getElementById("closebtn-d").addEventListener("click", () => {
    //   document.getElementById("mySidenav-d").style.width = "0";
    //   d.style = "opacity: 1";
    //   burger.style = "opacity: 1; color:#898c5e";
    //   document.getElementById('pc-prev').style = "opacity: 1; color:#898c5e";
    //   document.getElementById('pc-next').style = "opacity: 1; color:#898c5e";
    // });

    // ofri.addEventListener('click', () => {
    //   ofri.style = "opacity: 0";
    //   document.getElementById("burger-menu").style = "width:100%;opacity:1"
    //   document.getElementById("mySidenav-ofri").style.width = "100%";
    //   document.getElementById('pc-prev').style = "opacity: 0";
    //   document.getElementById('pc-next').style = "opacity: 0";
    // });
    // document.getElementById("closebtn-ofri").addEventListener("click", () => {
    //   ofri.style = "opacity: 1";
    //   burger.style = "opacity: 1; color:#898c5e";
    //   document.getElementById("mySidenav-ofri").style.width = "0";
    //   document.getElementById('pc-prev').style = "opacity: 1; color:#898c5e";
    //   document.getElementById('pc-next').style = "opacity: 1; color:#898c5e";
    // });

    rff.addEventListener('click', () => {
      document.getElementById("mySidenav-rff").style = "width:100%;opacity:1"
      rff.style = "opacity: 0";
      burger.style = "opacity: 0";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-rff").addEventListener("click", () => {
      rff.style = "opacity: 1";
      burger.style = "opacity: 1; color:black";
      document.getElementById("mySidenav-rff").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color:black";
      document.getElementById('pc-next').style = "opacity: 1; color:black";
    });

    vop.addEventListener('click', () => {
      document.getElementById("mySidenav-vop").style = "width:100%;opacity:1";
      vop.style = "opacity: 0";
      burger.style = "opacity: 0";
      document.getElementById('pc-prev').style = "opacity: 0";
      document.getElementById('pc-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-vop").addEventListener("click", () => {
      vop.style = "opacity: 1";
      burger.style = "opacity: 1; color:#776a7c";
      document.getElementById("mySidenav-vop").style.width = "0";
      document.getElementById('pc-prev').style = "opacity: 1; color:#776a7c";
      document.getElementById('pc-next').style = "opacity: 1; color:#776a7c";
    });
  }
}
