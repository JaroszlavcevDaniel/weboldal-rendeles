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



// SLIDER

// const cards = document.querySelectorAll('.custom-card');
// let index = 2;

// function update() {
//   cards.forEach((card, i) => {
//     card.className = 'card custom-card';

//     const diff = (i - index + cards.length) % cards.length;

//     if (diff === 0) card.classList.add('active');
//     else if (diff === 1) card.classList.add('next1');
//     else if (diff === 2) card.classList.add('next2');
//     else if (diff === cards.length - 1) card.classList.add('prev1');
//     else if (diff === cards.length - 2) card.classList.add('prev2');
//   });
// }

// function next() {
//   index = (index + 1) % cards.length;
//   update();
// }

// setInterval(next, 2500);
// update();