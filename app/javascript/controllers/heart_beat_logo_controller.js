import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="heart-beat-logo"
export default class extends Controller {
  connect() {
    // Select the image
    const image = document.getElementById("heart-beat");

    // Set initial scale and heartbeat intensity
    let scaleUp = true;
    const minScale = 1;
    const maxScale = 1.1;
    const beatDuration = 200; // Duration for each quick scale in milliseconds
    const pauseDuration = 700; // Pause between beat sets
    // Function to scale the image
    function heartbeatSequence() {
      if (window.innerWidth > 760) {
        // First beat
        image.style.transform = `scale(${maxScale})`;
        setTimeout(() => {
          image.style.transform = `scale(${minScale})`;

          // Second beat
          setTimeout(() => {
            image.style.transform = `scale(${maxScale})`;

            setTimeout(() => {
              image.style.transform = `scale(${minScale})`;

              // Pause before repeating the sequence
              setTimeout(heartbeatSequence, pauseDuration);

            }, beatDuration); // End of second beat
          }, beatDuration); // Start of second beat after first beat
        }, beatDuration); // End of first beat
      }
    }

    // Start the heartbeat sequence
    heartbeatSequence();
  }
}
