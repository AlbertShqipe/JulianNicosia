import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="off-canvas"
export default class extends Controller {
  connect() {
    const sidenavs = {
      itii: document.getElementById("mySidenav-itii"),
      lh: document.getElementById("mySidenav-lh"),
      fot: document.getElementById("mySidenav-fot"),
      cf: document.getElementById("mySidenav-cf"),
      vop: document.getElementById("mySidenav-vop"),
      // po: document.getElementById("mySidenav-po"),
      // lgdd: document.getElementById("mySidenav-lgdd"),
      // d: document.getElementById("mySidenav-d"),
      // ofri: document.getElementById("mySidenav-ofri"),
    };

    let startX = 0;
    let endX = 0;

    const backToTop = document.getElementById("back-to-top");

    // Function to close sidenav
    const closeSidenav = (sidenav) => {
      sidenav.scrollTop = 0;
      sidenav.style.width = "0";
      sidenav.style.opacity = "0";
      document.getElementById("burger-menu").style = "opacity: 1";
      document.getElementById("main-itii").style = "opacity: 1";
      document.getElementById("main-lh").style = "opacity: 1";
      document.getElementById("main-fot").style = "opacity: 1";
      document.getElementById("main-cf").style = "opacity: 1";
      document.getElementById("main-vop").style = "opacity: 1";
      // document.getElementById("main-po").style = "opacity: 1";
      // document.getElementById("main-ofri").style = "opacity: 1";
      // document.getElementById("main-d").style = "opacity: 1";
      // document.getElementById('h3-swipe').style = "opacity: 1";
      // document.getElementById("main-lgdd").style = "opacity: 1";
    };

    // Function to handle swipe events for each sidenav
    const handleSwipeToClose = (sidenav) => {
      sidenav.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      });

      sidenav.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;

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
      sidenav.style.width = "100%";
      sidenav.style.opacity = "1";
      document.getElementById('h3-swipe').style = "opacity: 0";
      document.getElementById("burger-menu").style = "opacity: 0";
      document.getElementById("main-itii").style = "opacity: 0";
      document.getElementById("main-lh").style = "opacity: 0";
      document.getElementById("main-fot").style = "opacity: 0";
      document.getElementById("main-cf").style = "opacity: 0";
      document.getElementById("main-vop").style = "opacity: 0";
    };

    document.getElementById("main-itii").addEventListener("click", () => {
      openSidenav(sidenavs.itii);
    });
    document.getElementById("closebtn-itii").addEventListener("click", () => {
      closeSidenav(sidenavs.itii);
    });

    document.getElementById("main-lh").addEventListener("click", () => {
      openSidenav(sidenavs.lh);
    });
    document.getElementById("closebtn-lh").addEventListener("click", () => {
      closeSidenav(sidenavs.lh);
    });

    document.getElementById("main-fot").addEventListener("click", () => {
      openSidenav(sidenavs.fot);
    });
    document.getElementById("closebtn-fot").addEventListener("click", () => {
      closeSidenav(sidenavs.fot);
    });

    document.getElementById("main-cf").addEventListener("click", () => {
      openSidenav(sidenavs.cf);
    });
    document.getElementById("closebtn-cf").addEventListener("click", () => {
      closeSidenav(sidenavs.cf);
    });

    document.getElementById("main-vop").addEventListener("click", () => {
      openSidenav(sidenavs.vop);
    });
    document.getElementById("closebtn-vop").addEventListener("click", () => {
      closeSidenav(sidenavs.vop);
    });
  }
}
