import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="works-list-disappear"
export default class extends Controller {
  connect() {
    const list = document.getElementById('works-list');
    if (window.innerWidth < 760) {
      list.style.display = 'none';
    } else {
      list.style.display = 'block';
    };
  }
}
