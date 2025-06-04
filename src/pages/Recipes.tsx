import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Star } from 'lucide-react';
import { api } from '../backend/api'

export default function Recipes() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        const data = await api.getRecipes();
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    // Filter recipes based on search term and diet filter
    let results = recipes;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        recipe => 
          recipe.title.toLowerCase().includes(term) || 
          recipe.description.toLowerCase().includes(term)
      );
    }
    
    if (dietFilter !== 'all') {
      results = results.filter(recipe => recipe.dietType === dietFilter);
    }
    
    setFilteredRecipes(results);
  }, [searchTerm, dietFilter, recipes]);

  return (
    <div className="bg-secondary-light min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-tertiary-dark mb-8">Recipes</h1>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative">
                <select
                  value={dietFilter}
                  onChange={(e) => setDietFilter(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Diets</option>
                  <option value="vegan">Vegan</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="gluten-free">Gluten Free</option>
                  <option value="keto">Keto</option>
                  <option value="paleo">Paleo</option>
                </select>
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Recipe Grid */}
        {isLoading ? (
          <div className="flex justify-center my-12">
            <div className="loader"></div>
          </div>
        ) : filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No recipes found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setDietFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Link to={`/recipes/${recipe.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {recipe.featured && (
            <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <Star className="h-3 w-3 mr-1" /> Featured
            </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-tertiary-dark group-hover:text-primary transition-colors duration-300">{recipe.title}</h3>
          <p className="text-sm text-gray-600 mt-1 flex-1">{recipe.description.substring(0, 100)}...</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-xs">{recipe.time} mins</span>
            </div>
            <span className="text-xs px-2 py-1 bg-secondary-light rounded-full text-tertiary">{recipe.dietType}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
         