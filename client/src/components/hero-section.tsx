export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    // Mock resume download
    console.log('Resume download initiated');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="text-sm font-mono text-neon-cyan mb-4 animate-fade-in">
              <span className="animate-glow">{'>'}</span> Full Stack Engineer
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Building</span>
              <span className="block text-neon-cyan animate-glow">Tomorrow's</span>
              <span className="block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Results-oriented software engineer focused on optimized solutions and high-quality code. 
              Seeking challenging opportunities to apply technical expertise and contribute to engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="glass-effect neon-border px-8 py-4 rounded-lg font-semibold hover:bg-neon-cyan hover:bg-opacity-20 transition-all duration-300 animate-pulse-neon"
              >
                <i className="fas fa-rocket mr-2" />
                View Projects
              </button>
              <button 
                onClick={downloadResume}
                className="glass-effect border border-white border-opacity-30 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                <i className="fas fa-download mr-2" />
                Download Resume
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="hologram-effect glass-effect rounded-3xl p-8 neon-border">
              <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 via-neon-purple/10 to-neon-emerald/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 text-neon-cyan">
                    <i className="fas fa-code animate-pulse" />
                  </div>
                  <div className="text-xl font-mono text-white">
                    {'{ "status": "coding" }'}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-neon-cyan bg-opacity-20 backdrop-blur-lg rounded-full p-3">
                  <i className="fas fa-code text-neon-cyan text-2xl" />
                </div>
                <div className="absolute bottom-4 left-4 bg-neon-purple bg-opacity-20 backdrop-blur-lg rounded-full p-3">
                  <i className="fab fa-react text-neon-cyan text-2xl animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
