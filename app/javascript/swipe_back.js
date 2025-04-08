document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 760) {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;

      if (swipeDistance > 50) {
        window.history.back();
      }
    }
  }
});
