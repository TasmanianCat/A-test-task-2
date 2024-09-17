// Select the carousel buttons
const leftButton = document.querySelector('.carousel-btn-left');
const rightButton = document.querySelector('.carousel-btn-right');
const carouselItemsWrapper = document.querySelector('.carousel-items-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentSlide = 0;

// Function to update the slide position
function updateCarousel() {
  const slideWidth = document.querySelector('.carousel-item').clientWidth;
  const slideMargin = parseFloat(
    getComputedStyle(carouselItems[0]).marginRight
  ); // Get margin-right value
  const itemWidthWithMargin = slideWidth + slideMargin;

  const visibleItems = Math.floor(
    carouselItemsWrapper.clientWidth / itemWidthWithMargin // Include margin in calculation
  );

  const maxSlidesToShow = carouselItems.length - visibleItems;

  // Calculate the offset for the current slide
  const offset = Math.max(
    -currentSlide * itemWidthWithMargin,
    -maxSlidesToShow * itemWidthWithMargin
  );

  carouselItemsWrapper.style.transform = `translateX(${offset}px)`;

  // Show or hide the left button
  leftButton.style.display = currentSlide === 0 ? 'none' : 'flex';

  // Show or hide the right button
  rightButton.style.display =
    currentSlide + 1 >= maxSlidesToShow ? 'none' : 'flex';
}

// Left button click event
leftButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

// Right button click event
rightButton.addEventListener('click', () => {
  const slideWidth = document.querySelector('.carousel-item').clientWidth;
  const slideMargin = parseFloat(
    getComputedStyle(carouselItems[0]).marginRight
  ); // Get margin-right value
  const itemWidthWithMargin = slideWidth + slideMargin;

  const maxSlidesToShow =
    carouselItems.length -
    Math.floor(
      carouselItemsWrapper.clientWidth / itemWidthWithMargin // Include margin in calculation
    );

  if (currentSlide + 1 < maxSlidesToShow) {
    currentSlide++;
    updateCarousel();
  }
});

// Update carousel position on window resize
window.addEventListener('resize', updateCarousel);

// Initial update when the page loads
updateCarousel();
