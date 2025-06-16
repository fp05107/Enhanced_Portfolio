export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-neon-cyan animate-glow">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8 neon-border hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">
                <i className="fas fa-user-astronaut mr-3" />
                Personal Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Engineer specializing in React Native, Next.js, and Node.js. 
                Currently pursuing BCA with specialization in Cloud & Security at Amity University, 
                I combine academic knowledge with real-world experience to create innovative solutions.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 neon-border hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-neon-emerald mb-4">
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
                  <h4 className="font-semibold text-neon-cyan mb-2">Hobbies:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Cricket</li>
                    <li>• Astrology</li>
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
