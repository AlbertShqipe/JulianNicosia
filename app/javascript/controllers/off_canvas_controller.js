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
    });
    document.getElementById("closebtn-itii").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color: #2C3651";
      document.getElementById("main-itii").style = " color: #2C3651; transform:translate(-75%,-48%)";
      document.getElementById("mySidenav-itii").style.width = "0";
      document.getElementById('phone-prev').style = "; color: #2C3651";
      document.getElementById('phone-next').style = "; color: #2C3651";
    });


    document.getElementById("main-lh").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-lh").style = "opacity: 0";
      document.getElementById("mySidenav-lh").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-lh").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color:rgb(100, 0, 0)";
      document.getElementById("main-lh").style ="opacity: 1; color:rgb(100, 0, 0); transform:translate(-57%,-48%)";
      document.getElementById("mySidenav-lh").style.width = "0";
      document.getElementById('phone-prev').style = "opacity: 1; color:rgb(100, 0, 0)";
      document.getElementById('phone-next').style = "opacity: 1; color:rgb(100, 0, 0)";
    });


    document.getElementById("main-fot").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-fot").style = "opacity: 0";
      document.getElementById("mySidenav-fot").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-fot").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1; color:rgb(100, 10, 149)";
      document.getElementById("main-fot").style = "opacity: 1; color:rgb(100, 10, 149); transform:translate(-54%,-48%)";
      document.getElementById("mySidenav-fot").style.width = "0";
      document.getElementById('phone-prev').style = "opacity: 1; color:rgb(100, 10, 149)";
      document.getElementById('phone-next').style = "opacity: 1; color:rgb(100, 10, 149)";
    });


    document.getElementById("main-d").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-d").style = "opacity: 0";
      document.getElementById("mySidenav-d").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-d").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 1;  color:#898c5e";
      document.getElementById("main-d").style = "opacity: 1;  color:#898c5e; transform:translate(-60%,-75%)";
      document.getElementById("mySidenav-d").style.width = "0";
      document.getElementById('phone-prev').style = "opacity: 1; color:#898c5e";
      document.getElementById('phone-next').style = "opacity: 1; color:#898c5e";
    });

    document.getElementById("main-r-f-f").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-r-f-f").style = "opacity: 0";
      document.getElementById("mySidenav-rff").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-rff").addEventListener("click", () => {
      document.getElementById("mySidenav-rff").style.width = "0";
      document.getElementById("burger-menu").style = "opacity: 1; color:black";
      document.getElementById("main-r-f-f").style = "opacity: 1; color:black; transform:translate(-65%,-62%)";
      document.getElementById('phone-prev').style = "opacity: 1; color:black";
      document.getElementById('phone-next').style = "opacity: 1; color:black";
    });

    document.getElementById("main-ofri").addEventListener("click", () => {
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-ofri").style = "opacity: 0";
      document.getElementById("mySidenav-ofri").style.width = "100%";
      document.getElementById('phone-prev').style = "opacity: 0";
      document.getElementById('phone-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-ofri").addEventListener("click", () => {
      document.getElementById("mySidenav-ofri").style.width = "0";
      document.getElementById("burger-menu").style = "opacity: 1; color:#b0885e";
      document.getElementById("main-ofri").style = "opacity: 1; color:#b0885e; transform:translate(-55%,-48%)";
      document.getElementById('phone-prev').style = "opacity: 1; color:#b0885e";
      document.getElementById('phone-next').style = "opacity: 1; color:#b0885e";
    });

    // document.getElementById("main-ut").addEventListener("click", () => {
    //   document.getElementById("burger-menu").style = "opacity: 0";
    //   document.getElementById("main-ut").style = "opacity: 0";
    //   document.getElementById("mySidenav-ut").style.width = "100%";
    //   document.getElementById('phone-prev').style = "opacity: 0";
    //   document.getElementById('phone-next').style = "opacity: 0";
    // });
    // document.getElementById("closebtn-ut").addEventListener("click", () => {
    //   document.getElementById("mySidenav-ut").style.width = "0";
    //   document.getElementById("burger-menu").style = "opacity: 1; color:#4871bc";
    //   document.getElementById("main-ut").style = "opacity: 1; color:#4871bc";
    //   document.getElementById('phone-prev').style = "opacity: 1; color:#4871bc";
    //   document.getElementById('phone-next').style = "opacity: 1; color:#4871bc";
    // });
  }
}
