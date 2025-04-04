
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', level: 95 },
    { name: 'Solid.js', level: 90 },
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Redux/Context API', level: 85 },
    { name: 'Responsive Design', level: 90 },
  ];

  const tvPlatformSkills = [
    { name: 'Tizen SDK', level: 85 },
    { name: 'WebOS SDK', level: 80 },
    { name: 'TV App UX Design', level: 85 },
    { name: 'Remote-First Navigation', level: 90 },
    { name: 'Media Playback APIs', level: 85 },
    { name: 'Performance Optimization', level: 80 },
  ];

  const otherSkills = [
    'Git & Version Control',
    'CI/CD Pipelines',
    'UI/UX Design Principles',
    'REST API Integration',
    'GraphQL',
    'Jest & Testing Library',
    'Webpack/Vite',
    'PWA Development',
    'Agile Methodology',
    'WebRTC',
    'Streaming Protocols (HLS, DASH)',
    'Microservices Architecture',
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My expertise spans web development and smart TV platforms, with specialized knowledge in ecommerce and OTT applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in section-delay-1">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in section-delay-2">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Smart TV Development
            </h3>
            <div className="space-y-6">
              {tvPlatformSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in section-delay-3">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
            Additional Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <Card key={index} className="bg-gray-50 dark:bg-gray-800 border-none shadow-sm">
                <CardContent className="p-4 flex items-center justify-center h-full">
                  <span className="text-gray-700 dark:text-gray-300 text-center">{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
