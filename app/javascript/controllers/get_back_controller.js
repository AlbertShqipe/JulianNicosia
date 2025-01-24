import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="get-back"
export default class extends Controller {
  connect() {
    // Select specific elements where swipe detection is needed
    const backElements = document.querySelectorAll('.backElement');

    backElements.forEach((element) => {
      this.setupSwipeListener(element); // Use `this` to call the class method
    });
  }

  setupSwipeListener(element) {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleSwipe = () => {
      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance > 50) { // Swipe right
        console.log("Swipe detected on:", element);
        window.history.back();
      }
    };

    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const onTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    // Attach touch event listeners to the specific element
    element.addEventListener('touchstart', onTouchStart);
    element.addEventListener('touchend', onTouchEnd);

    // Store references for cleanup
    this.disconnect = () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }
}
