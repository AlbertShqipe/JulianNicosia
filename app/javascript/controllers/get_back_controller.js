import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="get-back"
export default class extends Controller {
  connect() {
    // console.log("Stimulus connected!", this.element);

    const backElements = this.element.querySelectorAll('.backElement');

    backElements.forEach((element) => {
      this.setupSwipeListener(element);
    });
  }

  setupSwipeListener(element) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const swipeThreshold = window.innerWidth * 0.15; // 15% of screen width
    const verticalTolerance = 50; // Maximum vertical movement allowed

    // Helper function to detect a valid right swipe
    const handleSwipe = () => {
      const swipeDistanceX = touchEndX - touchStartX;
      const swipeDistanceY = Math.abs(touchEndY - touchStartY);

      if (swipeDistanceX > swipeThreshold && swipeDistanceY < verticalTolerance) {
        console.log(`Swipe detected on:`, element);

        // Target the `main-container` instead of `body`
        const page = document.querySelector(".main-container");
        page.classList.add("fade-out");

        setTimeout(() => {
          window.history.back();
        }, 300); // Match the CSS transition duration
      }
    };

    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const onTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    // Add touch event listeners to the element
    element.addEventListener("touchstart", onTouchStart, { passive: true });
    element.addEventListener("touchend", onTouchEnd, { passive: true });

    // Cleanup: Remove event listeners when the controller disconnects
    this.disconnect = () => {
      element.removeEventListener("touchstart", onTouchStart);
      element.removeEventListener("touchend", onTouchEnd);
    };
  }
}
