// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"


document.addEventListener("DOMContentLoaded", function() {
  if (window.location.href == "https://www.juliannicosia.com/" ) {
    // if (window.location.href == "http://localhost:3000/" ) {
    setTimeout(function() {
      // Redirect to the main content after 5 seconds
      window.location.href = "https://www.juliannicosia.com/home";
    }, 5000); // 3000 milliseconds = 3 seconds
  } else {
    ''
  };
});
