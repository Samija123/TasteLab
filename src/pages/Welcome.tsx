import  { Link } from 'react-router-dom';
import { Leaf, ChevronDown } from 'lucide-react';

export default function Welcome() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to TasteLab
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Your journey to balanced nutrition starts here. Discover delicious recipes, personalized meal plans, and achieve your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/login" 
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <button
              onClick={scrollDown}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors border border-white/30"
            >
              Learn More
            </button>
          </div>
        </div>
        
        <button
          onClick={scrollDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
      
      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tertiary-dark mb-4">Discover TasteLab Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              TasteLab combines nutrition, meal planning, and habit tracking into one seamless experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-tertiary-dark mb-2">Recipe Database</h3>
              <p className="text-gray-600 mb-4">
                Discover hundreds of recipes categorized by diet type and health benefits. Find dishes that match your preferences and nutritional needs.
              </p>
              <Link to="/login" className="text-primary hover:text-primary-dark font-medium">
                Explore Recipes →
              </Link>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-tertiary-dark mb-2">Smart Meal Planning</h3>
              <p className="text-gray-600 mb-4">
                Plan your weekly meals based on your dietary preferences and health goals. Our smart planner helps you maintain a balanced diet.
              </p>
              <Link to="/login" className="text-primary hover:text-primary-dark font-medium">
                Start Planning →
              </Link>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-tertiary-dark mb-2">Wellness Tracker</h3>
              <p className="text-gray-600 mb-4">
                Track your progress towards health goals with our built-in wellness tracker. Monitor nutrition, hydration, and other health metrics.
              </p>
              <Link to="/login" className="text-primary hover:text-primary-dark font-medium">
                Track Wellness →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Showcase Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1417217601328-d3c66e6f1d48?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwZm9vZCUyMGNvb2tpbmclMjBpbmdyZWRpZW50cyUyMHZlZ2V0YWJsZXMlMjBmcnVpdHN8ZW58MHx8fHwxNzQ5MDM3MTg2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Fresh fruits and vegetables" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-tertiary-dark mb-4">
                Healthy Eating Made Simple
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TasteLab takes the guesswork out of healthy eating. Our platform provides personalized recommendations based on your preferences and nutritional needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personalized meal recommendations</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automatic grocery list generation</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Nutritional information for all recipes</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Health and wellness goal tracking</span>
                </li>
              </ul>
              <Link 
                to="/login" 
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors inline-block"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tertiary-dark mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of happy users who have transformed their eating habits with TasteLab.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "TasteLab has completely changed how I plan my meals. I've lost 15 pounds and feel more energetic than ever!"
              </p>
              <div className="font-medium text-tertiary-dark">Sarah J.</div>
              <div className="text-sm text-gray-500">TasteLab user for 6 months</div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "As a busy professional, I never had time to plan healthy meals. TasteLab makes it so easy that I can't imagine going back to my old habits."
              </p>
              <div className="font-medium text-tertiary-dark">Michael R.</div>
              <div className="text-sm text-gray-500">TasteLab user for 1 year</div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The wellness tracker is my favorite feature. Being able to see my progress and get recommendations has been instrumental in achieving my goals."
              </p>
              <div className="font-medium text-tertiary-dark">Emily K.</div>
              <div className="text-sm text-gray-500">TasteLab user for 8 months</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Nutrition Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join TasteLab today and take the first step towards a healthier, more balanced lifestyle.
          </p>
          <Link 
            to="/login" 
            className="px-8 py-4 bg-white text-primary hover:bg-secondary font-medium rounded-md transition-colors shadow-lg text-lg inline-block"
          >
            Get Started for Free
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-tertiary-dark text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Leaf className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">TasteLab</span>
            </div>
            
            <div className="flex space-x-4">
              <Link to="#" className="text-white/80 hover:text-white">Privacy Policy</Link>
              <Link to="#" className="text-white/80 hover:text-white">Terms of Service</Link>
              <Link to="#" className="text-white/80 hover:text-white">Contact Us</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} TasteLab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 