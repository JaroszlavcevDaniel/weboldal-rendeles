  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;  // mennyit scrolloztunk
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    document.getElementById('scroll-progress').style.width = scrollPercent + "%";
  });

    document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');

    // Ellenőrizzük, hogy már elfogadták-e
    if (!localStorage.getItem('cookieAccepted')) {
      banner.style.display = 'flex';
    }

    // Elfogadás gomb
    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookieAccepted', 'true'); // eltárolja a választ
      banner.style.display = 'none'; // eltünteti a bannert
    });
  });

  // email js
  document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // ne frissüljön az oldal

  // Küldés EmailJS-el
  emailjs.sendForm('service_dqym0nm', 'template_qz49ban', this)
    .then(function() {
      alert('Köszönöm, az üzenet elküldve!');
      document.getElementById('contact-form').reset(); // form törlése
    }, function(error) {
      alert('Hiba történt, próbáld újra.');
      console.log('EmailJS hiba:', error);
    });
});

// SLIDER

const cards = document.querySelectorAll('.custom-card');
let index = 2;

function update() {
  cards.forEach((card, i) => {
    card.className = 'card custom-card';

    const diff = (i - index + cards.length) % cards.length;

    if (diff === 0) card.classList.add('active');
    else if (diff === 1) card.classList.add('next1');
    else if (diff === 2) card.classList.add('next2');
    else if (diff === cards.length - 1) card.classList.add('prev1');
    else if (diff === cards.length - 2) card.classList.add('prev2');
  });
}

function next() {
  index = (index + 1) % cards.length;
  update();
}

setInterval(next, 2500);
update();

// TECH SECTION

const items = document.querySelectorAll('.tech-item');

items.forEach((item, index) => {
  const delay = index * 100;

  item.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-10px)' },
    { transform: 'translateY(0px)' }
  ], {
    duration: 3000,
    delay: delay,
    iterations: Infinity,
    easing: 'ease-in-out'
  });
});


// KNIGHT !!!!!!
const knight = document.getElementById("knight");
const header = document.querySelector("header");

let speed = 2;
let currentLeft = -150; // indul balról kívül

function animateKnight() {
  currentLeft += speed;

  const maxX = header.offsetWidth;

  // ha még a képernyőn van
  if (currentLeft < maxX) {
    knight.style.left = currentLeft + "px";
    knight.style.display = "block";
    knight.classList.add("riding");
  } else {
    // ha elérte a végét → eltűnik
    knight.style.display = "none";
    knight.classList.remove("riding");
  }

  requestAnimationFrame(animateKnight);
}

animateKnight();