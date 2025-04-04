
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold mb-4">
              Dev<span className="text-blue-400">Portfolio</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Building exceptional digital experiences with React.js, Solid.js, and smart TV technologies.
              Specialized in ecommerce and OTT applications.
            </p>
            <div className="flex space-x-4">
              {['github', 'twitter', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">contact@yourdomain.com</p>
              <p className="text-gray-400">+1 (123) 456-7890</p>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            className="mt-4 sm:mt-0 text-gray-400 hover:text-white"
            onClick={scrollToTop}
          >
            <span className="mr-1">Back to top</span>
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
