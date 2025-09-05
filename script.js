window.addEventListener("load", () => {
  let popup = document.getElementById("welcomePopup");
  let closeBtn = document.querySelector(".close-btn");

  // Show popup on load
  popup.classList.add("show");

  // Close popup when clicking "X"
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Close popup when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
});
