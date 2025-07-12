import React from 'react';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">PrimeEstate</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#properties" className="text-gray-600 hover:text-blue-600 transition-colors">Properties</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;