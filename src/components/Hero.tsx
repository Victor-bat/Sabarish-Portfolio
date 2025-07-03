import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (isTyping) {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            index = 0;
            setText('');
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isTyping]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sabarish</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                {text}<span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            Specialized in React, Node.js, and machine learning with a keen eye for user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/Victor-bat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabarish-t-s-17bb6129b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:sabarish33ss@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;