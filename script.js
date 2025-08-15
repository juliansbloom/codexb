const cartCount = document.getElementById('cart-count');
let count = parseInt(localStorage.getItem('cartCount') || '0', 10);
cartCount.textContent = count;

document.querySelectorAll('.product button').forEach(btn => {
  btn.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    localStorage.setItem('cartCount', count);
  });
});
