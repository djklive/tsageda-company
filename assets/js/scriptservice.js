// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all elements with animate-on-scroll class
  document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  });
  
  // Mobile menu functionality
  const menu = document.getElementById('menu');
  const sidebar = document.getElementById('sidebar');
  const removeSidebar = document.getElementById('removeSidebar');
  
  menu.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('active');
  });
  
  removeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    setTimeout(() => {
      sidebar.classList.add('hidden');
    }, 300);
  });
  
  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menu.contains(e.target) && !sidebar.classList.contains('hidden')) {
      sidebar.classList.remove('active');
      setTimeout(() => {
        sidebar.classList.add('hidden');
      }, 300);
    }
  });