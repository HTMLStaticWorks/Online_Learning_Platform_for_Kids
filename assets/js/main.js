document.addEventListener('DOMContentLoaded', () => {
  // === MOBILE NAVIGATION HELPER ===
  const navbarToggler = document.querySelector('.navbar-toggler');
  const customNavbar = document.querySelector('.custom-navbar');
  
  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      // Toggle custom active class or backdrop logic if needed
      document.body.classList.toggle('nav-menu-open');
    });
  }

  // Nested dropdown toggle for tablet/mobile
  const hasMegaMenu = document.querySelector('.has-mega-menu');
  if (hasMegaMenu) {
    const navLink = hasMegaMenu.querySelector('.nav-link');
    if (navLink) {
      navLink.addEventListener('click', (e) => {
        if (window.innerWidth < 992) {
          e.preventDefault();
          hasMegaMenu.classList.toggle('active');
        }
      });
    }
  }

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    if (hasMegaMenu && !hasMegaMenu.contains(e.target) && window.innerWidth < 992) {
      hasMegaMenu.classList.remove('active');
    }
  });


  // === MONTHLY / YEARLY BILLING TOGGLE ===
  const billingToggle = document.getElementById('billingToggle');
  if (billingToggle) {
    const monthlyBtn = document.getElementById('toggleMonthly');
    const yearlyBtn = document.getElementById('toggleYearly');
    
    const starterPrice = document.getElementById('priceStarter');
    const explorerPrice = document.getElementById('priceExplorer');
    const allAccessPrice = document.getElementById('priceAllAccess');
    const familyPrice = document.getElementById('priceFamily');

    const starterPeriod = document.getElementById('periodStarter');
    const explorerPeriod = document.getElementById('periodExplorer');
    const allAccessPeriod = document.getElementById('periodAllAccess');
    const familyPeriod = document.getElementById('periodFamily');

    const togglePricing = (isYearly) => {
      if (isYearly) {
        monthlyBtn.classList.remove('active');
        yearlyBtn.classList.add('active');
        
        if (starterPrice) starterPrice.textContent = '$99';
        if (explorerPrice) explorerPrice.textContent = '$199';
        if (allAccessPrice) allAccessPrice.textContent = '$299';
        if (familyPrice) familyPrice.textContent = '$499';

        [starterPeriod, explorerPeriod, allAccessPeriod, familyPeriod].forEach(el => {
          if (el) el.textContent = '/ year';
        });
      } else {
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');

        if (starterPrice) starterPrice.textContent = '$9';
        if (explorerPrice) explorerPrice.textContent = '$19';
        if (allAccessPrice) allAccessPrice.textContent = '$29';
        if (familyPrice) familyPrice.textContent = '$49';

        [starterPeriod, explorerPeriod, allAccessPeriod, familyPeriod].forEach(el => {
          if (el) el.textContent = '/ month';
        });
      }
    };

    monthlyBtn.addEventListener('click', () => togglePricing(false));
    yearlyBtn.addEventListener('click', () => togglePricing(true));
  }


  // === COURSE FILTERING & SEARCH SYSTEM ===
  const courseGrid = document.getElementById('coursesGrid');
  if (courseGrid) {
    const searchInput = document.getElementById('courseSearchInput');
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const courseCards = courseGrid.querySelectorAll('.course-item');

    const filterCourses = () => {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
      
      // Group checked filters
      const checkedSubjects = Array.from(checkboxes)
        .filter(c => c.checked && c.dataset.filterGroup === 'subject')
        .map(c => c.value);
        
      const checkedAges = Array.from(checkboxes)
        .filter(c => c.checked && c.dataset.filterGroup === 'age')
        .map(c => c.value);
        
      const checkedDifficulty = Array.from(checkboxes)
        .filter(c => c.checked && c.dataset.filterGroup === 'difficulty')
        .map(c => c.value);

      let visibleCount = 0;

      courseCards.forEach(card => {
        const cardTitle = card.dataset.title.toLowerCase();
        const cardSubject = card.dataset.subject;
        const cardAge = card.dataset.age;
        const cardDifficulty = card.dataset.difficulty;

        const matchesSearch = query === '' || cardTitle.includes(query);
        const matchesSubject = checkedSubjects.length === 0 || checkedSubjects.includes(cardSubject);
        const matchesAge = checkedAges.length === 0 || checkedAges.includes(cardAge);
        const matchesDifficulty = checkedDifficulty.length === 0 || checkedDifficulty.includes(cardDifficulty);

        if (matchesSearch && matchesSubject && matchesAge && matchesDifficulty) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Show "No results" message if needed
      const noResultsMsg = document.getElementById('noResultsMessage');
      if (noResultsMsg) {
        if (visibleCount === 0) {
          noResultsMsg.classList.remove('d-none');
        } else {
          noResultsMsg.classList.add('d-none');
        }
      }
    };

    if (searchInput) {
      searchInput.addEventListener('input', filterCourses);
    }
    
    checkboxes.forEach(chk => {
      chk.addEventListener('change', filterCourses);
    });

    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        checkboxes.forEach(chk => chk.checked = false);
        filterCourses();
      });
    }
  }


  // === NEWSLETTER GATEWAY VALIDATION (FOR PARENTS) ===
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value) return;

      // Safe adult verification prompt (kids learning safety focus)
      const birthYear = prompt('Parent Verification: Please enter your birth year to confirm access to our newsletter:');
      const currentYear = new Date().getFullYear();
      if (birthYear && (currentYear - parseInt(birthYear)) >= 18) {
        alert('Thank you! You have been successfully subscribed to our Parent Learning Resource newsletter.');
        emailInput.value = '';
      } else {
        alert('Subscription unsuccessful. Access restricted to parents/adults only.');
      }
    });
  }


  // === CONTACT FORM SIMULATOR ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = contactForm.querySelectorAll('input, textarea, select');
      let valid = true;
      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value) {
          valid = false;
        }
      });

      if (valid) {
        alert('Hurray! Your message was sent safely. We will email you back shortly.');
        contactForm.reset();
      } else {
        alert('Oops! Please fill in all the details.');
      }
    });
  }

  // === BACK TO TOP BUTTON ===
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
