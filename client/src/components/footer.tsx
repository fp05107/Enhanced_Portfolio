export function Footer() {
  return (
    <footer className="py-12 border-t border-white border-opacity-20 bg-dark-bg text-white font-inter">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold font-mono mb-4">
            <span className="text-neon-cyan animate-glow">{'</>'}</span>
            <span className="ml-2">Subham Sahoo</span>
          </div>
          <p className="text-gray-400 mb-6" >Full Stack Engineer • Building Tomorrow's Solutions</p>

          {/* <p className="text-white mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded shadow-lg inline-block">
            Full Stack Engineer • Building Tomorrow's Solutions
          </p> */}

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/subham-sahoo" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
              <i className="fab fa-github text-2xl" />
            </a>
            <a href="https://linkedin.com/in/subham-sahoo" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
              <i className="fab fa-linkedin text-2xl" />
            </a>
            <a href="https://twitter.com/subham-sahoo" className="text-gray-400 hover:text-neon-emerald transition-colors duration-300">
              <i className="fab fa-twitter text-2xl" />
            </a>
            <a href="mailto:subham.sahoo@example.com" className="text-gray-400 hover:text-neon-magenta transition-colors duration-300">
              <i className="fas fa-envelope text-2xl" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Subham Sahoo. Crafted with
            <span className="text-neon-magenta"> ♥</span> and lots of
            <span className="text-neon-cyan"> code</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
