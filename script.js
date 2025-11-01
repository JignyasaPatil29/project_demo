// set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// contact form handling
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = '⚠️ Please fill in all required fields.';
    status.style.color = 'crimson';
    return;
  }

  status.textContent = '📨 Opening your mail client...';
  status.style.color = 'green';

  // using the provided email
  const mailto = `mailto:24amtics457@gmail.com?subject=${encodeURIComponent('Portfolio Contact from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' — ' + email)}`;

  // navigate to mailto (opens default client)
  window.location.href = mailto;
});
