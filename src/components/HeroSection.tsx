
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-blue-600">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Rushikesh Susar
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Frontend Developer & Smart TV Specialist
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                I build exceptional digital experiences for ecommerce and OTT platforms,
                with expertise in React.js, Solid.js, and smart TV technologies including Tizen and WebOS.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center animate-fade-in">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-600 bg-opacity-10 flex items-center justify-center overflow-hidden">
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-blue-600 border-opacity-30 animate-pulse"></div>
              <div className="absolute h-full w-full bg-gradient-to-br from-blue-600/20 to-blue-600/5"></div>
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">RS</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
