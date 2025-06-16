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

  const skillCategories = [
    {
      title: 'Core Programming',
      skills: [
        { name: 'Python', icon: 'fab fa-python', color: 'neon-cyan', description: 'Primary language for AI/ML development', animate: 'animate-pulse' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: 'neon-gold', description: 'Modern ES6+ & Node.js' },
        { name: 'React.js', icon: 'fab fa-react', color: 'neon-purple', description: 'Component-based UI development', animate: 'animate-spin' },
        { name: 'Next.js', icon: 'fas fa-rocket', color: 'neon-emerald', description: 'Full-stack React framework' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', icon: 'fas fa-brain', color: 'neon-cyan', description: 'Deep learning framework' },
        { name: 'PyTorch', icon: 'fas fa-fire', color: 'neon-magenta', description: 'Neural network development' },
        { name: 'Scikit-learn', icon: 'fas fa-robot', color: 'neon-emerald', description: 'Machine learning toolkit' },
        { name: 'Keras', icon: 'fas fa-layer-group', color: 'neon-purple', description: 'High-level neural networks' },
        { name: 'XGBoost', icon: 'fas fa-chart-line', color: 'neon-gold', description: 'Gradient boosting framework' },
        { name: 'Hugging Face', icon: 'fas fa-smile', color: 'neon-cyan', description: 'NLP transformers & models' },
      ]
    },
    {
      title: 'Computer Vision & NLP',
      skills: [
        { name: 'OpenCV', icon: 'fas fa-eye', color: 'neon-emerald', description: 'Computer vision library' },
        { name: 'YOLO', icon: 'fas fa-crosshairs', color: 'neon-cyan', description: 'Object detection models' },
        { name: 'NLTK', icon: 'fas fa-comments', color: 'neon-purple', description: 'Natural language processing' },
        { name: 'spaCy', icon: 'fas fa-language', color: 'neon-magenta', description: 'Advanced NLP toolkit' },
        { name: 'LangChain', icon: 'fas fa-link', color: 'neon-gold', description: 'LLM application framework' },
        { name: 'Detectron2', icon: 'fas fa-search', color: 'neon-emerald', description: 'Object detection platform' },
      ]
    },
    {
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Pandas', icon: 'fas fa-table', color: 'neon-cyan', description: 'Data manipulation & analysis' },
        { name: 'NumPy', icon: 'fas fa-calculator', color: 'neon-purple', description: 'Numerical computing' },
        { name: 'Matplotlib', icon: 'fas fa-chart-bar', color: 'neon-emerald', description: 'Data visualization' },
        { name: 'Plotly', icon: 'fas fa-chart-pie', color: 'neon-magenta', description: 'Interactive visualizations' },
        { name: 'Seaborn', icon: 'fas fa-palette', color: 'neon-gold', description: 'Statistical visualization' },
        { name: 'Jupyter', icon: 'fas fa-book', color: 'neon-cyan', description: 'Interactive notebooks' },
      ]
    },
    {
      title: 'Development Tools & Cloud',
      skills: [
        { name: 'PyCharm', icon: 'fas fa-code', color: 'neon-emerald', description: 'Python IDE' },
        { name: 'VS Code', icon: 'fas fa-laptop-code', color: 'neon-cyan', description: 'Versatile code editor' },
        { name: 'Google Colab', icon: 'fab fa-google', color: 'neon-gold', description: 'Cloud-based notebooks' },
        { name: 'Streamlit', icon: 'fas fa-stream', color: 'neon-purple', description: 'ML app deployment' },
        { name: 'Flask', icon: 'fas fa-flask', color: 'neon-magenta', description: 'Python web framework' },
        { name: 'Postman', icon: 'fas fa-paper-plane', color: 'neon-emerald', description: 'API testing tool' },
      ]
    },
    {
      title: 'Databases & Infrastructure',
      skills: [
        { name: 'MongoDB', icon: 'fas fa-database', color: 'neon-emerald', description: 'NoSQL database' },
        { name: 'MySQL', icon: 'fas fa-server', color: 'neon-cyan', description: 'Relational database' },
        { name: 'ChromaDB', icon: 'fas fa-vector-square', color: 'neon-purple', description: 'Vector database for AI' },
        { name: 'AWS', icon: 'fab fa-aws', color: 'neon-gold', description: 'Cloud infrastructure' },
        { name: 'Firebase', icon: 'fas fa-fire', color: 'neon-magenta', description: 'Backend-as-a-Service' },
        { name: 'Roboflow', icon: 'fas fa-robot', color: 'neon-cyan', description: 'Computer vision platform' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-neon-purple animate-glow">Neural</span> Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-emerald mx-auto mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across the full AI/ML development lifecycle, from data collection to deployment
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="glass-effect rounded-3xl p-8 neon-border">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
                <i className="fas fa-layer-group mr-3" />
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-orb glass-effect rounded-xl p-4 neon-border hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${(categoryIndex * 6 + index) * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-${skill.color} bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}>
                        <i className={`${skill.icon} text-xl text-${skill.color} ${skill.animate || ''}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-${skill.color} mb-1`}>{skill.name}</h4>
                        <p className="text-xs text-gray-400">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Proficiency Radar */}
        <div className="mt-16 glass-effect rounded-3xl p-8 neon-border">
          <h3 className="text-2xl font-bold text-neon-gold mb-6 text-center">
            <i className="fas fa-radar-chart mr-3" />
            AI/ML Expertise Levels
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { domain: 'Machine Learning', level: 95, color: 'neon-cyan' },
              { domain: 'Deep Learning', level: 90, color: 'neon-purple' },
              { domain: 'Computer Vision', level: 88, color: 'neon-emerald' },
              { domain: 'NLP & LLMs', level: 85, color: 'neon-magenta' },
            ].map((item) => (
              <div key={item.domain} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={`hsl(var(--${item.color}))`}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.level / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-bold text-${item.color}`}>{item.level}%</span>
                  </div>
                </div>
                <h4 className={`font-semibold text-${item.color}`}>{item.domain}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
