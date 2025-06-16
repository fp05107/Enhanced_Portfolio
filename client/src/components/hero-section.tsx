export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    console.log('Resume download initiated');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="text-sm font-mono text-neon-cyan mb-4 animate-fade-in">
              <span className="animate-glow">{'>'}</span> Software Engineer × Data Scientist
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Engineering</span>
              <span className="block text-neon-cyan animate-glow">Intelligent</span>
              <span className="block text-neon-purple">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Bridging the gap between software engineering and artificial intelligence. 
              Specialized in building ML-powered applications, data pipelines, and intelligent systems 
              that transform raw data into actionable insights.
            </p>
            
            {/* AI Status Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-effect rounded-lg p-3 neon-border">
                <div className="text-neon-emerald text-2xl mb-1">
                  <i className="fas fa-brain" />
                </div>
                <div className="text-xs text-gray-300">AI/ML</div>
              </div>
              <div className="glass-effect rounded-lg p-3 neon-border">
                <div className="text-neon-purple text-2xl mb-1">
                  <i className="fas fa-chart-line" />
                </div>
                <div className="text-xs text-gray-300">Data Science</div>
              </div>
              <div className="glass-effect rounded-lg p-3 neon-border">
                <div className="text-neon-cyan text-2xl mb-1">
                  <i className="fas fa-robot" />
                </div>
                <div className="text-xs text-gray-300">Deep Learning</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="glass-effect neon-border px-8 py-4 rounded-lg font-semibold hover:bg-neon-cyan hover:bg-opacity-20 transition-all duration-300 animate-pulse-neon"
              >
                <i className="fas fa-flask mr-2" />
                Explore Labs
              </button>
              <button 
                onClick={downloadResume}
                className="glass-effect border border-white border-opacity-30 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                <i className="fas fa-file-code mr-2" />
                Neural Resume
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="hologram-effect glass-effect rounded-3xl p-8 neon-border">
              <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 via-neon-purple/10 to-neon-emerald/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {/* Neural Network Visualization */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative">
                    {/* Central AI Core */}
                    <div className="w-20 h-20 bg-neon-cyan bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-lg border border-neon-cyan animate-pulse-neon">
                      <i className="fas fa-brain text-neon-cyan text-3xl animate-pulse" />
                    </div>
                    
                    {/* Orbiting Elements */}
                    <div className="absolute inset-0 animate-rotate-slow">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-purple bg-opacity-30 rounded-full flex items-center justify-center">
                        <i className="fab fa-python text-neon-purple text-xs" />
                      </div>
                      <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-6 h-6 bg-neon-emerald bg-opacity-30 rounded-full flex items-center justify-center">
                        <i className="fas fa-chart-bar text-neon-emerald text-xs" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-magenta bg-opacity-30 rounded-full flex items-center justify-center">
                        <i className="fas fa-database text-neon-magenta text-xs" />
                      </div>
                      <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-6 h-6 bg-neon-gold bg-opacity-30 rounded-full flex items-center justify-center">
                        <i className="fas fa-cog text-neon-gold text-xs animate-spin" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="absolute top-4 right-4 bg-neon-emerald bg-opacity-20 backdrop-blur-lg rounded-full px-3 py-1">
                  <span className="text-neon-emerald text-xs font-mono">ML_ACTIVE</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-neon-purple bg-opacity-20 backdrop-blur-lg rounded-full px-3 py-1">
                  <span className="text-neon-purple text-xs font-mono">AI_READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
