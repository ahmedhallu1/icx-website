(() => {
  document.documentElement.classList.add('js');

  const dropdowns = Array.from(document.querySelectorAll('[data-dropdown]'));

  const closeDropdowns = (except) => {
    dropdowns.forEach((dropdown) => {
      if (except && dropdown === except) return;
      dropdown.classList.remove('open');
      const button = dropdown.querySelector('[data-dropdown-button]');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  };

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('[data-dropdown-button]');
    const panel = dropdown.querySelector('[data-dropdown-panel]');
    if (!button || !panel) return;

    button.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = dropdown.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) closeDropdowns(dropdown);
    });
  });

  if (dropdowns.length) {
    document.addEventListener('click', (event) => {
      const insideDropdown = dropdowns.some((dropdown) => dropdown.contains(event.target));
      if (!insideDropdown) closeDropdowns();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDropdowns();
    });
  }

  const nav = document.querySelector('.site-nav');
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  const closeMobileMenu = () => {
    if (!nav) return;
    nav.classList.remove('mobile-open');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
  };

  if (nav && mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = nav.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target)) closeMobileMenu();
    });

    mobileMenu.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMobileMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMobileMenu();
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const opportunityLinks = document.querySelectorAll('[data-opportunity]');
  if (opportunityLinks.length > 0) {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('[data-opportunity]');
      if (!link) return;
      const category = link.dataset.opportunity;
      if (!category) return;

      const path = window.location.pathname.toLowerCase();
      const isHome = path.endsWith('/index.html') || path.endsWith('index.html') || path.endsWith('/') || path === '' || path === '/';

      event.preventDefault();
      if (isHome && typeof window.filterOpportunities === 'function') {
        window.filterOpportunities(category);
        closeDropdowns();
      } else {
        // Navigate to home page with category parameter
        window.location.href = `index.html?category=${encodeURIComponent(category)}#opportunities`;
      }
    });
  }

})();
