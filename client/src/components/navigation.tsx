import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-white border-opacity-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold font-mono">
            <span className="text-neon-cyan animate-glow">{'</>'}</span>
            <span className="ml-2">Subham Sahoo</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-neon-cyan transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-neon-cyan" />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block hover:text-neon-cyan transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
