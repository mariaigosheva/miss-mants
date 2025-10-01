// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Flip Cards on Mobile Tap
document.querySelectorAll('.show-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.tagName !== "A" && e.target.tagName !== "BUTTON") {
      card.querySelector('.card-inner').classList.toggle('flipped');
    }
  });
});

// Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Next & Previous buttons
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

// Auto Slide every 8 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
}, 8000);
