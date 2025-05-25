import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import CategoryCircle from '../components/CategoryCircle';
import RecipeCard from '../components/RecipeCard';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  prepTime: string;
  category: string;
}

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Fetch recipes
    fetchRecipes();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const fetchRecipes = async () => {
    try {
      // In a real app, this would be an API call
      setFeaturedRecipes([
        {
          id: 1,
          title: 'Mediterranean Buddha Bowl',
          description: 'A nutritious mix of quinoa, roasted vegetables, and tahini dressing.',
          image: 'https://images.unsplash.com/photo-1660715683888-8e506d6898c8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=600&h=400&q=80',
          rating: 4.8,
          prepTime: '25 min',
          category: 'lunch'
        },
        {
          id: 2,
          title: 'Avocado Toast with Poached Eggs',
          description: 'Creamy avocado spread on whole grain toast topped with perfectly poached eggs.',
          image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=600&h=400&q=80',
          rating: 4.5,
          prepTime: '15 min',
          category: 'breakfast'
        },
        {
          id: 3,
          title: 'Protein-Packed Berry Smoothie Bowl',
          description: 'A refreshing smoothie bowl with mixed berries, protein powder, and topped with granola.',
          image: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=600&h=400&q=80',
          rating: 4.7,
          prepTime: '10 min',
          category: 'breakfast'
        }
      ]);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative">
        <div 
          className="bg-cover bg-center h-72 md:h-96"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=1200&h=400&q=80)' 
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Welcome to Your Wellness Journey
              </h1>
              <p className="text-white text-lg mb-6 max-w-2xl">
                Discover recipes, plan meals, and track your nutrition goals all in one place
              </p>
              <Link to="/recipes" className="btn btn-primary">
                Explore Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Recipes Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-accent-dark">New Recipes You'll Love</h2>
          <Link to="/recipes" className="text-primary font-medium flex items-center hover:underline">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              rating={recipe.rating}
              prepTime={recipe.prepTime}
              category={recipe.category}
            />
          ))}
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary-light bg-opacity-20 rounded-lg">
        <h2 className="text-2xl font-bold text-accent-dark mb-8 text-center">
          Explore Categories
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          <CategoryCircle 
            image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=200&h=200&q=80" 
            label="Breakfast" 
            onClick={() => {}} 
          />
          <CategoryCircle 
            image="https://images.unsplash.com/photo-1660715683888-8e506d6898c8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=200&h=200&q=80" 
            label="Lunch" 
            onClick={() => {}} 
          />
          <CategoryCircle 
            image="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=200&h=200&q=80" 
            label="Dinner" 
            onClick={() => {}} 
          />
          <CategoryCircle 
            image="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=200&h=200&q=80" 
            label="Desserts" 
            onClick={() => {}} 
          />
        </div>
      </section>
      
      {/* Seasonal Favorites */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-accent-dark mb-8">
          Seasonal Favorites
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden h-64 group">
            <img 
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=600&h=400&q=80" 
              alt="Spring Collection" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Spring Collection</h3>
                <p className="text-gray-200 mb-4">Light and refreshing meals for warmer days</p>
                <button className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 group">
            <img 
              src="https://images.unsplash.com/photo-1660715683888-8e506d6898c8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=600&h=400&q=80" 
              alt="Comfort Foods" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Comfort Foods</h3>
                <p className="text-gray-200 mb-4">Healthy versions of your favorite comfort meals</p>
                <button className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wellness Journey */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-primary bg-opacity-5 rounded-lg">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-accent-dark mb-4">
              Your Wellness Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Track your nutrition goals, monitor your progress, and celebrate your achievements. 
              Our personalized wellness tools help you stay motivated and informed about your health journey.
            </p>
            <Link to="/wellness" className="btn btn-primary">
              Track Your Progress
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-accent-dark mb-4">Weekly Nutrition Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Protein</span>
                    <span className="text-gray-800 font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Carbohydrates</span>
                    <span className="text-gray-800 font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Healthy Fats</span>
                    <span className="text-gray-800 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Fiber</span>
                    <span className="text-gray-800 font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 ${
          showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </Layout>
  );
};

export default Home;
 