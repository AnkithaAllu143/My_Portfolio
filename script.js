// Small interactivity example

document.addEventListener("DOMContentLoaded", () => {
  const heroBtn = document.querySelector(".btn");

  heroBtn.addEventListener("mouseover", () => {
    heroBtn.textContent = "Let's Go!";
  });

  heroBtn.addEventListener("mouseout", () => {
    heroBtn.textContent = "Explore More";
  });
});
