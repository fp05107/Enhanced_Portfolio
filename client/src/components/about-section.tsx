export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-neon-cyan animate-glow">Neural</span> Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Bridging the realms of software engineering and artificial intelligence to create intelligent, scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8 neon-border hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">
                <i className="fas fa-brain mr-3" />
                AI Engineer & Data Scientist
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Dual expertise in software engineering and artificial intelligence, specializing in machine learning, 
                deep learning, computer vision, and NLP. Currently pursuing BCA with Cloud & Security specialization 
                at Amity University while building production-ready AI systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-neon-cyan bg-opacity-10 rounded-lg p-3">
                  <i className="fas fa-robot text-neon-cyan mb-2 block text-xl" />
                  <span className="text-sm text-gray-300">AI/ML Development</span>
                </div>
                <div className="bg-neon-purple bg-opacity-10 rounded-lg p-3">
                  <i className="fas fa-chart-line text-neon-purple mb-2 block text-xl" />
                  <span className="text-sm text-gray-300">Data Science</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 neon-border hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-neon-emerald mb-4">
                <i className="fas fa-code-branch mr-3" />
                Core Specializations
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-eye text-neon-cyan" />
                  <span className="text-gray-300">Computer Vision & Object Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-comments text-neon-purple" />
                  <span className="text-gray-300">Natural Language Processing & LLMs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-network-wired text-neon-emerald" />
                  <span className="text-gray-300">Deep Learning & Neural Networks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-database text-neon-magenta" />
                  <span className="text-gray-300">Data Engineering & MLOps</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 neon-border hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-neon-magenta mb-4">
                <i className="fas fa-globe mr-3" />
                Languages & Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-neon-cyan mb-2">Languages:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• English</li>
                    <li>• Odia</li>
                    <li>• Hindi</li>
                    <li>• Bengali</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neon-cyan mb-2">Interests:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Cricket</li>
                    <li>• Astrology</li>
                    <li>• AI Research</li>
                    <li>• Open Source</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-neon-purple mb-8">
              <i className="fas fa-timeline mr-3" />
              Journey Timeline
            </h3>
            
            <div className="timeline-item glass-effect rounded-xl p-6 ml-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-neon-cyan">Full Stack Engineer</h4>
                <span className="text-sm text-gray-400 font-mono">Nov 2023 - Present</span>
              </div>
              <p className="text-neon-emerald font-semibold mb-2">Poulima Infotech</p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Secure OTP + JWT authentication</li>
                <li>• Real-time data sync with offline support</li>
                <li>• Firebase push notifications & real-time updates</li>
                <li>• CCAvenue payment integration</li>
                <li>• Sentry, UXCam, Lighthouse optimization</li>
                <li>• Multi-language support implementation</li>
              </ul>
            </div>

            <div className="timeline-item glass-effect rounded-xl p-6 ml-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-neon-cyan">BCA Student</h4>
                <span className="text-sm text-gray-400 font-mono">May 2023 - Apr 2026</span>
              </div>
              <p className="text-neon-emerald font-semibold mb-2">Amity University</p>
              <p className="text-gray-300 text-sm">Specialization in Cloud & Security</p>
            </div>

            <div className="timeline-item glass-effect rounded-xl p-6 ml-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-neon-cyan">Certifications</h4>
                <span className="text-sm text-gray-400 font-mono">Ongoing</span>
              </div>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Advanced JavaScript</li>
                <li>• Full Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
