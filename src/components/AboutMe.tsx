
import { Code, ShoppingBag, Tv, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a specialized frontend developer with years of experience building modern web applications
            and smart TV platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-in section-delay-1">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate frontend developer with a deep understanding of modern JavaScript frameworks
              and a specialization in building ecommerce and OTT applications. With expertise in React.js and Solid.js, 
              I develop highly optimized and responsive applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              My journey in development began with web applications, but I've since expanded my expertise to include
              smart TV platforms like Tizen and WebOS, creating applications that seamlessly bridge traditional web and TV interfaces.
            </p>
          </div>

          <div className="animate-fade-in section-delay-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What I Do
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I specialize in creating responsive, high-performance applications with modern frontend frameworks.
              My work includes developing complex ecommerce platforms with optimized checkout flows and building
              OTT applications that provide seamless streaming experiences across devices.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Additionally, I develop custom applications for smart TV platforms, leveraging the unique capabilities of
              Tizen and WebOS to create intuitive interfaces optimized for the big screen and remote-based navigation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Frontend Development',
              description: 'React.js, Solid.js, and modern JavaScript',
              icon: <Code className="w-10 h-10 text-blue-600" />,
            },
            {
              title: 'Ecommerce Solutions',
              description: 'Custom stores with optimized conversion flows',
              icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
            },
            {
              title: 'OTT Applications',
              description: 'Streaming platforms with robust playback features',
              icon: <Tv className="w-10 h-10 text-blue-600" />,
            },
            {
              title: 'Smart TV Apps',
              description: 'Tizen and WebOS optimized experiences',
              icon: <Globe className="w-10 h-10 text-blue-600" />,
            },
          ].map((item, index) => (
            <Card key={index} className="animate-fade-in section-delay-1 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border-none">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
