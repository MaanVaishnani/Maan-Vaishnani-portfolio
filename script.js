// Mobile Menu — build once on page load, toggle on button click
document.addEventListener('DOMContentLoaded', () => {
  const allLinks = [
    ['index.html', 'Home'],
    ['about.html', 'About'],
    ['projects.html', 'Projects'],
    ['skills.html', 'Skills'],
    ['dashboards.html', 'Dashboards'],
    ['contact.html', 'Contact']
  ];

  // Build the mobile menu immediately so it is ready before any click
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  allLinks.forEach(([href, label]) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    if (href === currentPage) a.style.color = 'var(--teal)';
    menu.appendChild(a);
  });

  const nav = document.querySelector('.nav');
  if (nav) nav.after(menu);
});

function toggleMenu() {
  const menu = document.querySelector('.mobile-menu');
  if (menu) menu.classList.toggle('open');
}

// Skill bars animation
function animateBars() {
  document.querySelectorAll('.si-fill').forEach(bar => {
    const w = bar.getAttribute('data-width');
    if (w) bar.style.width = w + '%';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Fade-in animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .project-detail, .tl-item, .skill-category, .contact-card, .edu-chip, .stat, .data-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Highlight active nav link in desktop nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
});

// Contact form → mailto
function sendEmail() {
  const name = document.getElementById('sender-name')?.value || '';
  const email = document.getElementById('sender-email')?.value || '';
  const subject = document.getElementById('msg-subject')?.value || 'Portfolio Inquiry';
  const body = document.getElementById('msg-body')?.value || '';
  const mailtoBody = `Name: ${name}\nEmail: ${email}\n\n${body}`;
  window.location.href = `mailto:aanvaishnani2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
}