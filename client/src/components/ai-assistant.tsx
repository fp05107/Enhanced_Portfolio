import { useState, useEffect } from 'react';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello! I\'m Subham\'s AI assistant. Ask me about his expertise in ML, data science, or any projects!' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const quickQuestions = [
    'What AI/ML projects has Subham worked on?',
    'Tell me about his data science skills',
    'What programming languages does he use?',
    'How can I collaborate with him?'
  ];

  const responses = {
    'ai': 'Subham specializes in computer vision, NLP, deep learning, and generative AI. He has experience with TensorFlow, PyTorch, and Hugging Face.',
    'ml': 'His ML expertise includes scikit-learn, XGBoost, CatBoost, and deployment using Streamlit and Flask.',
    'data': 'Expert in data analysis with Pandas, NumPy, visualization with Matplotlib, Plotly, and Jupyter notebooks.',
    'projects': 'His portfolio includes object detection systems, sentiment analysis engines, predictive analytics dashboards, and generative AI applications.',
    'contact': 'You can reach out through the contact form below or connect on LinkedIn for collaboration opportunities.'
  };

  const handleQuickQuestion = (question: string) => {
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    
    setTimeout(() => {
      let response = 'Thanks for your question! ';
      if (question.toLowerCase().includes('ai') || question.toLowerCase().includes('ml')) {
        response += responses.ai;
      } else if (question.toLowerCase().includes('data')) {
        response += responses.data;
      } else if (question.toLowerCase().includes('project')) {
        response += responses.projects;
      } else if (question.toLowerCase().includes('collaborate')) {
        response += responses.contact;
      } else {
        response += 'Subham is a versatile AI engineer and data scientist with expertise across machine learning, deep learning, computer vision, and NLP.';
      }
      
      setMessages(prev => [...prev, { type: 'ai', text: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* AI Assistant Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full glass-effect neon-border flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse-neon"
      >
        <i className="fas fa-robot text-2xl text-white animate-pulse" />
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-80 h-96 glass-effect rounded-2xl neon-border overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-neon-purple to-neon-cyan p-4 text-center">
            <h3 className="font-bold text-white">AI Assistant</h3>
            <p className="text-xs text-white opacity-80">Powered by Neural Networks</p>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-neon-cyan bg-opacity-20 text-white'
                      : 'bg-dark-secondary text-gray-300'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white border-opacity-20">
            <div className="grid grid-cols-1 gap-2 mb-3">
              {quickQuestions.slice(0, 2).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs bg-neon-purple bg-opacity-20 hover:bg-opacity-30 text-neon-purple px-3 py-2 rounded-full transition-all duration-300"
                >
                  {question}
                </button>
              ))}
            </div>
            <div className="text-xs text-center text-gray-400">
              Click questions above or explore the portfolio!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}