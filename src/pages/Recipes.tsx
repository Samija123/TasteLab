import  { useState } from 'react';
import { recipes } from '../data';
import RecipeCard from '../components/RecipeCard';
import { Filter, Search } from 'lucide-react';

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-6">
      <div className="tastelab-container">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Recipe Collection</h1>
          <p className="text-gray-600">Discover healthy, delicious recipes for every meal.</p>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search recipes..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <button className="btn btn-secondary flex items-center">
                <Filter size={18} className="mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-6 flex overflow-x-auto pb-2 gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No recipes found matching your criteria.</p>
            <button 
              className="mt-4 btn btn-secondary"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
 