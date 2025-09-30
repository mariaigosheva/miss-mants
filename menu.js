document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

// Enable flip on mobile tap
document.querySelectorAll('.show-card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('flipped');
  });
});



