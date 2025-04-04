
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Developed a full-featured online store with React.js and integrated payment gateways. Implemented product filtering, cart management, and user authentication features.',
      tags: ['React', 'Redux', 'Node.js', 'Stripe'],
      imageUrl: 'https://via.placeholder.com/600x400?text=E-Commerce+Project',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Samsung Smart TV Application',
      description: 'Built an OTT streaming application for Samsung Tizen platform with optimized UI for TV screens and remote control navigation. Implemented HLS video streaming with multi-quality support.',
      tags: ['Tizen', 'JavaScript', 'WebAPIs', 'HLS'],
      imageUrl: 'https://via.placeholder.com/600x400?text=TV+App',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'HbbTV Interactive Service',
      description: 'Developed an interactive TV service following the HbbTV standard. Created a seamless experience between broadcast content and interactive elements with focused navigation.',
      tags: ['HbbTV', 'JavaScript', 'CSS3', 'Broadcasting APIs'],
      imageUrl: 'https://via.placeholder.com/600x400?text=HbbTV+Service',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'WebOS Media Player',
      description: 'Custom media player for LG WebOS with enhanced playback controls, subtitle support, and multi-audio track selection. Optimized for WebOS TV platform capabilities.',
      tags: ['WebOS', 'JavaScript', 'Media APIs', 'WebSockets'],
      imageUrl: 'https://via.placeholder.com/600x400?text=Media+Player',
      demoUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in ecommerce and OTT application development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border-none shadow-lg animate-fade-in section-delay-1 bg-white dark:bg-gray-900">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <ExternalLink size={16} />
                    <a href={project.demoUrl} className="ml-1">Live Demo</a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Github size={16} />
                    <a href={project.codeUrl} className="ml-1">Source Code</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
