export const useScrollAnimation = () => {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const content = entry.target.querySelector('[data-content]');
      if (entry.isIntersecting) {
        content?.classList.remove('opacity-0', 'translate-y-full');
        content?.classList.add('animate-slide-up');
      } else {
        content?.classList.remove('animate-slide-up');
        content?.classList.add('opacity-0', 'translate-y-full');
      }
    });
  }, options);

  const initAnimation = () => {
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      observer.observe(section);
    });
  };

  return { initAnimation };
};