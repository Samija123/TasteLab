import  { useState } from 'react';
import { GroceryItem } from '../types';
import { Check, ShoppingBag, Plus } from 'lucide-react';

interface GroceryListProps {
  items: GroceryItem[];
}

export default function GroceryList({ items }: GroceryListProps) {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>(items);
  
  const toggleItem = (id: number) => {
    setGroceryItems(items.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
    ));
  };

  const categories = [...new Set(groceryItems.map(item => item.category))];

  return (
    <div className="card">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold flex items-center">
            <ShoppingBag size={20} className="mr-2 text-primary-500" />
            Grocery List
          </h2>
          <button className="btn btn-secondary text-sm flex items-center">
            <Plus size={16} className="mr-1" />
            Add Item
          </button>
        </div>
      </div>
      <div className="p-4">
        {categories.map(category => (
          <div key={category} className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{category}</h3>
            <ul className="space-y-2">
              {groceryItems
                .filter(item => item.category === category)
                .map(item => (
                  <li 
                    key={item.id}
                    className="flex items-center justify-between p-2 border rounded-md"
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 border ${
                          item.checked 
                            ? 'bg-primary-500 border-primary-500 text-white' 
                            : 'border-gray-300'
                        }`}
                      >
                        {item.checked && <Check size={12} />}
                      </button>
                      <span className={item.checked ? 'line-through text-gray-400' : ''}>
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {item.quantity} {item.unit}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
 