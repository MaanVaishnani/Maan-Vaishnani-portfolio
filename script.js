// Mobile Menu
function toggleMenu() {
  let menu = document.querySelector('.mobile-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.className = 'mobile-menu';
    const links = [
      ['index.html', 'Home'],
      ['about.html', 'About'],
      ['projects.html', 'Projects'],
      ['skills.html', 'Skills'],
      ['dashboards.html', 'Dashboards'],
      ['contact.html', 'Contact']
    ];
    links.forEach(([href, label]) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = label;
      menu.appendChild(a);
    });
    document.querySelector('.nav').after(menu);
  }
  menu.classList.toggle('open');
}

// Skill bars animation
function animateBars() {
  document.querySelectorAll('.si-fill').forEach(bar => {
    const w = bar.getAttribute('data-width');
    if (w) bar.style.width = w + '%';
  });
}

// Intersection observer for fade-ins and skill bars
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in class to key elements
  document.querySelectorAll('.project-card, .project-detail, .tl-item, .skill-category, .contact-card, .edu-chip, .stat, .data-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Animate skill bars when they enter viewport
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(animateBars, 100);
        barObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });

  const skillsSection = document.querySelector('.skills-grid');
  if (skillsSection) barObserver.observe(skillsSection);

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });
});

// Contact form → mailto
function sendEmail() {
  const name = document.getElementById('sender-name')?.value || '';
  const email = document.getElementById('sender-email')?.value || '';
  const subject = document.getElementById('msg-subject')?.value || 'Portfolio Inquiry';
  const body = document.getElementById('msg-body')?.value || '';
  const mailtoBody = `Name: ${name}\nEmail: ${email}\n\n${body}`;
  window.location.href = `mailto:maanvaishnani2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
}
