import React from 'react';
import { Award, Calendar, Building, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development Specialization',
      organization: 'Abhijith Electronic Solutions',
      period: '2024-2025',
      type: 'certification',
      description: 'Comprehensive training in modern web development technologies including frontend and backend development.'
    },
    {
      title: 'Machine Learning with Digital Image Processing',
      organization: 'Abhijith Electronic Solutions',
      period: '2025',
      type: 'certification',
      description: 'Advanced course covering machine learning algorithms and their application in digital image processing.'
    }
  ];

  const achievements = [
    {
      title: 'First Prize – Paper Presentation at Tech Utsav\'25',
      organization: 'Elysium, Thiagarajar College of Engineering',
      period: '2025',
      type: 'achievement',
      description: 'Recognized for outstanding technical presentation and innovative research work.'
    },
    {
      title: 'First Prize – Paper Presentation at Ideathon 2025',
      organization: 'Kalasalingam Deemed to be University',
      period: '2025',
      type: 'achievement',
      description: 'Won first place for innovative ideas and technical excellence in competitive presentation.'
    },
    {
      title: 'Second Prize – On-Spot Hackathon',
      organization: 'Vinsup Infotech',
      period: '2023',
      type: 'achievement',
      description: 'Secured second position in competitive hackathon demonstrating rapid problem-solving skills.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Design',
      institution: 'Sethu Institute of Technology',
      period: 'Pursuing',
      type: 'education',
      description: 'Focused on computer science fundamentals, software engineering, and modern design principles.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications, academic achievements, and recognition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-2 text-blue-400" />
              Certifications
            </h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
                      <span className="text-blue-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.period}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{cert.organization}</span>
                    </div>
                    <p className="text-gray-300">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <h3 className="text-2xl font-semibold text-white mb-8 mt-12 flex items-center">
              <Building className="w-6 h-6 mr-2 text-green-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-green-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <span className="text-green-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-gray-300 mb-2">
                      <span className="font-medium">{edu.field}</span>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <Building className="w-4 h-4 mr-2" />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
              Achievements
            </h3>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-yellow-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-white">{achievement.title}</h4>
                      <span className="text-yellow-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {achievement.period}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{achievement.organization}</span>
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;