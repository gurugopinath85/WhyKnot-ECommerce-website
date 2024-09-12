// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCountEl = document.querySelector('.cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = cart.length;
    }
}

// Call the function to display the cart count when the page loads
document.addEventListener('DOMContentLoaded', updateCartCount);








