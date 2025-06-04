import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Clock, Utensils, Search, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../backend/api';

export default function Home() {
  const { user } = useAuth();
  const [featuredRecipes, setFeaturedRecipes] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Initialize mock data if it doesn't exist
        if (!localStorage.getItem('recipes')) {
          await api.initializeData();
        }
        
        const [recipesData, categoriesData] = await Promise.all([
          api.getFeaturedRecipes(),
          api.getCategories()
        ]);
        
        setFeaturedRecipes(recipesData.slice(0, 4)); // Limit to 4 recipes
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80, // Account for header
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-secondary-light">
      {/* Hero Section */}
      <div 
        className="relative h-screen-80 min-h-[600px] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://plus.unsplash.com/premium_photo-1700064758614-392160787ce1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Welcome{user?.name ? ` ${user.name}` : ''}
            </h1>
            <p className="text-xl mb-8">
              Discover delicious recipes, create meal plans, and track your wellness journey all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 p-4">
              <Link 
                to="/recipes" 
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium text-center transition-colors"
              >
                Browse All Recipes
              </Link>
              <Link 
                to="/wellness" 
                className="bg-tertiary hover:bg-tertiary-dark text-white px-4 py-2 rounded-md font-medium text-center transition-colors"
              >
                Check Wellness Goals
              </Link>
            </div>
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

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-10">
              <div className="max-w-xl mx-auto">
                <h2 className="text-xl font-semibold text-tertiary-dark mb-4 text-center">
                  Find Your Perfect Recipe
                </h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search recipes, ingredients, or categories..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <Link
                    to="/recipes"
                    className="absolute right-3 top-3 text-primary hover:text-primary-dark"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-tertiary-dark">Categories</h2>
                <Link to="/categories" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.slice(0, 4).map((category) => (
                  <Link 
                    key={category.id}
                    to={`/categories/${category.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40">
                        <img 
                          src={category.image} 
                          alt={category.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                          <p className="text-xs text-white/80">{category.recipeCount} recipes</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            
            {/* Featured Recipes */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-tertiary-dark">Featured Recipes</h2>
                <Link to="/recipes" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredRecipes.map((recipe) => (
                  <Link 
                    key={recipe.id}
                    to={`/recipes/${recipe.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                      <div className="relative h-48">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </div>
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className="text-lg font-semibold text-tertiary-dark group-hover:text-primary transition-colors duration-300 mb-2">{recipe.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{recipe.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{recipe.time} mins</span>
                          </div>
                          <div className="flex items-center">
                            <Utensils className="h-4 w-4 mr-1" />
                            <span>{recipe.servings} servings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            
            {/* Seasonal Favorites */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-tertiary-dark">Seasonal Favorites</h2>
                <Link to="/recipes" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:h-64">
                  <div className="md:w-1/2 h-48 md:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMGNvb2tpbmclMjBpbmdyZWRpZW50cyUyMHZlZ2V0YWJsZXMlMjBmcnVpdHN8ZW58MHx8fHwxNzQ5MDM3MTg2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                      alt="Seasonal breakfast" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Breakfast</div>
                    <h3 className="text-xl font-semibold text-tertiary-dark mb-2">Seasonal Fruit Waffles</h3>
                    <p className="text-sm text-gray-600 mb-4">Crispy waffles topped with fresh seasonal fruits and a drizzle of maple syrup.</p>
                    <Link to="/recipes/seasonal-waffles" className="text-primary hover:text-primary-dark font-medium text-sm">
                      View Recipe →
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:h-64">
                  <div className="md:w-1/2 h-48 md:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1417217601328-d3c66e6f1d48?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwZm9vZCUyMGNvb2tpbmclMjBpbmdyZWRpZW50cyUyMHZlZ2V0YWJsZXMlMjBmcnVpdHN8ZW58MHx8fHwxNzQ5MDM3MTg2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                      alt="Summer salad" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Lunch</div>
                    <h3 className="text-xl font-semibold text-tertiary-dark mb-2">Summer Avocado Salad</h3>
                    <p className="text-sm text-gray-600 mb-4">Fresh greens with ripe avocados, mango, and a light citrus dressing.</p>
                    <Link to="/recipes/avocado-salad" className="text-primary hover:text-primary-dark font-medium text-sm">
                      View Recipe →
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:h-64">
                  <div className="md:w-1/2 h-48 md:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwZm9vZCUyMGNvb2tpbmclMjBpbmdyZWRpZW50cyUyMHZlZ2V0YWJsZXMlMjBmcnVpdHN8ZW58MHx8fHwxNzQ5MDM3MTg2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                      alt="Berry ice cream" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Dessert</div>
                    <h3 className="text-xl font-semibold text-tertiary-dark mb-2">Berry Nice Cream</h3>
                    <p className="text-sm text-gray-600 mb-4">Creamy plant-based ice cream made with frozen bananas and fresh berries.</p>
                    <Link to="/recipes/berry-nice-cream" className="text-primary hover:text-primary-dark font-medium text-sm">
                      View Recipe →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Wellness Tips */}
            <section>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-tertiary-dark mb-4">Wellness Tips</h2>
                    <p className="text-gray-600 mb-6">
                      Simple daily habits that can make a big difference in your health and wellbeing.
                    </p>
                    <Link 
                      to="/wellness" 
                      className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium inline-flex items-center transition-colors self-start"
                    >
                      View Wellness Tracker <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-6">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <h3 className="text-lg font-semibold text-tertiary-dark mb-2">Stay Hydrated</h3>
                      <p className="text-gray-600">
                        Aim to drink at least 8 glasses of water daily. Set reminders if needed to maintain consistent hydration throughout the day.
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <h3 className="text-lg font-semibold text-tertiary-dark mb-2">Practice Mindful Eating</h3>
                      <p className="text-gray-600">
                        Take time to savor your food, chew slowly, and pay attention to hunger and fullness cues to avoid overeating.
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <h3 className="text-lg font-semibold text-tertiary-dark mb-2">Get Moving Daily</h3>
                      <p className="text-gray-600">
                        Even brief periods of physical activity can boost mood and energy levels. Aim for at least 30 minutes of movement each day.
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <h3 className="text-lg font-semibold text-tertiary-dark mb-2">Prioritize Sleep</h3>
                      <p className="text-gray-600">
                        Quality sleep is essential for overall health. Establish a regular sleep schedule and create a relaxing bedtime routine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
 