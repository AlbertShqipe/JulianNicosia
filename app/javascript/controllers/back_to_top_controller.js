import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="back-to-top"
export default class extends Controller {
  connect() {

    const getScrollPosition = (element) => {
      // Get the vertical scroll position
      return element.scrollTop + element.scrollHeight;
    }

    // Get the div element that contains the scroll to top button
    const scrollTopElements = document.querySelectorAll('.scrollTopElement'); // Off-canvas elements
    const pages = document.querySelectorAll('.page');
    const icon = document.getElementById('backToTop');
    pages.forEach(function(page) {
      page.addEventListener('scroll', () => {
        const pageH = page.scrollTop;
        const minScroll = 250; // Start opacity transition
        const maxScroll = 784; // End opacity transition

        if (pageH <= minScroll) {
          icon.style.opacity = 0; // Fully hidden before minScroll
        } else if (pageH >= maxScroll) {
          icon.style.opacity = 1; // Fully visible after maxScroll
        } else {
          // Calculate opacity within the defined scroll range
          let opacity = (pageH - minScroll) / (maxScroll - minScroll);
          icon.style.opacity = opacity.toFixed(2); // Smooth gradual transition
        }
        icon.addEventListener('click', () => {
          page.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
          });
        });
      });
    });
    // Scroll event listener to handle opacity changes
    document.body.addEventListener('scroll', () => {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollPosition);

      const minScroll = 250; // Start opacity transition
      const maxScroll = 784; // End opacity transition

      if (scrollPosition <= minScroll) {
        icon.style.opacity = 0; // Fully hidden before minScroll
      } else if (scrollPosition >= maxScroll) {
        icon.style.opacity = 1; // Fully visible after maxScroll
      } else {
        // Calculate opacity within the defined scroll range
        let opacity = (scrollPosition - minScroll) / (maxScroll - minScroll);
        icon.style.opacity = opacity.toFixed(2); // Smooth gradual transition
      }
    });

    // Click event listener to scroll back to the top
    icon.addEventListener('click', () => {
      document.body.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
      });
    });

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
