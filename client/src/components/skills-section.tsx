import { useEffect } from 'react';

export function SkillsSection() {
  useEffect(() => {
    // Interactive hover effects for skill orbs
    const skillOrbs = document.querySelectorAll('.skill-orb');
    
    skillOrbs.forEach(orb => {
      const handleMouseEnter = () => {
        if (orb instanceof HTMLElement) {
          orb.style.transform = 'translateY(-10px) scale(1.05)';
          orb.style.boxShadow = '0 20px 40px rgba(0,245,255,0.3)';
        }
      };
      
      const handleMouseLeave = () => {
        if (orb instanceof HTMLElement) {
          orb.style.transform = 'translateY(0) scale(1)';
          orb.style.boxShadow = 'none';
        }
      };

      orb.addEventListener('mouseenter', handleMouseEnter);
      orb.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      skillOrbs.forEach(orb => {
        orb.removeEventListener('mouseenter', () => {});
        orb.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const skills = [
    { name: 'React.js', icon: 'fab fa-react', color: 'neon-cyan', description: 'Component-based UI development', animate: 'animate-spin' },
    { name: 'React Native', icon: 'fab fa-react', color: 'neon-purple', description: 'Cross-platform mobile apps' },
    { name: 'Next.js', icon: 'fas fa-rocket', color: 'neon-emerald', description: 'Full-stack React framework' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'neon-gold', description: 'Modern ES6+ features' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'neon-emerald', description: 'Server-side JavaScript' },
    { name: 'Firebase', icon: 'fas fa-fire', color: 'neon-magenta', description: 'Backend-as-a-Service' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'neon-cyan', description: 'NoSQL database' },
    { name: 'AWS', icon: 'fab fa-aws', color: 'neon-gold', description: 'Cloud infrastructure' },
    { name: 'Sentry', icon: 'fas fa-bug', color: 'neon-purple', description: 'Error monitoring' },
    { name: 'Analytics', icon: 'fas fa-chart-line', color: 'neon-emerald', description: 'Google Analytics, UXCam' },
    { name: 'Lighthouse', icon: 'fas fa-tachometer-alt', color: 'neon-cyan', description: 'Performance optimization' },
    { name: 'CCAvenue', icon: 'fas fa-credit-card', color: 'neon-magenta', description: 'Payment integration' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-neon-purple animate-glow">Tech</span> Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-emerald mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-orb glass-effect rounded-2xl p-6 text-center neon-border hover:neon-border-hover transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-${skill.color} bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${skill.icon} text-3xl text-${skill.color} ${skill.animate || ''}`} />
              </div>
              <h3 className={`font-bold text-${skill.color} mb-2`}>{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
