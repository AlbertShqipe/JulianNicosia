import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="heart-beat-logo"
export default class extends Controller {
  connect() {
    const cancelDiv = document.querySelectorAll('.cancel');
    const heartbeat = document.getElementById('heart-beat');

    heartbeat.addEventListener('mouseenter', () => {
      cancelDiv.forEach((div) => {
        div.style.opacity = '0';
      });

      heartbeat.style = ' scale:3'
    });

    heartbeat.addEventListener('mouseleave', () => {
      cancelDiv.forEach((div) => {
        div.style.opacity = '1';
      });

      heartbeat.style = ''
    });
  }
}
