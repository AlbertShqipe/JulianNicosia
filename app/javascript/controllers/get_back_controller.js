import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="get-back"
export default class extends Controller {
  connect() {
    setupSwipeListener();
    console.log("Hello, Stimulus!", this.element);
    console.log("Current page: " + window.location.pathname)
  }

  setupSwipeListener() {
    if (window.innerWidth < 760 && window.location.pathname !== '/home') {
      let touchStartX = 0;
      let touchEndX = 0;
      const backElements = document.querySelectorAll('.backElement');

      const handleSwipe = () => {
        const swipeDistance = touchEndX - touchStartX;
        if (swipeDistance > 50) { // Swipe right
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

      document.addEventListener('touchstart', onTouchStart);
      document.addEventListener('touchend', onTouchEnd);

      // Optionally remove event listeners on disconnect to avoid memory leaks
      this.disconnect = () => {
        document.removeEventListener('touchstart', onTouchStart);
        document.removeEventListener('touchend', onTouchEnd);
      };
    }
  }
}
