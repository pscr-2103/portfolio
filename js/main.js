// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger?.addEventListener('click', () => nav.classList.toggle('nav--open'));

// Close nav on link click (mobile)
nav?.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('nav--open'))
);

// ===== ACTIVE NAV LINK =====
document.querySelectorAll('.nav__link').forEach(link => {
  if (link.href === location.href) link.classList.add('nav__link--active');
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal--visible'); });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  contactForm.querySelectorAll('[data-required]').forEach(field => {
    const err = document.getElementById(field.id + '-err');
    if (!field.value.trim()) {
      err?.classList.add('form__error--show');
      valid = false;
    } else {
      err?.classList.remove('form__error--show');
    }
  });

  const email = document.getElementById('email');
  const emailErr = document.getElementById('email-err');
  if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    if (emailErr) { emailErr.textContent = 'Enter a valid email.'; emailErr.classList.add('form__error--show'); }
    valid = false;
  }

  if (valid) {
    contactForm.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }
});
