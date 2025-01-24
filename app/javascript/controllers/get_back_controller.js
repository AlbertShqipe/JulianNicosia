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
    let touchEndX = 0;

    // Helper function to detect a right swipe
    const handleSwipe = () => {
      const swipeDistance = touchEndX - touchStartX;
      console.log(`Swipe distance: ${swipeDistance}`);
      if (swipeDistance > 50) { // Right swipe detected
        console.log("Swipe detected on:", element);
        window.history.back(); // Go back to the previous page
      }
    };

    // Touch event listeners
    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const onTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    // Add touch event listeners to the element
    element.addEventListener('touchstart', onTouchStart);
    element.addEventListener('touchend', onTouchEnd);

    // Cleanup: Remove event listeners when the controller disconnects
    this.disconnect = () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }
}
