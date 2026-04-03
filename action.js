  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;  
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    document.getElementById('scroll-progress').style.width = scrollPercent + "%";
  });

    document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');

    if (!localStorage.getItem('cookieAccepted')) {
      banner.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookieAccepted', 'true'); 
      banner.style.display = 'none'; 
    });
  });

  // email js
  document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 

  emailjs.sendForm('service_dqym0nm', 'template_qz49ban', this)
    .then(function() {
      alert('Köszönöm, az üzenet elküldve!');
      document.getElementById('contact-form').reset(); 
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

let speed = 1.8;
let currentLeft = -150; 

function animateKnight() {
  currentLeft += speed;

  const maxX = header.offsetWidth;

  if (currentLeft < maxX) {
    knight.style.left = currentLeft + "px";
    knight.style.display = "block";
    knight.classList.add("riding");
  } else {
    knight.style.display = "none";
    knight.classList.remove("riding");
  }

  requestAnimationFrame(animateKnight);
}

animateKnight();

// KNIGHT TWOOO

const knightTwo = document.getElementById("knightTwo");
let speedTwo = 0.5;
let currentLeftTwo = -300; 

let frame = 1;
setInterval(() => {
    frame = (frame === 1) ? 2 : 1;
    if (knightTwo.style.display !== "none") {
        knightTwo.style.backgroundImage = `url('knight${frame}.png')`;
    }
}, 250);

function animateKnightTwo() {
    currentLeftTwo += speedTwo;

    const maxXTwo = document.querySelector('header').offsetWidth;

    if (currentLeftTwo < maxXTwo) {
        knightTwo.style.left = currentLeftTwo + "px";
        knightTwo.style.display = "block";
    } else {
        knightTwo.style.display = "none";
    }

    requestAnimationFrame(animateKnightTwo);
}

animateKnightTwo();

// MAN ANIMATION FIRST 

const img = document.getElementById("aboutImage");

const newSrc = "574a186db5e4fead049d07eb6f289f38-removebg-preview.png";
const  originalSrc = "ululu.png";

const triggerPoint = window.innerHeight * 0.3;

let isSwitched = false;

window.addEventListener("scroll", () => {
  const rect = img.getBoundingClientRect();

  if (rect.top < triggerPoint && !isSwitched) {
    img.src = newSrc;
    isSwitched = true;
  }

  if (rect.top >= triggerPoint && isSwitched) {
    img.src = originalSrc;
    isSwitched = false;
  }
});

// MAN ANIMATION SECOND 

const imgTwo = document.getElementById("aboutImageTwo");

const newNewSrc = "uhuhu.png";
const originalSrcSrc = "vintage-engraving-of-a-victorian-lady-seated-at-a-table-reading-a-FDWEYB-removebg-preview.png";

const triggerPointTwo = window.innerHeight * 0.3;

let isSwitchedTwo = false;

window.addEventListener("scroll", () => {
  const rect = imgTwo.getBoundingClientRect();

  if (rect.top < triggerPointTwo && !isSwitchedTwo) {
    imgTwo.src = newNewSrc;
    isSwitchedTwo = true;
  }

  if (rect.top >= triggerPointTwo && isSwitchedTwo) {
    imgTwo.src = originalSrcSrc;
    isSwitchedTwo = false;
  }
});

// GIRL ANIMA

const section = document.querySelector(".parallax-section");

const newBg = "url('iuvewewruw.png')";
const originalBg = "url('istockphoto-2220516062-612x612.jpg')";

let isSwitchedThree = false;

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.1 && !isSwitchedThree) {
    section.style.backgroundImage = newBg;
    isSwitchedThree = true;
  }

  if (rect.top >= window.innerHeight * 0.1 && isSwitchedThree) {
    section.style.backgroundImage = originalBg;
    isSwitchedThree = false;
  }
});