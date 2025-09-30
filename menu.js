document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));

  // Carousel
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dots = Array.from(document.querySelectorAll('.dot'));
  let currentIndex = 0;

  function updateSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlide(currentIndex);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  }, 8000);

  updateSlide(currentIndex);
});


