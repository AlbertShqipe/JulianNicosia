import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tabs-calendar"
export default class extends Controller {
  static targets= ["link", "tab"];

  open(event) {
    event.preventDefault
    let tabId = event.currentTarget.dataset.id

    this.tabTargets.forEach(tab => {
      if (tab.dataset.tabsTypeValue !== tabId)
        tab.classList.add('hidden')
      else
        tab.classList.toggle('hidden')
    });
  }
}
