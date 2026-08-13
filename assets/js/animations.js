document.addEventListener('DOMContentLoaded', () => {
  // Safe execution checker: triggers only if GSAP library is available
  if (typeof gsap !== 'undefined') {
    // 1. Hero Content Entrance Animations
    gsap.timeline()
      .from('.hero-tagline', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      .from('.hero-main-title', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.hero-btn-group', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.5)'
      }, '-=0.3')
      .from('.floating-card', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(2)'
      }, '-=0.2');

    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // 2. Scroll Reveal Animations for Grid Cards (Subjects, Course Cards)
      gsap.utils.toArray('.gsap-reveal').forEach(el => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });

      // 3. Staggered Entrance for Cards
      const cardGrids = document.querySelectorAll('.gsap-card-grid');
      cardGrids.forEach(grid => {
        const cards = grid.querySelectorAll('.course-card, .subject-card, .instructor-card');
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%'
          }
        });
      });

      // 4. Achievement Number Counter Animation
      const counterElements = document.querySelectorAll('.counter-val');
      counterElements.forEach(counter => {
        const target = parseInt(counter.dataset.target) || 0;
        const countObj = { val: 0 };
        gsap.to(countObj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%'
          },
          onUpdate: () => {
            counter.textContent = Math.floor(countObj.val) + (counter.dataset.suffix || '');
          }
        });
      });
    }
  }
});
