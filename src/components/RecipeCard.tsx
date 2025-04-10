import  { Recipe } from '../types';
import { Clock, Heart, ChevronRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <div className="relative">
        <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover" />
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white bg-opacity-80 flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
        <span className="absolute bottom-3 left-3 px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
          {recipe.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{recipe.description}</p>
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <Clock size={16} className="mr-1" />
          <span>{recipe.prepTime} min</span>
          <span className="mx-2">•</span>
          <span>{recipe.calories} kcal</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {recipe.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-beige-100 text-beige-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="btn btn-primary text-sm w-full mt-4 flex items-center justify-center">
          View Recipe
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
 