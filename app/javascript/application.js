// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"


document.addEventListener("DOMContentLoaded", function() {
  if (window.location.href == "https://www.juliannicosia.com/" ) {
    // if (window.location.href == "http://localhost:3000/" ) {
    setTimeout(function() {
      // Redirect to the main content after 4 seconds
      window.location.href = "https://www.juliannicosia.com/home";
      // window.location.href = "http://localhost:3000/home";
    }, 2000); // 2 seconds
  } else {
    ''
  };
});
