// XHr for XML HTTP Request
const log = document.querySelector(".event-log");

// Add event listener to add text content
document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  // Create a new XHR object
  const xhr = new XMLHttpRequest();

  // Add event listener to the XHR object
  // Loadend is triggered when the request is finished
  xhr.addEventListener("loadend", () => {
    // Show the status of the request
    log.textContent = `${log.textContent}Terminé avec le statut : ${xhr.status}`;
  });

  // Get the data from the URL
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/translated-content/main/files/fr/_wikihistory.json",
  );
  // Send the request
  xhr.send();
  log.textContent = `${log.textContent}Requête XHR initiée\n`;
});

// Add event listener to reload
document.querySelector("#recharger").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
