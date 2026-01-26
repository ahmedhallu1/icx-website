(() => {
  document.documentElement.classList.add('js');

  const dropdown = document.querySelector('[data-dropdown]');
  const dropdownButton = document.querySelector('[data-dropdown-button]');
  const dropdownPanel = document.querySelector('[data-dropdown-panel]');

  const closeDropdown = () => {
    if (!dropdown) return;
    dropdown.classList.remove('open');
    if (dropdownButton) dropdownButton.setAttribute('aria-expanded', 'false');
  };

  const toggleDropdown = (event) => {
    if (!dropdown) return;
    event.preventDefault();
    const isOpen = dropdown.classList.toggle('open');
    if (dropdownButton) dropdownButton.setAttribute('aria-expanded', String(isOpen));
  };

  if (dropdownButton && dropdownPanel) {
    dropdownButton.addEventListener('click', toggleDropdown);
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) closeDropdown();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDropdown();
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
      const isHome = path.endsWith('/home.html') || path.endsWith('home.html') || path === '/' || path === '';

      if (isHome && typeof window.filterOpportunities === 'function') {
        event.preventDefault();
        window.filterOpportunities(category);
        closeDropdown();
      }
    });
  }

})();
