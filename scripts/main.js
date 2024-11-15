// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.button');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          alert('Product added to cart!');
          // Here, you can implement actual cart functionality
      });
  });
});
