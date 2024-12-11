import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="back-to-top"
export default class extends Controller {
  connect() {
    const getScrollPosition = (element) => {
      // Get the vertical scroll position
      return element.scrollTop + element.scrollHeight;
    }
    // Get the div element that contains the scroll to top button
    const scrollTopElements = document.querySelectorAll('.scrollTopElement'); // Replace with your off-canvas selector
    const icon = document.getElementById('backToTop');


    // Listen for click events on the scroll-to-top icon
    icon.addEventListener('click', function () {
      scrollTopElements.forEach(function (element) {
          smoothScrollToTop(element);
      });
    });

    function smoothScrollToTop(element) {
        const scrollStep = element.scrollTop / 20; // Adjust the divisor for speed (higher = slower)

        function step() {
            if (element.scrollTop > 0) {
                element.scrollTop -= scrollStep;
                requestAnimationFrame(step); // Continue until fully scrolled
            }
        }

        step(); // Start the animation
    }

    // Listen for scroll events on each scroll-to-top element
    scrollTopElements.forEach(function(element) {
      // console.log(element);
      element.addEventListener('scroll', function () {
        const scrollTop = element.scrollTop; // Current scroll position
        // console.log(scrollTop);

        if (scrollTop <= 960) {
          icon.style.opacity = 0;
        } else {
          // Gradually increase opacity between scroll positions 860 and 1160
          let maxOpacityScroll = 1690; // Adjust this to define the scroll range over which opacity increases
          let opacity = (scrollTop - 860) / (maxOpacityScroll - 860);

          // Clamp the opacity value between 0 and 1
          icon.style.opacity = Math.min(Math.max(opacity, 0), 1);
        };
      });
    });
  }
}
