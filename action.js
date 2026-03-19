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