import { useEffect } from 'react';

export function useCursorTrail() {
  useEffect(() => {
    const cursorTrail = document.getElementById('cursor-trail');
    if (!cursorTrail) return;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      const dx = mouseX - trailX;
      const dy = mouseY - trailY;
      
      trailX += dx * 0.1;
      trailY += dy * 0.1;
      
      cursorTrail.style.left = trailX - 10 + 'px';
      cursorTrail.style.top = trailY - 10 + 'px';
      
      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}
