import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas"
export default class extends Controller {
  connect() {
    const sidenavs = {
      itii: document.getElementById("mySidenav-itii"),
      lh: document.getElementById("mySidenav-lh"),
      fot: document.getElementById("mySidenav-fot"),
      d: document.getElementById("mySidenav-d"),
      rff: document.getElementById("mySidenav-rff"),
      ofri: document.getElementById("mySidenav-ofri"),
      po: document.getElementById("mySidenav-po"),
      vop: document.getElementById("mySidenav-vop"),
      lgdd: document.getElementById("mySidenav-lgdd"),

    };

    let startX = 0;
    let endX = 0;

    const backToTop = document.getElementById("back-to-top");

    // Function to close sidenav
    const closeSidenav = (sidenav) => {
      sidenav.scrollTop = 0; // Reset scroll position
      sidenav.style.width = "0";
      sidenav.style.opacity = "0"; // Optional opacity reset
      // document.getElementById('h3-swipe').style = "opacity: 1";
      document.getElementById("burger-menu").style = "opacity: 1";
      document.getElementById("main-itii").style = "opacity: 1";
      document.getElementById("main-lh").style = "opacity: 1";
      document.getElementById("main-fot").style = "opacity: 1";
      document.getElementById("main-d").style = "opacity: 1";
      document.getElementById("main-r-f-f").style = "opacity: 1";
      document.getElementById("main-ofri").style = "opacity: 1";
      document.getElementById("main-po").style = "opacity: 1";
      document.getElementById("main-vop").style = "opacity: 1";
      document.getElementById("main-lgdd").style = "opacity: 1";
    };

    // Function to handle swipe events for each sidenav
    const handleSwipeToClose = (sidenav) => {
      sidenav.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      });

      sidenav.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;

        // Calculate swipe distance
        const swipeDistance = startX - endX;

        // Close sidenav if swiped left (swipeDistance > 50) or swiped right (swipeDistance < -50)
        if (swipeDistance > 50 || swipeDistance < -50) {
          closeSidenav(sidenav); // Close the sidenav
        }
      });
    };

    // Loop through each sidenav in the object and apply the swipe handling
    for (const key in sidenavs) {
      if (sidenavs.hasOwnProperty(key)) {
        handleSwipeToClose(sidenavs[key]);
      }
    }

    // Function to open sidenav
    const openSidenav = (sidenav) => {
      sidenav.style.width = "100%";  // Open the sidenav
      sidenav.style.opacity = "1";   // Optionally, set opacity to 1
      document.getElementById('h3-swipe').style = "opacity: 0";
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-itii").style = "opacity: 0";
      document.getElementById("main-lh").style = "opacity: 0";
      document.getElementById("main-fot").style = "opacity: 0";
      document.getElementById("main-d").style = "opacity: 0";
      document.getElementById("main-r-f-f").style = "opacity: 0";
      document.getElementById("main-ofri").style = "opacity: 0";
      document.getElementById("main-po").style = "opacity: 0";
      document.getElementById("main-vop").style = "opacity: 0";
      document.getElementById("main-lgdd").style = "opacity: 0";
    };

    document.getElementById("main-itii").addEventListener("click", () => {
      openSidenav(sidenavs.itii);
    });
    document.getElementById("closebtn-itii").addEventListener("click", () => {
      // document.getElementById('h3-swipe').style = "opacity: 1";
      // document.getElementById("burger-menu").style = "opacity: 1; color: #2C3651";
      // document.getElementById("main-itii").style = " color: #2C3651; transform:translate(-75%,-48%)";
      // document.getElementById('phone-prev').style = "color: #2C3651";
      // document.getElementById('phone-next').style = "color: #2C3651";
      closeSidenav(sidenavs.itii);
    });

    document.getElementById("main-lh").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 0";
      // document.getElementById("main-lh").style = "opacity: 0";
      openSidenav(sidenavs.lh);
      // document.getElementById("mySidenav-lh").style.width = "100%";
      // document.getElementById('phone-prev').style = "opacity: 0";
      // document.getElementById('phone-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-lh").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 1; color:rgb(100, 0, 0)";
      // document.getElementById("main-lh").style ="opacity: 1; color:rgb(100, 0, 0); transform:translate(-57%,-48%)";
      // document.getElementById("mySidenav-lh").style.width = "0";
      // document.getElementById('phone-prev').style = "opacity: 1; color:rgb(100, 0, 0)";
      // document.getElementById('phone-next').style = "opacity: 1; color:rgb(100, 0, 0)";
      closeSidenav(sidenavs.lh);
    });

    document.getElementById("main-fot").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 0";
      // document.getElementById("main-fot").style = "opacity: 0";
      // document.getElementById("mySidenav-fot").style.width = "100%";
      openSidenav(sidenavs.fot);
      // document.getElementById('phone-prev').style = "opacity: 0";
      // document.getElementById('phone-next').style = "opacity: 0";
    });
    document.getElementById("closebtn-fot").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 1; color:rgb(100, 10, 149)";
      // document.getElementById("main-fot").style = "opacity: 1; color:rgb(100, 10, 149); transform:translate(-54%,-48%)";
      // document.getElementById("mySidenav-fot").style.width = "0";
      closeSidenav(sidenavs.fot);
      // document.getElementById('phone-prev').style = "opacity: 1; color:rgb(100, 10, 149)";
      // document.getElementById('phone-next').style = "opacity: 1; color:rgb(100, 10, 149)";
    });

    document.getElementById("main-d").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 0";
      // document.getElementById("main-d").style = "opacity: 0";
      // document.getElementById("mySidenav-d").style.width = "100%";
      // document.getElementById('phone-prev').style = "opacity: 0";
      // document.getElementById('phone-next').style = "opacity: 0";
      openSidenav(sidenavs.d);
    });
    document.getElementById("closebtn-d").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 1;  color:#898c5e";
      // document.getElementById("main-d").style = "opacity: 1;  color:#898c5e; transform:translate(-60%,-75%)";
      // document.getElementById("mySidenav-d").style.width = "0";
      // document.getElementById('phone-prev').style = "opacity: 1; color:#898c5e";
      // document.getElementById('phone-next').style = "opacity: 1; color:#898c5e";
      closeSidenav(sidenavs.d);
    });

    document.getElementById("main-r-f-f").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 0";
      // document.getElementById("main-r-f-f").style = "opacity: 0";
      // document.getElementById("mySidenav-rff").style.width = "100%";
      // document.getElementById('phone-prev').style = "opacity: 0";
      // document.getElementById('phone-next').style = "opacity: 0";
      openSidenav(sidenavs.rff);
    });
    document.getElementById("closebtn-rff").addEventListener("click", () => {
      // document.getElementById("mySidenav-rff").style.width = "0";
      // document.getElementById("burger-menu").style = "opacity: 1; color:black";
      // document.getElementById("main-r-f-f").style = "opacity: 1; color:black; transform:translate(-65%,-62%)";
      // document.getElementById('phone-prev').style = "opacity: 1; color:black";
      // document.getElementById('phone-next').style = "opacity: 1; color:black";
      closeSidenav(sidenavs.rff);
    });

    document.getElementById("main-ofri").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 0";
      // document.getElementById("main-ofri").style = "opacity: 0";
      // document.getElementById("mySidenav-ofri").style.width = "100%";
      // document.getElementById('phone-prev').style = "opacity: 0";
      // document.getElementById('phone-next').style = "opacity: 0";
      openSidenav(sidenavs.ofri);
    });
    document.getElementById("closebtn-ofri").addEventListener("click", () => {
      // document.getElementById("mySidenav-ofri").style.width = "0";
      // document.getElementById("burger-menu").style = "opacity: 1; color:#b0885e";
      // document.getElementById("main-ofri").style = "opacity: 1; color:#b0885e; transform:translate(-55%,-48%)";
      // document.getElementById('phone-prev').style = "opacity: 1; color:#b0885e";
      // document.getElementById('phone-next').style = "opacity: 1; color:#b0885e";
      closeSidenav(sidenavs.ofri);
    });

    // document.getElementById("main-po").addEventListener("click", () => {
    //   document.getElementById("burger-menu").style = "opacity: 0";
    //   document.getElementById("main-po").style = "opacity: 0";
    //   document.getElementById("mySidenav-po").style.width = "100%";
    //   document.getElementById('phone-prev').style = "opacity: 0";
    //   document.getElementById('phone-next').style = "opacity: 0";
    //   openSidenav(sidenavs.po);
    // });

    // document.getElementById("closebtn-po").addEventListener("click", () => {
    //   document.getElementById("mySidenav-po").style.width = "0";
    //   document.getElementById("burger-menu").style = "opacity: 1; color:#4871bc";
    //   document.getElementById("main-po").style = "opacity: 1; color:#4871bc";
    //   // document.getElementById('phone-prev').style = "opacity: 1; color:#4871bc";
    //   // document.getElementById('phone-next').style = "opacity: 1; color:#4871bc";
    //   closeSidenav(sidenavs.po);
    // });

    document.getElementById("main-vop").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 0";
      // document.getElementById("main-vop").style = "opacity: 0";
      // document.getElementById("mySidenav-vop").style.width = "100%";
      // document.getElementById('phone-prev').style = "opacity: 0";
      // document.getElementById('phone-next').style = "opacity: 0";
      openSidenav(sidenavs.vop);
    });
    document.getElementById("closebtn-vop").addEventListener("click", () => {
      // document.getElementById("mySidenav-vop").style.width = "0";
      // document.getElementById("burger-menu").style = "opacity: 1; color:#4871bc";
      // document.getElementById("main-vop").style = "opacity: 1; color:#4871bc; transform:translate(-57%,-48%)";
      // document.getElementById('phone-prev').style = "opacity: 1; color:#4871bc";
      // document.getElementById('phone-next').style = "opacity: 1; color:#4871bc";
      closeSidenav(sidenavs.vop);
    });

    document.getElementById("main-lgdd").addEventListener("click", () => {
      // document.getElementById("burger-menu").style = "opacity: 0";
      // document.getElementById("main-lgdd").style = "opacity: 0";
      // document.getElementById("mySidenav-lgdd").style.width = "100%";
      // document.getElementById('phone-prev').style = "opacity: 0";
      // document.getElementById('phone-next').style = "opacity: 0";
      openSidenav(sidenavs.lgdd);
    });
    document.getElementById("closebtn-lgdd").addEventListener("click", () => {
      // document.getElementById("mySidenav-lgdd").style.width = "0";
      // document.getElementById("burger-menu").style = "opacity: 1; color:#4871bc";
      // document.getElementById("main-lgdd").style = "opacity: 1; color:#4871bc; transform:translate(-57%,-48%)";
      // document.getElementById('phone-prev').style = "opacity: 1; color:#4871bc";
      // document.getElementById('phone-next').style = "opacity: 1; color:#4871bc";
      closeSidenav(sidenavs.lgdd);
    });
  }
}
