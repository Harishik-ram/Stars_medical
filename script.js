const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const tabButtons = [...document.querySelectorAll('[data-tab]')];
const tabPanels = [...document.querySelectorAll('[data-panel]')];

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    tabButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    tabPanels.forEach(panel => {
      const active = panel.dataset.panel === target;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => {
  if (element.dataset.delay) element.style.setProperty('--delay', `${element.dataset.delay}ms`);
  revealObserver.observe(element);
});

const formatCount = number => number >= 1000 ? `${Math.round(number / 1000).toLocaleString('en-IN')},000+` : `${number}+`;
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.counter);
    const duration = 1000;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      element.textContent = target >= 1000 ? `${value.toLocaleString('en-IN')}+` : `${value}+`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(element);
  });
}, { threshold: 0.7 });

document.querySelectorAll('[data-counter]').forEach(counter => counterObserver.observe(counter));

document.querySelector('[data-contact-form]')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Training enquiry from ${data.get('institution')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Institution: ${data.get('institution')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email')}`,
    `Programme: ${data.get('programme')}`,
    '',
    'Message:',
    data.get('message') || 'No additional message.'
  ].join('\n');
  window.location.href = `mailto:starshealthcareacademy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
