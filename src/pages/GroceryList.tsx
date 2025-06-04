import  { useState, useEffect } from 'react';
import { ShoppingCart, Check, Trash, Plus } from 'lucide-react';
import { api } from '../backend/api'

interface GroceryItem {
  id: string;
  name: string;
  amount?: number;
  unit?: string;
  recipeId?: string;
  recipeTitle?: string;
  checked: boolean;
}

export default function GroceryList() {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
  const [newItem, setNewItem] = useState({ name: '', amount: '', unit: '' });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch grocery list on component mount
  useEffect(() => {
    const fetchGroceryList = () => {
      setIsLoading(true);
      try {
        // Get from localStorage or use an empty array
        const savedList = localStorage.getItem('groceryList');
        if (savedList) {
          // Add checked property if it doesn't exist
          const parsedList = JSON.parse(savedList).map((item: any) => ({
            ...item,
            id: item.id || Date.now().toString() + Math.random().toString(36).substring(2, 9),
            checked: item.checked !== undefined ? item.checked : false
          }));
          setGroceryItems(parsedList);
        } else {
          // Initialize with sample items if no list exists
          const sampleItems = [
            { id: '1', name: 'Whole wheat flour', amount: 1, unit: 'bag', checked: false },
            { id: '2', name: 'Almond milk', amount: 1, unit: 'carton', checked: false },
            { id: '3', name: 'Fresh berries', amount: 2, unit: 'pints', checked: false }
          ];
          setGroceryItems(sampleItems);
          localStorage.setItem('groceryList', JSON.stringify(sampleItems));
        }
      } catch (error) {
        console.error('Error fetching grocery list:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroceryList();
  }, []);

  // Save to localStorage whenever the list changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('groceryList', JSON.stringify(groceryItems));
    }
  }, [groceryItems, isLoading]);

  // Add new item to the list
  const addItem = () => {
    if (newItem.name.trim() === '') return;
    
    const newGroceryItem: GroceryItem = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name: newItem.name.trim(),
      amount: newItem.amount ? Number(newItem.amount) : undefined,
      unit: newItem.unit || undefined,
      checked: false
    };
    
    setGroceryItems([...groceryItems, newGroceryItem]);
    setNewItem({ name: '', amount: '', unit: '' });
  };

  // Toggle item checked status
  const toggleItemChecked = (id: string) => {
    setGroceryItems(
      groceryItems.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Remove item from the list
  const removeItem = (id: string) => {
    setGroceryItems(groceryItems.filter(item => item.id !== id));
  };

  // Clear all checked items
  const clearCheckedItems = () => {
    setGroceryItems(groceryItems.filter(item => !item.checked));
  };

  // Group items by recipe
  const itemsByRecipe = groceryItems.reduce<Record<string, GroceryItem[]>>((groups, item) => {
    const key = item.recipeId ? item.recipeId : 'other';
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});

  return (
    <div className="bg-secondary-light min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-tertiary-dark flex items-center">
            <ShoppingCart className="mr-2 h-6 w-6 text-primary" />
            Grocery List
          </h1>
          {groceryItems.some(item => item.checked) && (
            <button
              onClick={clearCheckedItems}
              className="bg-tertiary hover:bg-tertiary-dark text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
            >
              Clear Checked Items
            </button>
          )}
        </div>
        
        {/* Add new item form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-tertiary-dark mb-4">Add New Item</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Item name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex-shrink-0 w-full sm:w-24">
              <input
                type="text"
                value={newItem.amount}
                onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
                placeholder="Qty"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex-shrink-0 w-full sm:w-24">
              <input
                type="text"
                value={newItem.unit}
                onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                placeholder="Unit"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              onClick={addItem}
              disabled={newItem.name.trim() === ''}
              className="flex-shrink-0 bg-primary hover:bg-primary-dark text-white p-2 rounded-md disabled:opacity-50 flex items-center justify-center"
            >
              <Plus className="h-5 w-5" />
              <span className="ml-1 hidden sm:inline">Add</span>
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center my-12">
            <div className="loader"></div>
          </div>
        ) : groceryItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600 mb-4">Your grocery list is empty.</p>
            <p className="text-sm text-gray-500">Add items using the form above or add ingredients from recipes.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Items not from recipes */}
            {itemsByRecipe.other && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-tertiary-dark mb-4">General Items</h2>
                <ul className="space-y-2">
                  {itemsByRecipe.other.map((item) => (
                    <li 
                      key={item.id}
                      className={`flex items-center justify-between p-2 rounded-md ${
                        item.checked ? 'bg-green-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start flex-1">
                        <button
                          onClick={() => toggleItemChecked(item.id)}
                          className={`h-5 w-5 rounded-md flex-shrink-0 flex items-center justify-center mr-3 ${
                            item.checked 
                              ? 'bg-green-500 text-white' 
                              : 'border border-gray-300'
                          }`}
                        >
                          {item.checked && <Check className="h-4 w-4" />}
                        </button>
                        <span className={item.checked ? 'line-through text-gray-400' : 'text-gray-700'}>
                          {item.amount && item.unit 
                            ? `${item.amount} ${item.unit} ${item.name}`
                            : item.name
                          }
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 ml-2"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Items from recipes */}
            {Object.entries(itemsByRecipe).map(([recipeId, items]) => {
              if (recipeId === 'other') return null;
              
              const recipeName = items[0]?.recipeTitle || 'Recipe';
              
              return (
                <div key={recipeId} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-tertiary-dark mb-4">
                    For: {recipeName}
                  </h2>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li 
                        key={item.id}
                        className={`flex items-center justify-between p-2 rounded-md ${
                          item.checked ? 'bg-green-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start flex-1">
                          <button
                            onClick={() => toggleItemChecked(item.id)}
                            className={`h-5 w-5 rounded-md flex-shrink-0 flex items-center justify-center mr-3 ${
                              item.checked 
                                ? 'bg-green-500 text-white' 
                                : 'border border-gray-300'
                            }`}
                          >
                            {item.checked && <Check className="h-4 w-4" />}
                          </button>
                          <span className={item.checked ? 'line-through text-gray-400' : 'text-gray-700'}>
                            {item.amount && item.unit 
                              ? `${item.amount} ${item.unit} ${item.name}`
                              : item.name
                            }
                          </span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 ml-2"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
 