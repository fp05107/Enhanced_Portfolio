import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.glass-effect, .skill-orb, .project-card');
      
      elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isVisible = elementRect.top < window.innerHeight && elementRect.bottom > 0;
        
        if (isVisible && element instanceof HTMLElement) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
}
