import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Show success message
      console.log('Message sent successfully!');
    }, 2000);
  };

  const downloadResume = () => {
    console.log('Resume download initiated');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-neon-magenta animate-glow">Connect</span> API
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-magenta to-neon-cyan mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI/ML projects? Let's build the future of intelligent applications together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 neon-border">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Let's Build Something Amazing</h3>
              <p className="text-gray-300 mb-6">
                Ready to turn your ideas into reality? I'm always excited to work on innovative projects 
                and collaborate with passionate individuals and teams.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:subham.sahoo@example.com" className="flex items-center text-gray-300 hover:text-neon-cyan transition-colors duration-300">
                  <i className="fas fa-envelope text-neon-cyan mr-4 text-xl" />
                  <span>subham.sahoo@example.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-neon-emerald transition-colors duration-300">
                  <i className="fas fa-phone text-neon-emerald mr-4 text-xl" />
                  <span>+123 456 7890</span>
                </a>
                <a href="https://linkedin.com/in/subham-sahoo" className="flex items-center text-gray-300 hover:text-neon-purple transition-colors duration-300">
                  <i className="fab fa-linkedin text-neon-purple mr-4 text-xl" />
                  <span>linkedin.com/in/subham-sahoo</span>
                </a>
                <a href="https://github.com/subham-sahoo" className="flex items-center text-gray-300 hover:text-neon-gold transition-colors duration-300">
                  <i className="fab fa-github text-neon-gold mr-4 text-xl" />
                  <span>github.com/subham-sahoo</span>
                </a>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 neon-border">
              <h4 className="text-xl font-bold text-neon-emerald mb-4">
                <i className="fas fa-download mr-3" />
                Resume Download
              </h4>
              <p className="text-gray-300 mb-4">Download my complete resume with detailed project information and technical skills.</p>
              <button 
                onClick={downloadResume}
                className="glass-effect neon-border px-6 py-3 rounded-lg font-semibold hover:bg-neon-emerald hover:bg-opacity-20 transition-all duration-300 w-full"
              >
                <i className="fas fa-file-pdf mr-2" />
                Download Resume (PDF)
              </button>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neon-cyan mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-dark-secondary bg-opacity-50 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neon-cyan mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-dark-secondary bg-opacity-50 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neon-cyan mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-dark-secondary bg-opacity-50 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neon-cyan mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-dark-secondary bg-opacity-50 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="glass-effect neon-border px-8 py-4 rounded-lg font-semibold hover:bg-neon-cyan hover:bg-opacity-20 transition-all duration-300 w-full animate-pulse-neon disabled:opacity-50"
              >
                <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} mr-2`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
