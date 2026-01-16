const landing = document.getElementById('landing');
const startBtn = document.getElementById('start-btn');
const valentineScreens = document.getElementById('valentine-screens');
const checkout = document.getElementById('checkout');
const screens = document.querySelectorAll('#valentine-screens .screen');

// START BUTTON
startBtn.addEventListener('click', () => {
  landing.style.display = 'none';
  valentineScreens.style.display = 'block';

  if (screens.length > 0) {
    screens.forEach(s => s.classList.remove('active'));
    screens[0].classList.add('active');
  }

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


// DAY SELECT
document.querySelectorAll('.select-day').forEach(btn => {
  btn.addEventListener('click', () => {
    valentineScreens.style.display = 'none';
    checkout.style.display = 'block';
  });
});

// PAYMENT
const checkbox = document.getElementById("paymentCheck");
const sendBtn = document.getElementById("sendGiftBtn");

checkbox.addEventListener("change", () => {
  sendBtn.disabled = !checkbox.checked;
});

sendBtn.addEventListener("click", () => {
  const boyfriend = document.getElementById("boyfriend").value;
  const girlfriend = document.getElementById("girlfriend").value;
  const phone = document.getElementById("phone").value;
  const delivery = document.getElementById("delivery").value;
  const message = document.getElementById("message").value;

  if (!boyfriend || !girlfriend || !phone || !delivery || !message) {
    alert("Please fill all details ❤️");
    return;
  }

  const text = encodeURIComponent(
`💖 Signature Café – Valentine Order 💖

Your Name: ${boyfriend}
Her Name: ${girlfriend}
Phone: ${phone}
Delivery Date: ${delivery}

Message:
${message}

✅ Payment Completed`
  );

  window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  document.querySelector(".confirmation").style.display = "block";
});

// HEARTS
function spawnHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);
}
