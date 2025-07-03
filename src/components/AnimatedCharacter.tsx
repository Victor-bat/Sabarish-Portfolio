import React, { useState, useEffect } from 'react';
import { MessageCircle, Code, Zap, Heart, Star, Coffee } from 'lucide-react';

interface AnimatedCharacterProps {
  currentSection: string;
}

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({ currentSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWinking, setIsWinking] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  // Messages for different sections
  const sectionMessages = {
    home: "Hi there! I'm your coding companion! 👋",
    about: "Let me tell you about Sabarish's journey! 🚀",
    skills: "Check out these awesome technical skills! 💻",
    certifications: "So many achievements to be proud of! 🏆",
    projects: "These projects showcase real expertise! ⚡",
    contact: "Ready to connect? Let's make something amazing! 📧"
  };

  // Character expressions based on section
  const getSectionIcon = () => {
    switch (currentSection) {
      case 'home': return <Zap className="w-4 h-4" />;
      case 'about': return <Heart className="w-4 h-4" />;
      case 'skills': return <Code className="w-4 h-4" />;
      case 'certifications': return <Star className="w-4 h-4" />;
      case 'projects': return <Coffee className="w-4 h-4" />;
      case 'contact': return <MessageCircle className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (!isWinking) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, [isWinking]);

  // Update message when section changes
  useEffect(() => {
    const message = sectionMessages[currentSection as keyof typeof sectionMessages] || sectionMessages.home;
    setCurrentMessage(message);
    setShowMessage(true);
    
    // Hide message after 3 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSection]);

  // Mouse tracking for character position and eye movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Character floating effect
      const x = (e.clientX - window.innerWidth / 2) * 0.02;
      const y = (e.clientY - window.innerHeight / 2) * 0.02;
      setPosition({ x, y });

      // Eye tracking effect (only when not winking)
      if (!isWinking) {
        const characterElement = document.getElementById('animated-character');
        if (characterElement) {
          const rect = characterElement.getBoundingClientRect();
          const characterCenterX = rect.left + rect.width / 2;
          const characterCenterY = rect.top + rect.height / 2;
          
          // Calculate angle from character center to mouse
          const deltaX = e.clientX - characterCenterX;
          const deltaY = e.clientY - characterCenterY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          
          // Limit eye movement range (max 4px from center)
          const maxEyeMovement = 4;
          const eyeX = Math.max(-maxEyeMovement, Math.min(maxEyeMovement, (deltaX / distance) * maxEyeMovement));
          const eyeY = Math.max(-maxEyeMovement, Math.min(maxEyeMovement, (deltaY / distance) * maxEyeMovement));
          
          setEyePosition({ 
            x: isNaN(eyeX) ? 0 : eyeX, 
            y: isNaN(eyeY) ? 0 : eyeY 
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isWinking]);

  const handleCharacterClick = () => {
    // Trigger wink animation
    setIsWinking(true);
    setShowMessage(true);
    
    // Reset wink after animation
    setTimeout(() => {
      setIsWinking(false);
    }, 800);
    
    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 pointer-events-none">
      {/* Speech Bubble */}
      {showMessage && (
        <div className="absolute bottom-full right-0 mb-4 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-3 rounded-2xl shadow-lg border border-white/20 max-w-xs animate-bounce-in">
            <p className="text-sm font-medium">{currentMessage}</p>
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/95"></div>
          </div>
        </div>
      )}

      {/* Character Container */}
      <div
        id="animated-character"
        className="relative pointer-events-auto cursor-pointer"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCharacterClick}
      >
        {/* Character Body */}
        <div
          className={`relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl transform transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-blue-500/50' : 'scale-100'
          } animate-float`}
        >
          {/* Character Face */}
          <div className="absolute inset-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
            {/* Left Eye */}
            <div className={`absolute top-3 left-2 w-4 h-4 bg-white rounded-full shadow-inner transition-all duration-300 ${
              isWinking ? 'scale-x-0 rotate-45' : 'scale-x-100 rotate-0'
            }`}>
              <div 
                className={`w-2.5 h-2.5 bg-gray-800 rounded-full transition-all duration-150 ${
                  isBlinking && !isWinking ? 'scale-y-0' : 'scale-y-100'
                }`}
                style={{
                  transform: `translate(${eyePosition.x + 2}px, ${eyePosition.y + 2}px)`,
                  transition: isBlinking ? 'transform 0.1s ease-out, scale 0.15s ease-out' : 'transform 0.1s ease-out'
                }}
              >
                {/* Eye shine */}
                <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
              </div>
            </div>
            
            {/* Right Eye */}
            <div className="absolute top-3 right-2 w-4 h-4 bg-white rounded-full shadow-inner">
              <div 
                className={`w-2.5 h-2.5 bg-gray-800 rounded-full transition-all duration-150 ${
                  isBlinking && !isWinking ? 'scale-y-0' : 'scale-y-100'
                }`}
                style={{
                  transform: `translate(${eyePosition.x + 2}px, ${eyePosition.y + 2}px)`,
                  transition: isBlinking ? 'transform 0.1s ease-out, scale 0.15s ease-out' : 'transform 0.1s ease-out'
                }}
              >
                {/* Eye shine */}
                <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
              </div>
            </div>
            
            {/* Eyebrows */}
            <div className={`absolute top-1.5 left-2.5 w-3 h-0.5 bg-white/60 rounded-full transition-all duration-300 ${
              isHovered ? 'rotate-12' : 'rotate-0'
            } ${isWinking ? '-rotate-45 scale-75' : ''}`}></div>
            <div className={`absolute top-1.5 right-2.5 w-3 h-0.5 bg-white/60 rounded-full transition-all duration-300 ${
              isHovered ? '-rotate-12' : 'rotate-0'
            }`}></div>
            
            {/* Simple Curved Mouth */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <svg 
                width="20" 
                height="8" 
                viewBox="0 0 20 8" 
                className={`transition-all duration-300 ${
                  isHovered || isWinking ? 'scale-110' : 'scale-100'
                }`}
              >
                <path 
                  d="M 2 2 Q 10 6 18 2" 
                  stroke={isHovered || isWinking ? "#fde047" : "#ffffff"} 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>
            </div>
            
            {/* Cheeks */}
            {(isHovered || isWinking) && (
              <>
                <div className={`absolute top-6 left-1 w-2 h-1.5 bg-pink-300/40 rounded-full transition-all duration-300 ${
                  isWinking ? 'bg-pink-400/60 scale-125' : ''
                }`}></div>
                <div className="absolute top-6 right-1 w-2 h-1.5 bg-pink-300/40 rounded-full"></div>
              </>
            )}
            
            {/* Section Icon */}
            <div className="absolute top-0.5 right-0.5 text-white/80">
              {getSectionIcon()}
            </div>
          </div>

          {/* Floating Particles */}
          {(isHovered || isWinking) && (
            <>
              <div className={`absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping ${
                isWinking ? 'bg-pink-400' : ''
              }`}></div>
              <div className={`absolute -top-1 -right-3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-200 ${
                isWinking ? 'bg-purple-400' : ''
              }`}></div>
              <div className={`absolute -bottom-2 -right-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-400 ${
                isWinking ? 'bg-yellow-400' : ''
              }`}></div>
              <div className={`absolute -bottom-1 -left-3 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-200 ${
                isWinking ? 'bg-blue-400' : ''
              }`}></div>
              
              {/* Extra wink particles */}
              {isWinking && (
                <>
                  <div className="absolute -top-3 left-0 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-100"></div>
                  <div className="absolute top-0 -left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping animation-delay-300"></div>
                  <div className="absolute -top-1 left-2 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
                </>
              )}
            </>
          )}

          {/* Glow Effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300 ${
            isHovered || isWinking ? 'opacity-30 animate-pulse' : ''
          } ${isWinking ? 'from-pink-400 to-yellow-400' : ''}`}></div>
        </div>

        {/* Character Shadow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full blur-sm animate-float-shadow"></div>
      </div>
    </div>
  );
};

export default AnimatedCharacter;