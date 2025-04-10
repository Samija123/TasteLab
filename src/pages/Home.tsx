import  { recipes } from '../data';
import RecipeCard from '../components/RecipeCard';
import { ArrowRight, ChevronRight, Leaf, Calendar, Award, ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading for animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <img 
          src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nfGVufDB8fHx8MTc0NDA1MDMxNXww&ixlib=rb-4.0.3"
          alt="Beautiful organic food served on a plate"
          className="w-full h-full object-cover"
        />
        <div className="welcome-banner-overlay"></div>
        <div className="welcome-banner-content">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">Welcome to TasteLab</h1>
          <p className="text-xl mb-8 max-w-2xl">Your journey to balanced nutrition and mindful eating begins here</p>
          <div className="flex flex-wrap gap-4 justify-center btn-container">
            <button className="btn bg-primary-600 text-white hover:bg-primary-700 flex items-center">
              Start Your Plan
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="btn bg-white text-primary-800 hover:bg-beige-100">
              Explore Recipes
            </button>
          </div>
          
          {/* Scroll Down Arrow */}
          <button 
            className="scroll-down-arrow" 
            onClick={scrollToFeatures}
            aria-label="Scroll to features"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-beige-50" ref={featuresRef}>
        <div className="tastelab-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-beige-900 mb-4">How TasteLab Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover how our platform helps you maintain a balanced lifestyle through nutrition, planning, and wellness tracking.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center animated-card ${isLoading ? 'opacity-0' : ''}`}>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={28} className="text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Nutrition</h3>
              <p className="text-gray-600">Recipes and meal plans tailored to your dietary preferences and wellness goals.</p>
            </div>
            
            <div className={`text-center animated-card ${isLoading ? 'opacity-0' : ''}`}>
              <div className="bg-beige-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-beige-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simple Meal Planning</h3>
              <p className="text-gray-600">Plan your weekly meals and automatically generate shopping lists.</p>
            </div>
            
            <div className={`text-center animated-card ${isLoading ? 'opacity-0' : ''}`}>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Tracking</h3>
              <p className="text-gray-600">Monitor your progress and build lasting healthy habits.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Categories Section */}
      <div className="py-12 bg-white">
        <div className="tastelab-container">
          <h2 className="section-title">Explore Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGNhdGVnb3JpZXMlMjBvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZydWl0c3xlbnwwfHx8fDE3NDQyNzg1NDd8MA&ixlib=rb-4.0.3"
                alt="Breakfast category - healthy waffles" 
                className="w-full h-full object-cover"
              />
              <div className="category-card-content">
                <h3 className="text-xl font-semibold">Breakfast</h3>
                <p className="text-sm mt-1">Start your day right</p>
              </div>
            </div>
            
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwZm9vZCUyMGNhdGVnb3JpZXMlMjBvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZydWl0c3xlbnwwfHx8fDE3NDQyNzg1NDd8MA&ixlib=rb-4.0.3" 
                alt="Lunch category - nutritious bowl" 
                className="w-full h-full object-cover"
              />
              <div className="category-card-content">
                <h3 className="text-xl font-semibold">Lunch</h3>
                <p className="text-sm mt-1">Midday fuel</p>
              </div>
            </div>
            
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwZm9vZCUyMGNhdGVnb3JpZXMlMjBvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZydWl0c3xlbnwwfHx8fDE3NDQyNzg1NDd8MA&ixlib=rb-4.0.3" 
                alt="Dinner category - healthy pancakes" 
                className="w-full h-full object-cover"
              />
              <div className="category-card-content">
                <h3 className="text-xl font-semibold">Dinner</h3>
                <p className="text-sm mt-1">Evening nourishment</p>
              </div>
            </div>
            
            <div className="category-card">
              <img 
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMGNhdGVnb3JpZXMlMjBvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZydWl0c3xlbnwwfHx8fDE3NDQyNzg1NDd8MA&ixlib=rb-4.0.3" 
                alt="Snacks category - strawberry ice cream" 
                className="w-full h-full object-cover"
              />
              <div className="category-card-content">
                <h3 className="text-xl font-semibold">Snacks</h3>
                <p className="text-sm mt-1">Healthy treats</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="btn btn-primary inline-flex items-center">
              Browse All Categories
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* New Recipes You'll Love - Enhanced Section */}
      <div className="py-12 bg-beige-50">
        <div className="tastelab-container">
          <h2 className="section-title">New Recipes You'll Love</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {recipes.slice(4, 7).map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card overflow-hidden">
              <div className="relative">
                <img 
                  src={recipes[7].image} 
                  alt={recipes[7].title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <span className="inline-block px-2 py-1 bg-primary-600 text-white text-xs rounded-full mb-2">
                    Featured Recipe
                  </span>
                  <h3 className="text-xl font-semibold">{recipes[7].title}</h3>
                  <p className="text-sm opacity-90">{recipes[7].description}</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span>{recipes[7].prepTime} min</span>
                  <span className="mx-2">•</span>
                  <span>{recipes[7].calories} kcal</span>
                </div>
                <button className="btn btn-primary text-sm">View Recipe</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {recipes.slice(8, 10).map(recipe => (
                <div key={recipe.id} className="card overflow-hidden flex flex-col sm:flex-row h-32">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full sm:w-32 h-32 object-cover"
                  />
                  <div className="p-3 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-semibold">{recipe.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-1">{recipe.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">{recipe.prepTime} min • {recipe.calories} kcal</span>
                      <button className="text-xs text-primary-700 font-medium">View</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="btn btn-primary inline-flex items-center">
              Discover More Recipes
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Your Wellness Journey Section */}
      <div className="py-12 bg-white">
        <div className="tastelab-container">
          <h2 className="section-title">Your Wellness Journey</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBwbGFubmluZyUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzfGVufDB8fHx8MTc0MzIwNjA4MXww&ixlib=rb-4.0.3" 
                alt="Woman preparing healthy food" 
                className="featured-image w-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Track Your Progress</h3>
              <p className="text-gray-600 mb-6">
                Our integrated wellness tracker helps you monitor your nutrition, exercise, sleep, and other health metrics all in one place. Set personalized goals and visualize your progress over time.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                    <Award size={20} className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Set Personal Goals</h4>
                    <p className="text-sm text-gray-600">Define targets for water intake, exercise frequency, sleep quality, and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                    <Calendar size={20} className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Daily Check-Ins</h4>
                    <p className="text-sm text-gray-600">Record your progress and build streaks to stay motivated.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                    <Leaf size={20} className="text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Health Insights</h4>
                    <p className="text-sm text-gray-600">Receive personalized recommendations based on your progress and habits.</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary inline-flex items-center self-start">
                Start Tracking
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Favorites */}
      <div className="py-12 bg-beige-50">
        <div className="tastelab-container">
          <h2 className="section-title">Seasonal Favorites</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recipes.slice(0, 3).map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          <div className="text-center">
            <button className="btn btn-primary inline-flex items-center">
              View All Recipes
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Clock } from 'lucide-react';
 