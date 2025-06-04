import  { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Clock, Star } from 'lucide-react';
import { api } from '../backend/api';

export default function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<any>(null);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const [categoryData, recipesData] = await Promise.all([
            api.getCategoryById(id),
            api.getRecipesByCategory(id)
          ]);
          
          setCategory(categoryData);
          setRecipes(recipesData);
        }
      } catch (error) {
        console.error('Error fetching category data:', error);
        navigate('/categories');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary-light">
        <div className="loader"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary-light">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-tertiary-dark">Category not found</h2>
          <button
            onClick={() => navigate('/categories')}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-light min-h-screen pb-12">
      {/* Category Header */}
      <div 
        className="relative h-64 sm:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${category.image})`,
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
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{category.name}</h1>
            <p className="text-white/90">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-tertiary-dark mb-4">
            {recipes.length} Recipes in {category.name}
          </h2>
          
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <Link 
                  key={recipe.id}
                  to={`/recipes/${recipe.id}`} 
                  className="block group"
                >
                  <div className="bg-secondary-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
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
                        <span className="text-xs px-2 py-1 bg-white rounded-full text-tertiary">{recipe.dietType}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No recipes found in this category.</p>
              <Link 
                to="/recipes" 
                className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                Browse All Recipes
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 