// Create subtle particle effect for background
function createParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.style.position = 'absolute';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.zIndex = '-1';
  document.body.appendChild(particleContainer);

  const particleCount = window.innerWidth < 768 ? 20 : 40;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    Object.assign(particle.style, {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 2}s`
    });
    particleContainer.appendChild(particle);
  }
}

// Create particles initially
createParticles();

// Recreate particles on resize
window.addEventListener('resize', () => {
  document.querySelectorAll('.particle').forEach(p => p.remove());
  createParticles();
});

// Remove loading overlay after animation
document.querySelector('.loading-overlay').addEventListener('animationend', (e) => {
  if (e.animationName === 'fadeOut') {
    e.target.remove();
  }
});

// Periodic button animation (every 5 seconds)
function animateButtons() {
  const buttons = document.querySelectorAll('.link-btn');
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add('pulse');
      btn.addEventListener('animationend', () => {
        btn.classList.remove('pulse');
      }, { once: true });
    }, index * 200);
  });
}

// Run button animation initially and every 5 seconds
animateButtons();
setInterval(animateButtons, 5000);

// Button click handlers
document.querySelectorAll('.link-btn').forEach(btn => {
  btn.setAttribute('role', 'button');
  btn.setAttribute('aria-label', btn.querySelector('.title')?.textContent || 'Open link');

  // Click animation
  btn.addEventListener('click', (e) => {
    btn.style.transition = 'transform 0.1s ease';
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 100);

    // For external links, open in new tab
    if (btn.dataset.external === 'true') {
      window.open(btn.href, '_blank');
    }
    // Internal links navigate normally (no e.preventDefault())
  });

  // Keyboard accessibility
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});