import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tabs-calendar"
export default class extends Controller {
  static targets= ["link", "tab"];

  connect() {
    // this.linkTargets.forEach(link => {
    //   link.addEventListener('click', (event) => {
    //     this.linkTargets.forEach(link => link.classList.remove('active'));
    //     link.classList.toggle('active');
    //   });
    // })
    this.tabTargets.forEach(tab => {
      console.log(tab.dataset.tabsTypeValue)
      if (tab.dataset.tabsTypeValue === this.defaultValue) {
        tab.classList.add('hidden');
      }
    });
    // plus.addEventListener('click', () => {
    //   plus.classList.toggle('turn');
    //   if (plus.classList.contains('turn')) {
    //     ulWorks.style = 'display: block';
    //   } else {
    //     ulWorks.style = 'display: none';
    //   }
    // });
  }

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
