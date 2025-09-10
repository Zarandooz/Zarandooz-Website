// Simple HTML include script
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("div");
  var elements = document.querySelectorAll('[include-html]');
  elements.forEach(function(elmnt) {
    var file = elmnt.getAttribute('include-html');
    if (file) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Component not found.";
          }
          elmnt.removeAttribute('include-html');
        }
      };
      xhr.open('GET', file, true);
      xhr.send();
    }
  });
}
document.addEventListener('DOMContentLoaded', includeHTML);

// Dispatch a custom event after all includes are loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait for all includes to finish (naive, but works for this use case)
  setTimeout(function() {
    var stillLoading = document.querySelector('[include-html]');
    if (!stillLoading) {
      document.dispatchEvent(new Event('includesLoaded'));
    }
  }, 100);
});
