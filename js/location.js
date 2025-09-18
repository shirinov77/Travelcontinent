document.addEventListener("DOMContentLoaded", () => {
  const locationBtn = document.querySelector(".link-btn");

  if (locationBtn) {
    setInterval(() => {
      locationBtn.classList.add("pulse");
      setTimeout(() => locationBtn.classList.remove("pulse"), 800);
    }, 3000);
  }
});
