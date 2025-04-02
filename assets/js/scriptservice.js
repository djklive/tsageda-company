// Intersection Observer pour les animations au défilement
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Ajouter un délai basé sur l'index de l'élément ou sur son attribut data-delay
        const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : index * 150;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px' // Déclenche l'animation un peu avant que l'élément soit complètement visible
  });
  
  // Observer avec réinitialisation pour les éléments qui doivent se réanimer à chaque fois
  const repeatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observer tous les éléments avec la classe animate-on-scroll
  document.addEventListener('DOMContentLoaded', () => {
    // Animation standard
    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.repeat-animation)');
    animatedElements.forEach(el => observer.observe(el));
    
    // Animation répétée
    const repeatAnimatedElements = document.querySelectorAll('.animate-on-scroll.repeat-animation');
    repeatAnimatedElements.forEach(el => repeatObserver.observe(el));
    
    // Animation des cartes de service avec délai progressif
    const serviceCards = document.querySelectorAll('.service-card-hover');
    serviceCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 100}ms`;
    });
    
    // Animation des sections avec délai
    animateSectionsWithDelay();
    
    // Initialiser les animations parallax
    initParallaxEffect();
  });
  
  // Mobile menu functionality
  const menu = document.getElementById('menu');
  const sidebar = document.getElementById('sidebar');
  const removeSidebar = document.getElementById('removeSidebar');
  const nav =document.querySelector("nav")

  window.addEventListener("scroll",()=>{
    if (window.scrollY>100) {
      
        nav.style.position="fixed"
        nav.style.top = 0
        nav.style.height= 60+"px"
        nav.style.transition=.2+"s"


    }else{
       
        nav.style.position="relative"
        nav.style.transition=.2+"s"
        nav.style.height= 48+"px"
       

    }
     
})
  
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
  
  // Fonction pour animer des sections avec délai
  function animateSectionsWithDelay() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.classList.add('section-hidden');
      section.style.transitionDelay = `${index * 200}ms`;
      
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              section.classList.add('section-visible');
              sectionObserver.unobserve(section);
            }
          });
        },
        {
          threshold: 0.1
        }
      );
      
      sectionObserver.observe(section);
    });
  }
  
  // Effet parallax pour certains éléments
  function initParallaxEffect() {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      // Parallax pour l'image hero
      const heroImage = document.querySelector('.w-full.relative img');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
      
      // Effet de parallax pour les cartes de projets
    //   const projectCards = document.querySelectorAll('.service-card-hover');
    //   projectCards.forEach((card, index) => {
    //     const speed = 0.03 + (index % 3) * 0.01;
    //     const yPos = scrollPosition * speed;
    //     card.style.transform = `translateY(${yPos}px)`;
    //   });
    });
  }
  
  // Animation de conteur pour les statistiques
  function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);
      
      if (start >= target) {
        clearInterval(timer);
        element.textContent = target;
      }
    }, 16);
  }
  
  // Fonction pour ajouter un effet de type typing
  function typeEffect(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }