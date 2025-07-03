import React from 'react';
import { Code, Database, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Full Stack',
      description: 'Experience with both frontend and backend technologies'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Modern Web',
      description: 'Building responsive and performant web applications'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Player',
      description: 'Collaborative approach to problem-solving and development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated Full Stack Developer with a passion for creating innovative 
                digital solutions. With experience in both frontend and backend development, 
                I specialize in building scalable web applications using modern technologies 
                like React, Node.js, and Python.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My approach combines technical expertise with creative problem-solving, 
                ensuring that every project not only meets requirements but also delivers 
                an exceptional user experience. I'm constantly learning and adapting to 
                new technologies, including machine learning and AI, to stay at the forefront of web development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                React.js
              </span>
              <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">
                Python
              </span>
              <span className="px-4 py-2 bg-red-600/20 text-red-300 rounded-full text-sm">
                Machine Learning
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;