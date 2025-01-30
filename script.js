document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission
  
  let searchTerm = document.getElementById("search-bar").value.trim();
  
  if (searchTerm) {
    if (isValidURL(searchTerm)) {
      openInNewWindow(searchTerm);  // If it's a valid URL, open it directly
    } else {
      // If it's not a URL, search on Google
      let googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      openInNewWindow(googleSearchUrl);
    }
  }
});

function isValidURL(str) {
  // Basic URL validation regex
  let pattern = new RegExp('^(https?://)?([a-z0-9]+[.]){1,}[a-z0-9]{2,}(/.*)?$', 'i');
  return pattern.test(str);
}

function openInNewWindow(url) {
  let iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = url;
  
  iframe.onload = function () {
    // If the iframe loads successfully, add it to the page
    document.body.appendChild(iframe);
  };

  iframe.onerror = function () {
    // If the iframe fails to load, open in a new window
    window.open(url, "_blank");
  };

  document.body.appendChild(iframe);
}
