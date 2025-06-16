import { useState } from 'react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Real-time Sync App',
      description: 'Mobile application with real-time data synchronization, offline support, and Firebase integration.',
      category: ['mobile', 'fullstack'],
      tags: ['React Native', 'Firebase', 'Offline Support'],
      tagColors: ['neon-purple', 'neon-emerald', 'neon-cyan'],
      tech: 'React Native',
      techColor: 'neon-cyan',
      primaryColor: 'neon-cyan',
    },
    {
      id: 2,
      title: 'Payment Gateway Integration',
      description: 'Secure e-commerce platform with CCAvenue payment integration and multi-language support.',
      category: ['web', 'fullstack'],
      tags: ['Next.js', 'CCAvenue', 'Multi-language'],
      tagColors: ['neon-emerald', 'neon-magenta', 'neon-purple'],
      tech: 'Next.js',
      techColor: 'neon-emerald',
      primaryColor: 'neon-emerald',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Performance monitoring dashboard with Sentry integration, UXCam analytics, and Lighthouse optimization.',
      category: ['web', 'fullstack'],
      tags: ['React.js', 'Sentry', 'UXCam'],
      tagColors: ['neon-purple', 'neon-cyan', 'neon-gold'],
      tech: 'React.js',
      techColor: 'neon-purple',
      primaryColor: 'neon-purple',
    },
    {
      id: 4,
      title: 'Secure Auth System',
      description: 'Advanced authentication system with OTP verification, JWT tokens, and push notifications.',
      category: ['mobile'],
      tags: ['JWT', 'OTP', 'Push Notifications'],
      tagColors: ['neon-magenta', 'neon-cyan', 'neon-emerald'],
      tech: 'Security',
      techColor: 'neon-magenta',
      primaryColor: 'neon-magenta',
    },
    {
      id: 5,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture using AWS services with automated deployment and monitoring.',
      category: ['web'],
      tags: ['AWS', 'Node.js', 'MongoDB'],
      tagColors: ['neon-gold', 'neon-emerald', 'neon-cyan'],
      tech: 'AWS',
      techColor: 'neon-gold',
      primaryColor: 'neon-gold',
    },
    {
      id: 6,
      title: 'Data Visualization Platform',
      description: 'Complete full-stack solution with advanced data visualization, real-time updates, and performance optimization.',
      category: ['fullstack'],
      tags: ['React.js', 'Node.js', 'D3.js'],
      tagColors: ['neon-cyan', 'neon-emerald', 'neon-purple'],
      tech: 'Full Stack',
      techColor: 'neon-cyan',
      primaryColor: 'neon-cyan',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-neon-emerald animate-glow">Featured</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-emerald to-neon-magenta mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'glass-effect neon-border'
                    : 'glass-effect border border-white border-opacity-30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projectsGrid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-effect rounded-2xl overflow-hidden neon-border group hover:scale-105 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 flex items-center justify-center relative">
                  <div className="text-6xl text-gray-400">
                    <i className="fas fa-code" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                  <div className={`absolute top-4 right-4 bg-${project.techColor} bg-opacity-80 px-3 py-1 rounded-full text-xs font-bold`}>
                    {project.tech}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold text-${project.primaryColor} mb-2`}>{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`bg-${project.tagColors[index]} bg-opacity-20 text-${project.tagColors[index]} px-2 py-1 rounded text-xs`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button className={`text-${project.primaryColor} hover:text-white transition-colors duration-300`}>
                    <i className="fas fa-external-link-alt mr-2" />Live Demo
                  </button>
                  <button className={`text-gray-400 hover:text-${project.primaryColor} transition-colors duration-300`}>
                    <i className="fab fa-github mr-2" />Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass-effect neon-border px-8 py-4 rounded-lg font-semibold hover:bg-neon-cyan hover:bg-opacity-20 transition-all duration-300">
            <i className="fas fa-plus mr-2" />
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
