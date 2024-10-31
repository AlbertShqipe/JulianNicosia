import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="plus"
export default class extends Controller {
  connect() {
    const plus = document.getElementById('plus-btn');
    const ulWorks = document.getElementById('works');
    plus.addEventListener('click', () => {
      plus.classList.toggle('turn');
      if (plus.classList.contains('turn')) {
        ulWorks.style = 'display: block';
      } else {
        ulWorks.style = 'display: none';
      }
    });
  }
}
