import { useState } from 'react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Labs' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'nlp', label: 'NLP/LLM' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Computer Vision Object Detection',
      description: 'Advanced YOLOv9 implementation for real-time object detection with Detectron2 integration and Roboflow dataset management.',
      category: ['ai', 'computer-vision'],
      tags: ['YOLOv9', 'Detectron2', 'OpenCV', 'Roboflow'],
      tagColors: ['neon-cyan', 'neon-emerald', 'neon-purple', 'neon-gold'],
      tech: 'Computer Vision',
      techColor: 'neon-cyan',
      primaryColor: 'neon-cyan',
      icon: 'fas fa-eye',
    },
    {
      id: 2,
      title: 'NLP Sentiment Analysis Engine',
      description: 'Multi-model sentiment analysis using NLTK, spaCy, and Hugging Face transformers with LangChain integration for LLM orchestration.',
      category: ['ai', 'nlp'],
      tags: ['NLTK', 'spaCy', 'Hugging Face', 'LangChain'],
      tagColors: ['neon-purple', 'neon-magenta', 'neon-emerald', 'neon-gold'],
      tech: 'NLP/LLM',
      techColor: 'neon-purple',
      primaryColor: 'neon-purple',
      icon: 'fas fa-comments',
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      description: 'ML-powered analytics platform using scikit-learn, XGBoost, and CatBoost with interactive Plotly visualizations and Streamlit deployment.',
      category: ['ml', 'data-science'],
      tags: ['Scikit-learn', 'XGBoost', 'Plotly', 'Streamlit'],
      tagColors: ['neon-emerald', 'neon-gold', 'neon-magenta', 'neon-cyan'],
      tech: 'Machine Learning',
      techColor: 'neon-emerald',
      primaryColor: 'neon-emerald',
      icon: 'fas fa-chart-line',
    },
    {
      id: 4,
      title: 'Deep Learning Neural Networks',
      description: 'Advanced neural architectures using TensorFlow, Keras, and PyTorch for image classification and generative AI applications.',
      category: ['ai', 'deep-learning'],
      tags: ['TensorFlow', 'PyTorch', 'Keras', 'Neural Networks'],
      tagColors: ['neon-cyan', 'neon-magenta', 'neon-purple', 'neon-emerald'],
      tech: 'Deep Learning',
      techColor: 'neon-magenta',
      primaryColor: 'neon-magenta',
      icon: 'fas fa-brain',
    },
    {
      id: 5,
      title: 'Intelligent Data Pipeline',
      description: 'End-to-end data processing pipeline with Pandas, NumPy analysis, automated feature engineering, and ChromaDB vector storage.',
      category: ['data-science', 'fullstack'],
      tags: ['Pandas', 'NumPy', 'ChromaDB', 'Pipeline'],
      tagColors: ['neon-cyan', 'neon-purple', 'neon-gold', 'neon-emerald'],
      tech: 'Data Science',
      techColor: 'neon-gold',
      primaryColor: 'neon-gold',
      icon: 'fas fa-database',
    },
    {
      id: 6,
      title: 'Generative AI Application',
      description: 'Full-stack generative AI platform with GPT integration, LlamaIndex for RAG, ChromaDB vector search, and Flask API backend.',
      category: ['ai', 'fullstack'],
      tags: ['GPTs', 'LlamaIndex', 'ChromaDB', 'Flask'],
      tagColors: ['neon-emerald', 'neon-cyan', 'neon-purple', 'neon-magenta'],
      tech: 'Generative AI',
      techColor: 'neon-emerald',
      primaryColor: 'neon-emerald',
      icon: 'fas fa-robot',
    },
    {
      id: 7,
      title: 'ML Model Deployment Platform',
      description: 'Production-ready ML deployment using Streamlit, Flask APIs, with comprehensive model monitoring and A/B testing capabilities.',
      category: ['ml', 'fullstack'],
      tags: ['Streamlit', 'Flask', 'Model Deploy', 'A/B Testing'],
      tagColors: ['neon-purple', 'neon-magenta', 'neon-cyan', 'neon-gold'],
      tech: 'MLOps',
      techColor: 'neon-purple',
      primaryColor: 'neon-purple',
      icon: 'fas fa-rocket',
    },
    {
      id: 8,
      title: 'Real-time Data Visualization',
      description: 'Interactive data visualization platform using Matplotlib, Seaborn, Bokeh with real-time updates and collaborative Jupyter notebook integration.',
      category: ['data-science', 'web'],
      tags: ['Matplotlib', 'Seaborn', 'Bokeh', 'Jupyter'],
      tagColors: ['neon-emerald', 'neon-gold', 'neon-cyan', 'neon-purple'],
      tech: 'Data Viz',
      techColor: 'neon-emerald',
      primaryColor: 'neon-emerald',
      icon: 'fas fa-chart-bar',
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
            <span className="text-neon-emerald animate-glow">AI/ML</span> Research Labs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-emerald to-neon-magenta mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cutting-edge artificial intelligence and machine learning projects showcasing expertise across computer vision, NLP, deep learning, and data science
          </p>
          
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
                <div className="aspect-video bg-gradient-to-br from-dark-secondary via-dark-tertiary to-dark-bg flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className={`text-6xl text-${project.primaryColor} animate-pulse`}>
                    <i className={project.icon || "fas fa-code"} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                  <div className={`absolute top-4 right-4 bg-${project.techColor} bg-opacity-80 px-3 py-1 rounded-full text-xs font-bold text-dark-bg`}>
                    {project.tech}
                  </div>
                  
                  {/* Neural network animation overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="relative w-full h-full">
                      <div className={`absolute top-4 left-4 w-3 h-3 bg-${project.primaryColor} rounded-full animate-ping opacity-75`}></div>
                      <div className={`absolute bottom-6 right-6 w-2 h-2 bg-${project.primaryColor} rounded-full animate-pulse opacity-60`}></div>
                      <div className={`absolute top-1/2 left-6 w-1 h-1 bg-${project.primaryColor} rounded-full animate-bounce opacity-50`}></div>
                    </div>
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
