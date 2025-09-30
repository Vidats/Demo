 // Chức năng toggle menu
function toggleMenu() {
  const menu = document.getElementById('slidingMenu');
  const overlay = document.getElementById('menuOverlay');

  menu.classList.toggle('open');
  overlay.classList.toggle('show');
}


// Đóng menu khi nhấn phím ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const menu = document.getElementById('slidingMenu');
    const overlay = document.getElementById('menuOverlay');

    menu.classList.remove('open');
    overlay.classList.remove('show');
  }
});

function toggleSearchInput() {
    const input = document.querySelector('.search-input');
    input.style.display = input.style.display === 'none' ? 'block' : 'none';
    if (input.style.display === 'block') {
        input.focus();
    }
}

