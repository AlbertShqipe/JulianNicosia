import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);
    console.log("Current page: " + window.location.pathname);

    // Select specific elements where swipe detection is needed
    const backElements = this.element.querySelectorAll('.backElement');

    backElements.forEach((element) => {
      this.setupSwipeListener(element);
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

    // Clean up event listeners on disconnect
    this.disconnect = () => {
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchend', onTouchEnd);
    };
  }
}
