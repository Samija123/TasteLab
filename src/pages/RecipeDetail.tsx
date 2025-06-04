import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, User, Plus, Check } from 'lucide-react';
import { api } from '../backend/api';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [addedToGroceryList, setAddedToGroceryList] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const data = await api.getRecipeById(id);
          setRecipe(data);
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
        navigate('/recipes');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id, navigate]);

  const addToGroceryList = () => {
    if (!recipe) return;
    
    // Get current grocery list from localStorage
    const currentList = JSON.parse(localStorage.getItem('groceryList') || '[]');
    
    // Format recipe ingredients for grocery list
    const ingredients = recipe.ingredients.map((ingredient: any) => ({
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name: ingredient.name,
      amount: ingredient.amount,
      unit: ingredient.unit,
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      checked: false
    }));
    
    // Add only ingredients that aren't already in the list
    const updatedList = [...currentList];
    ingredients.forEach((newItem: any) => {
      if (!currentList.some((item: any) => 
        item.name === newItem.name && 
        item.recipeId === newItem.recipeId
      )) {
        updatedList.push(newItem);
      }
    });
    
    // Save updated list to localStorage
    localStorage.setItem('groceryList', JSON.stringify(updatedList));
    
    // Update UI state
    setAddedToGroceryList(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setAddedToGroceryList(false);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary-light">
        <div className="loader"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary-light">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-tertiary-dark">Recipe not found</h2>
          <button
            onClick={() => navigate('/recipes')}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-light min-h-screen pb-12">
      {/* Recipe Header */}
      <div 
        className="relative h-64 sm:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${recipe.image})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8">
          <div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-white bg-black/30 hover:bg-black/40 rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">{recipe.title}</h1>
            <p className="text-white/90 max-w-2xl">{recipe.description}</p>
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-white flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {recipe.time} mins
              </span>
              <span className="text-white flex items-center">
                <User className="h-4 w-4 mr-1" />
                {recipe.servings} servings
              </span>
              <span className="px-2 py-1 bg-primary rounded-full text-xs font-medium text-white">
                {recipe.dietType}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-1">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 'ingredients' 
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 'instructions' 
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 'nutrition' 
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'ingredients' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-tertiary-dark">Ingredients</h2>
                  <button
                    onClick={addToGroceryList}
                    disabled={addedToGroceryList}
                    className={`flex items-center px-3 py-1 rounded-md text-sm font-medium ${
                      addedToGroceryList
                        ? 'bg-green-500 text-white'
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    {addedToGroceryList ? (
                      <>
                        <Check className="h-4 w-4 mr-1" /> Added to List
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-1" /> Add to Grocery List
                      </>
                    )}
                  </button>
                </div>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient: any, index: number) => (
                    <li key={index} className="flex items-start p-2 hover:bg-secondary-light/50 rounded-md">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'instructions' && (
              <div>
                <h2 className="text-lg font-semibold text-tertiary-dark mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction: string, index: number) => (
                    <li key={index} className="flex">
                      <span className="bg-primary h-6 w-6 rounded-full text-white flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            
            {activeTab === 'nutrition' && (
              <div>
                <h2 className="text-lg font-semibold text-tertiary-dark mb-4">Nutrition Information</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-secondary-light p-3 rounded-md">
                    <span className="text-sm text-gray-600">Calories</span>
                    <p className="text-lg font-semibold text-tertiary-dark">{recipe.nutrition.calories}</p>
                  </div>
                  <div className="bg-secondary-light p-3 rounded-md">
                    <span className="text-sm text-gray-600">Protein</span>
                    <p className="text-lg font-semibold text-tertiary-dark">{recipe.nutrition.protein}</p>
                  </div>
                  <div className="bg-secondary-light p-3 rounded-md">
                    <span className="text-sm text-gray-600">Carbs</span>
                    <p className="text-lg font-semibold text-tertiary-dark">{recipe.nutrition.carbs}</p>
                  </div>
                  <div className="bg-secondary-light p-3 rounded-md">
                    <span className="text-sm text-gray-600">Fat</span>
                    <p className="text-lg font-semibold text-tertiary-dark">{recipe.nutrition.fat}</p>
                  </div>
                  <div className="bg-secondary-light p-3 rounded-md">
                    <span className="text-sm text-gray-600">Fiber</span>
                    <p className="text-lg font-semibold text-tertiary-dark">{recipe.nutrition.fiber}</p>
                  </div>
                  <div className="bg-secondary-light p-3 rounded-md">
                    <span className="text-sm text-gray-600">Sugar</span>
                    <p className="text-lg font-semibold text-tertiary-dark">{recipe.nutrition.sugar}</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Note:</span> Nutrition information is estimated and may vary based on specific ingredients and portion sizes.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 