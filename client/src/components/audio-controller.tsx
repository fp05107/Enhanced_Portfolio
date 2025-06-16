import { useState } from 'react';

export function AudioController() {
  const [audioEnabled, setAudioEnabled] = useState(true);

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    
    // Simulate audio feedback
    if (!audioEnabled) {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      } catch (error) {
        console.log('Audio context not available');
      }
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={toggleAudio}
        className={`glass-effect rounded-full p-3 hover:bg-neon-cyan hover:bg-opacity-20 transition-all duration-300 ${
          audioEnabled ? 'neon-border' : 'border border-gray-600'
        }`}
      >
        <div className="audio-visualizer" style={{ opacity: audioEnabled ? 1 : 0.3 }}>
          <div className="audio-bar" style={{ animationDelay: '0s' }} />
          <div className="audio-bar" style={{ animationDelay: '0.1s' }} />
          <div className="audio-bar" style={{ animationDelay: '0.2s' }} />
          <div className="audio-bar" style={{ animationDelay: '0.3s' }} />
          <div className="audio-bar" style={{ animationDelay: '0.4s' }} />
        </div>
      </button>
    </div>
  );
}
