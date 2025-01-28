import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="get-back"
export default class extends Controller {
  connect() {
    console.log("Stimulus connected!", this.element);

    // Select all elements where swipe detection is required
    const backElements = this.element.querySelectorAll('.backElement');

    // Attach swipe listeners to each element
    backElements.forEach((element) => {
      this.setupSwipeListener(element); // Use `this` to ensure correct method binding
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
        console.log(`Swipe detected on: ${element}`);
        window.history.back(); // Go back to the previous page

        // Add the fade-out effect
        document.body.classList.add('fade-out');

        // Wait for the transition to complete, then go back
        setTimeout(() => {
          window.history.back();
        }, 300); // Match the duration of the CSS transition (0.3s)
      }
    };

    // Touch event listeners
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
    element.addEventListener('touchstart', onTouchStart, { passive: true });
    element.addEventListener('touchend', onTouchEnd, { passive: true });

    // Cleanup: Remove event listeners when the controller disconnects
    this.disconnect = () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }
}
