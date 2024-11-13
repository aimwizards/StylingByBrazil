import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scissors, Star, Eye, Zap, Sparkles, Phone, Instagram, Facebook } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Hem', path: '/', icon: Star },
    { name: 'Frisör', path: '/frisor', icon: Scissors },
    { name: 'Keratin', path: '/keratin', icon: Sparkles },
    { name: 'Ögon & Bryn', path: '/ogon-bryn', icon: Eye },
    { name: 'Vaxning', path: '/vaxning', icon: Star },
    { name: 'Laser', path: '/laser', icon: Zap },
    { name: 'Behandlingar', path: '/behandlingar', icon: Sparkles },
  ];

  return (
    <header 
      className={`fixed w-full transition-all duration-500 z-50 
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-gradient-to-b from-black/50 to-transparent'}`}
    >
      <div className="absolute inset-x-0 -bottom-20 bg-gradient-to-b from-black/10 to-transparent h-20 pointer-events-none"></div>
      <nav className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className={`text-2xl font-light tracking-wider transition-colors duration-300
              ${scrolled ? 'gradient-text-primary' : 'text-white'}`}
          >
            STYLING<span className="font-semibold">BY</span>BRAZIL
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-1 transition-all duration-300 hover:scale-105
                  ${scrolled 
                    ? 'text-neutral-600 hover:text-rose-500' 
                    : 'text-white/90 hover:text-white'}`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}

            <div className="h-6 w-px bg-current opacity-20"></div>

            <div className="flex items-center gap-4">
              <a
                href="tel:+46123456789"
                className={`transition-all duration-300 hover:scale-110
                  ${scrolled ? 'text-lavender-500 hover:text-lavender-600' : 'text-white/90 hover:text-white'}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:scale-110
                  ${scrolled ? 'text-rose-400 hover:text-rose-500' : 'text-white/90 hover:text-white'}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:scale-110
                  ${scrolled ? 'text-lavender-400 hover:text-lavender-500' : 'text-white/90 hover:text-white'}`}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <Link
                to="/priser"
                className={`px-6 py-2 rounded-full gradient-border transition-all duration-300 hover:scale-105
                  ${scrolled 
                    ? 'text-rose-500 hover:text-rose-600' 
                    : 'text-white hover:text-rose-50'}`}
              >
                Priser
              </Link>
            </div>
          </div>

          <button
            className={`md:hidden transition-colors duration-300
              ${scrolled ? 'text-rose-500' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 text-neutral-600 hover:text-rose-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t">
                <a href="tel:+46123456789" className="text-lavender-500">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-rose-400">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lavender-400">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <Link
                to="/priser"
                className="w-full px-6 py-2 rounded-full gradient-border text-rose-500 hover:text-rose-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Priser
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}