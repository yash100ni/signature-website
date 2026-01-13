// Elements
const landing = document.getElementById('landing');
const startBtn = document.getElementById('start-btn');
const screens = document.querySelectorAll('#valentine-screens .screen');
const valentineScreens = document.getElementById('valentine-screens');
const checkout = document.getElementById('checkout');

// Start button
startBtn.addEventListener('click', () => {
  landing.style.display = 'none';
  valentineScreens.style.display = 'block';
  screens[0].classList.add('active');
  spawnHearts();
});

// Navigation
screens.forEach((screen, index) => {
  const next = screen.querySelector('.next');
  const prev = screen.querySelector('.prev');

  if (next) {
    next.addEventListener('click', () => {
      screen.classList.remove('active');
      screens[index + 1].classList.add('active');
    });
  }

  if (prev) {
    prev.addEventListener('click', () => {
      screen.classList.remove('active');
      screens[index - 1].classList.add('active');
    });
  }
});

// Day selection
document.querySelectorAll('.select-day').forEach(btn => {
  btn.addEventListener('click', () => {
    valentineScreens.style.display = 'none';
    checkout.style.display = 'block';
  });
});

// ❌ REMOVED preventDefault so FormSubmit works
// ❌ REMOVED fake confirmation logic

// Form submission
document.getElementById('checkout-form').addEventListener('submit', function(e){
  e.preventDefault();
  this.style.display = 'none';
  document.querySelector('.confirmation').style.display = 'block';
});
// Hearts animation
function spawnHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = 10 + Math.random() * 20 + 'px';
    heart.textContent = '❤️';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);
}
