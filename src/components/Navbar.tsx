import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Activity, ShoppingBag, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/recipes', label: 'Recipes', icon: <Book size={20} /> },
    { path: '/wellness', label: 'Wellness', icon: <Activity size={20} /> },
    { path: '/grocery', label: 'Grocery', icon: <ShoppingBag size={20} /> },
    { path: '/profile', label: 'Profile', icon: <User size={20} /> }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="tastelab-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary-600 flex items-center justify-center">
                <Layers size={20} className="text-white" />
              </div>
              <span className="text-xl font-serif font-bold text-primary-700">TasteLab</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'nav-link-active' : 'nav-link-inactive'}`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link block ${isActive(item.path) ? 'nav-link-active' : 'nav-link-inactive'}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

import { Layers } from 'lucide-react';
 