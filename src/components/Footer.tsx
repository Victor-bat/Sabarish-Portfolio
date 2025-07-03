import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            <p className="flex items-center">
              © 2025 Sabarish T S. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              and lots of chaos.
            </p>
          </div>
          <div className="text-sm text-gray-400">
            <p>Designed & Built by Sabarish T S</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;