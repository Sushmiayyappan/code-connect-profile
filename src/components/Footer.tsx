
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sushmitha A</h3>
            <p className="text-gray-400">
              Electronics & Communication Engineering Student
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:sushmithaayappan27@gmail.com"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sushmitha-a"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sushmitha A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
