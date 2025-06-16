import { useEffect } from 'react';

export function BackgroundEffects() {
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;

      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        
        const keyframes = `
          @keyframes float-${i} {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
            10%, 90% { opacity: 1; }
            50% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg); }
          }
        `;
        
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        
        particle.style.animation = `float-${i} ${Math.random() * 20 + 10}s infinite linear`;
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <>
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      <div id="particles" className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
}
