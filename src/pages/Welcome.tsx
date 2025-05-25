import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Utensils, Apple, Coffee } from 'lucide-react';

const Welcome = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=fillmax&h=400&w=600)' 
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-primary-light">Taste</span><span className="text-secondary-light">Lab</span>
          </h1>
          <p className="text-xl text-white mb-10">
            Your personal guide to balanced nutrition, meal planning, and wellness tracking
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/home"
              className="btn btn-primary text-lg px-8 py-3 rounded-full"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
        
        <button 
          className={`absolute bottom-8 animate-bounce p-2 rounded-full bg-white/20 text-white ${scrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown />
        </button>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-secondary-light bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-dark mb-4">Discover TasteLab</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our features designed to help you maintain a balanced lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center mb-4">
                <Utensils className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent-dark mb-2">Personalized Meal Plans</h3>
              <p className="text-gray-600">
                Create customized meal plans based on your dietary preferences, nutritional needs, and health goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center mb-4">
                <Apple className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent-dark mb-2">Nutrition Tracking</h3>
              <p className="text-gray-600">
                Monitor your daily nutrient intake, track calories, and ensure you're meeting your dietary requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary-light bg-opacity-20 flex items-center justify-center mb-4">
                <Coffee className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent-dark mb-2">Recipe Collection</h3>
              <p className="text-gray-600">
                Access our extensive library of healthy, delicious recipes tailored to various dietary preferences.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/home"
              className="btn btn-accent text-lg px-8 py-3 rounded-full inline-block"
            >
              Enter TasteLab
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <span className="text-primary font-bold text-xl mr-1">Taste</span>
              <span className="text-accent font-bold text-xl">Lab</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              © {new Date().getFullYear()} TasteLab. All Rights Reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
 