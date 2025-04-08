import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="plus"
export default class extends Controller {
  connect() {
    const plus = document.getElementById('plus-btn');
    const ulWorks = document.getElementById('works');
    const worksUl = document.getElementById('works-ul');

    plus.addEventListener('click', () => {
      plus.classList.toggle('turn');

      if (plus.classList.contains('turn')) {
        ulWorks.style = 'display: block';
        worksUl.style = 'border-bottom: 1px solid rgba(255, 255, 255, 0.75)';
      } else {
        ulWorks.style = 'display: none';
        worksUl.style = 'border: none';
      }
    });
  }
}
