import React, { useState } from 'react';
import { ExternalLink, Github, X, MapPin, Calendar, Building } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  company?: string;
  location?: string;
  period?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'CAN Data Decoder Application',
      description: 'Windows desktop application for decoding automotive CAN log data',
      longDescription: 'Developed a comprehensive Windows desktop application using C# and .NET Framework for decoding CAN (Controller Area Network) log data from automotive systems. The application features a sophisticated user interface to visualize and interpret raw CAN data into human-readable formats.',
      image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C#', '.NET Framework', 'WPF', 'CAN Protocol', 'Automotive Systems'],
      company: 'Abhijith Electronic Solutions',
      location: 'Simmakal Madurai',
      period: '12/2024 – 03/2025',
      features: [
        'Real-time CAN data decoding and visualization',
        'User-friendly interface for data interpretation',
        'Integration with embedded systems team',
        'Automotive diagnostics capabilities',
        'Software-hardware interfacing',
        'Performance optimization for real-time processing'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full Stack Development Internship and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-white mb-2">Full Stack Development Intern</h3>
                  <div className="flex flex-wrap items-center text-gray-300 mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="font-medium mr-4">{project.company}</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="mr-4">{project.location}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.period}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-blue-400 mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Full Stack Development Intern</h3>
                  <div className="flex flex-wrap items-center text-gray-300 mb-4">
                    <Building className="w-5 h-5 mr-2" />
                    <span className="font-medium mr-6">{selectedProject.company}</span>
                    <MapPin className="w-5 h-5 mr-1" />
                    <span className="mr-6">{selectedProject.location}</span>
                    <Calendar className="w-5 h-5 mr-1" />
                    <span>{selectedProject.period}</span>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-blue-400 mb-4">{selectedProject.title}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;