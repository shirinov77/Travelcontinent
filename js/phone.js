document.addEventListener("DOMContentLoaded", () => {
  const callBtn = document.querySelector(".link-btn");

  if (callBtn) {
    setInterval(() => {
      callBtn.classList.add("pulse");
      setTimeout(() => callBtn.classList.remove("pulse"), 800);
    }, 3000); 
  }
});
