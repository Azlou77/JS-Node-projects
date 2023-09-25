/* what is a modal a modal is
   an element that is displayed on top of the page an pop up */
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");


// Events listeners
modalBtn.addEventListener("click", function () {
      modal.classList.add("open-modal");
   }

);

// Dismiss button
closeBtn.addEventListener("click", function () {
      modal.classList.remove("open-modal");
   }

);

