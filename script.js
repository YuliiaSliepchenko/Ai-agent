const slides = document.querySelectorAll('.review-slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.review-nav.prev');
const nextButton = document.querySelector('.review-nav.next');

let activeReviewIndex = 0;

function renderReviewSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === activeReviewIndex);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === activeReviewIndex);
  });
}

function moveReviewSlider(step) {
  activeReviewIndex = (activeReviewIndex + step + slides.length) % slides.length;
  renderReviewSlider();
}

if (slides.length && prevButton && nextButton) {
  prevButton.addEventListener('click', () => moveReviewSlider(-1));
  nextButton.addEventListener('click', () => moveReviewSlider(1));

  setInterval(() => moveReviewSlider(1), 6000);
}
