document.addEventListener("DOMContentLoaded", () => {
  const locationBtn = document.querySelector(".link-btn");

  if (locationBtn) {
    const animate = () => {
      locationBtn.classList.add("pulse");
      setTimeout(() => locationBtn.classList.remove("pulse"), 800);
    };
    animate();
    setInterval(animate, 8000); 
  }
});