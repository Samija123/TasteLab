import  { groceryItems } from '../data';
import GroceryList from '../components/GroceryList';
import { Calendar, ChevronDown } from 'lucide-react';

export default function Grocery() {
  return (
    <div className="py-6">
      <div className="tastelab-container">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Grocery Planner</h1>
          <p className="text-gray-600">Plan your meals and manage your shopping list.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <GroceryList items={groceryItems} />
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="card p-4">
              <h2 className="font-semibold mb-3 flex items-center">
                <Calendar size={18} className="mr-2 text-primary-500" />
                Meal Calendar
              </h2>
              <div className="relative mb-3">
                <select className="w-full p-2 pr-8 border rounded-md appearance-none bg-white">
                  <option>This Week (Jun 5 - Jun 11)</option>
                  <option>Next Week (Jun 12 - Jun 18)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
              </div>
              <div className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, i) => (
                  <div key={i} className="border rounded-md p-3">
                    <div className="font-medium text-sm mb-1">{day}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                      {i === 0 ? 'Veggie Egg Muffins' : i === 1 ? 'Fresh Berry Salad' : 'Grilled Chicken Plate'}
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary text-sm w-full mt-4">
                Plan Next Week
              </button>
            </div>
            
            <div className="card p-4">
              <h2 className="font-semibold mb-3">Shopping Tips</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Buy seasonal produce for better prices and nutrition
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Check your pantry before shopping to avoid duplicates
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Shop the perimeter of the store first for fresh foods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 