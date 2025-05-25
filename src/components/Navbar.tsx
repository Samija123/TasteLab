import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, BookOpen, Activity, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/home" className="flex items-center">
                <span className="text-primary font-bold text-xl mr-1">Taste</span>
                <span className="text-accent font-bold text-xl">Lab</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/home"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/home'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Home
              </Link>
              <Link
                to="/recipes"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/recipes'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BookOpen size={18} className="mr-1" /> Recipes
              </Link>
              <Link
                to="/wellness"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/wellness'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Activity size={18} className="mr-1" /> Wellness
              </Link>
              <Link
                to="/grocery"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/grocery'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <ShoppingCart size={18} className="mr-1" /> Grocery List
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/profile"
              className={`inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md ${
                location.pathname === '/profile'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <User size={18} className="mr-1" /> Profile
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/home"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/home'
                ? 'bg-primary-light bg-opacity-10 border-primary text-primary'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/recipes'
                ? 'bg-primary-light bg-opacity-10 border-primary text-primary'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <BookOpen size={18} className="mr-1 inline" /> Recipes
          </Link>
          <Link
            to="/wellness"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/wellness'
                ? 'bg-primary-light bg-opacity-10 border-primary text-primary'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Activity size={18} className="mr-1 inline" /> Wellness
          </Link>
          <Link
            to="/grocery"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/grocery'
                ? 'bg-primary-light bg-opacity-10 border-primary text-primary'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={18} className="mr-1 inline" /> Grocery List
          </Link>
          <Link
            to="/profile"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              location.pathname === '/profile'
                ? 'bg-primary-light bg-opacity-10 border-primary text-primary'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <User size={18} className="mr-1 inline" /> Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 