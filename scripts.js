let cartCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            document.getElementById('cart-btn').textContent = `Cart (${cartCount})`;
        });
    });
});