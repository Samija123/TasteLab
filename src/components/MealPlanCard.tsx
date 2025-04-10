import  { MealPlan } from '../types';
import { Calendar, ChevronRight } from 'lucide-react';

interface MealPlanCardProps {
  plan: MealPlan;
}

export default function MealPlanCard({ plan }: MealPlanCardProps) {
  return (
    <div className="card p-4 flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar size={16} />
        <span className="ml-1">{plan.recipes.length} recipes</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {plan.recipes.slice(0, 2).map(recipe => (
          <div key={recipe.id} className="bg-gray-100 rounded-md p-2">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-16 object-cover rounded-md" 
            />
            <p className="text-xs font-medium mt-1 truncate">{recipe.title}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-primary text-sm mt-auto flex items-center justify-center">
        View Plan
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
 