document.addEventListener('DOMContentLoaded', () => {
  // --- Sticky Header & Scroll Active Link ---
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Add shadow when scrolled
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Dynamic active menu highlights on scroll
    let current = 'home';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 160)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-sec') === current) {
        link.classList.add('active');
      }
    });
  });

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside of the navbar
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // --- Showcase Tabs Switcher ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const showcaseContents = document.querySelectorAll('.showcase-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Update active button classes
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update active showcase content classes
      showcaseContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === `tab-${targetTab}`) {
          content.classList.add('active');
        }
      });
    });
  });
});
