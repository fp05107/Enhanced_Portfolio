import { useState, useEffect } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Neural.Home', icon: 'fas fa-home', color: 'neon-cyan' },
    { id: 'about', label: 'Bio.Data', icon: 'fas fa-user-astronaut', color: 'neon-purple' },
    { id: 'projects', label: 'Code.Labs', icon: 'fas fa-flask', color: 'neon-emerald' },
    { id: 'skills', label: 'Tech.Stack', icon: 'fas fa-brain', color: 'neon-magenta' },
    { id: 'contact', label: 'Connect.API', icon: 'fas fa-satellite-dish', color: 'neon-gold' },
  ];

  return (
    <>
      {/* Futuristic Floating Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'scale-95 opacity-95' : 'scale-100 opacity-100'
      }`}>
        <div className="glass-effect rounded-full px-6 py-3 neon-border backdrop-blur-2xl">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="text-lg font-bold font-mono mr-6">
              <span className="text-neon-cyan animate-glow">{'<AI/>'}</span>
              <span className="ml-2 text-xs text-gray-300">Subham.exe</span>
            </div>
            
            {/* Navigation Items */}
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-${item.color} hover:bg-opacity-10 ${
                    activeSection === item.id ? `bg-${item.color} bg-opacity-20` : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <i className={`${item.icon} text-${item.color} text-sm`} />
                    <span className="text-sm font-mono">{item.label}</span>
                  </div>
                  <div className={`absolute inset-0 rounded-full border border-${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-neon-cyan hover:bg-opacity-20 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-neon-cyan`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Holographic Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-dark-bg bg-opacity-95 backdrop-blur-xl" />
          <div className="relative h-full flex items-center justify-center">
            <div className="space-y-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left p-6 glass-effect rounded-2xl neon-border hover:bg-${item.color} hover:bg-opacity-10 transition-all duration-500`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-${item.color} bg-opacity-20 flex items-center justify-center`}>
                      <i className={`${item.icon} text-${item.color} text-xl`} />
                    </div>
                    <div>
                      <div className={`text-xl font-bold text-${item.color}`}>{item.label}</div>
                      <div className="text-sm text-gray-400 font-mono">Navigate to {item.label.toLowerCase()}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quantum Data Visualization */}
      <div className="fixed top-20 right-6 z-30 hidden xl:block">
        <div className="glass-effect rounded-xl p-4 neon-border">
          <div className="text-xs text-neon-cyan mb-2 font-mono">NEURAL.STATUS</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-emerald rounded-full animate-pulse" />
              <span className="text-xs text-gray-300">AI Systems Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              <span className="text-xs text-gray-300">Data Streams Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
              <span className="text-xs text-gray-300">ML Models Running</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
