import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gmdLogo from '../assets/GMDLOGOFINAL-01.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Casos de Éxito', href: '/casos-de-exito' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={gmdLogo} 
              alt="GMD Mechanical Design" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-600 ${
                  location.pathname === item.href
                    ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/contacto"
              className="bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-cyan-700 transition-colors duration-200"
            >
              Hablemos de tu idea
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-cyan-600 ${
                    location.pathname === item.href
                      ? 'text-cyan-600 bg-cyan-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="block w-full text-center bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-cyan-700 transition-colors duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Hablemos de tu idea
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

