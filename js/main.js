// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger?.addEventListener('click', () => nav.classList.toggle('open'));

// Active nav link
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === location.href) link.classList.add('active');
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  contactForm.querySelectorAll('[data-required]').forEach(field => {
    const err = document.getElementById(field.id + '-err');
    if (!field.value.trim()) {
      err && (err.classList.add('show'));
      valid = false;
    } else {
      err && err.classList.remove('show');
    }
  });

  // Email format check
  const email = document.getElementById('email');
  const emailErr = document.getElementById('email-err');
  if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailErr && (emailErr.textContent = 'Enter a valid email address.');
    emailErr && emailErr.classList.add('show');
    valid = false;
  }

  if (valid) {
    contactForm.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }
});
