import  { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import Layout from '../components/Layout';
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

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  
  const categories = [
    { id: 'all', name: 'All Recipes' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'desserts', name: 'Desserts' }
  ];
  
  useEffect(() => {
    fetchRecipes();
  }, []);
  
  useEffect(() => {
    filterRecipes();
  }, [searchQuery, selectedCategory, recipes]);
  
  const fetchRecipes = async () => {
    try {
      // In a real app, this would be an API call
      const data = [
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
        },
        {
          id: 4,
          title: 'Grilled Salmon with Lemon-Dill Sauce',
          description: 'Perfectly grilled salmon fillet with a tangy lemon-dill sauce and steamed vegetables.',
          image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyaWxsZWQlMjBzYWxtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&h=400&q=60',
          rating: 4.9,
          prepTime: '30 min',
          category: 'dinner'
        },
        {
          id: 5,
          title: 'Dark Chocolate Avocado Mousse',
          description: 'Creamy, rich chocolate mousse made with ripe avocados for a healthier dessert option.',
          image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=600&h=400&q=80',
          rating: 4.6,
          prepTime: '15 min',
          category: 'desserts'
        },
        {
          id: 6,
          title: 'Homemade Granola Bars',
          description: 'Chewy granola bars packed with oats, nuts, seeds, and dried fruit for an energizing snack.',
          image: 'https://images.unsplash.com/photo-1490567674467-89304155d145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3Jhbm9sYSUyMGJhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&h=400&q=60',
          rating: 4.4,
          prepTime: '40 min',
          category: 'snacks'
        }
      ];
      
      setRecipes(data);
      setFilteredRecipes(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
    }
  };
  
  const filterRecipes = () => {
    let filtered = [...recipes];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        recipe => 
          recipe.title.toLowerCase().includes(query) || 
          recipe.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredRecipes(filtered);
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-accent-dark mb-4">Recipe Collection</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our diverse collection of healthy, delicious recipes tailored to various dietary preferences and nutritional needs.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10"
            />
          </div>
          
          <div className="relative md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter size={18} className="text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input pl-10 appearance-none"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Recipe Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
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
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">No recipes found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Recipes;
 