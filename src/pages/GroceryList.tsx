import  { useState, useEffect } from 'react';
import { CheckCircle, Plus, Trash, RefreshCw } from 'lucide-react';
import Layout from '../components/Layout';

interface GroceryItem {
  id: number;
  name: string;
  quantity: string;
  category: string;
  completed: boolean;
}

const GroceryList = () => {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchGroceryItems();
  }, []);
  
  const fetchGroceryItems = async () => {
    try {
      // In a real app, this would be an API call
      const data = [
        { id: 1, name: 'Quinoa', quantity: '1 cup', category: 'Grains', completed: false },
        { id: 2, name: 'Avocados', quantity: '2', category: 'Produce', completed: false },
        { id: 3, name: 'Spinach', quantity: '1 bag', category: 'Produce', completed: false },
        { id: 4, name: 'Olive Oil', quantity: '1 bottle', category: 'Oils', completed: true },
        { id: 5, name: 'Greek Yogurt', quantity: '16 oz', category: 'Dairy', completed: false }
      ];
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching grocery items:', error);
      setLoading(false);
    }
  };
  
  const addItem = () => {
    if (newItemName.trim() === '') return;
    
    const newItem: GroceryItem = {
      id: Date.now(),
      name: newItemName,
      quantity: newItemQuantity || '1',
      category: newItemCategory,
      completed: false
    };
    
    setItems([...items, newItem]);
    setNewItemName('');
    setNewItemQuantity('');
  };
  
  const toggleItemCompletion = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };
  
  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const clearCompletedItems = () => {
    setItems(items.filter(item => !item.completed));
  };
  
  
  const itemsByCategory = items.reduce((acc: Record<string, GroceryItem[]>, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-accent-dark mb-4">Grocery List</h1>
          <p className="text-gray-600">
            Keep track of your shopping needs and never forget an essential ingredient.
          </p>
        </div>
        
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-4 bg-primary text-white font-medium">
            Add New Item
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
                  Item Name
                </label>
                <input
                  type="text"
                  id="itemName"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="e.g., Apples"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="itemQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  id="itemQuantity"
                  value={newItemQuantity}
                  onChange={(e) => setNewItemQuantity(e.target.value)}
                  placeholder="e.g., 5, 1 lb, 2 cups"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="itemCategory" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="itemCategory"
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                  className="input"
                >
                  <option>Produce</option>
                  <option>Dairy</option>
                  <option>Meat</option>
                  <option>Grains</option>
                  <option>Canned Goods</option>
                  <option>Frozen</option>
                  <option>Snacks</option>
                  <option>Beverages</option>
                  <option>Baking</option>
                  <option>Oils</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <button 
                onClick={addItem}
                disabled={newItemName.trim() === ''}
                className={`btn ${
                  newItemName.trim() === '' ? 'bg-gray-300 cursor-not-allowed' : 'btn-primary'
                } flex items-center`}
              >
                <Plus size={16} className="mr-1" /> Add Item
              </button>
            </div>
          </div>
        </div>
        
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <span className="font-medium">Your Grocery List</span>
            <div className="flex space-x-2">
              <button 
                onClick={clearCompletedItems}
                className="p-1 rounded text-white hover:bg-primary-dark transition-colors"
                title="Clear completed items"
              >
                <Trash size={18} />
              </button>
              <button 
                onClick={fetchGroceryItems}
                className="p-1 rounded text-white hover:bg-primary-dark transition-colors"
                title="Refresh list"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-gray-500">Loading your grocery list...</p>
            </div>
          ) : items.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {Object.keys(itemsByCategory).map(category => (
                <div key={category}>
                  <div className="px-6 py-3 bg-gray-100 text-accent-dark font-medium">
                    {category}
                  </div>
                  {itemsByCategory[category].map(item => (
                    <div key={item.id} className="px-6 py-3 flex items-center bg-gray-50">
                      <button
                        onClick={() => toggleItemCompletion(item.id)}
                        className={`mr-3 ${item.completed ? 'text-primary' : 'text-gray-300'}`}
                      >
                        <CheckCircle size={20} className={item.completed ? 'fill-primary' : ''} />
                      </button>
                      <div className={`flex-grow ${item.completed ? 'line-through text-gray-400' : ''}`}>
                        <span className="font-medium">{item.name}</span>
                        {item.quantity && <span className="text-gray-500 text-sm ml-2">({item.quantity})</span>}
                      </div>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500">Your grocery list is empty. Add some items above!</p>
            </div>
          )}
        </div>
        
        <div className="text-center text-sm text-gray-500">
          Tip: Click the checkbox to mark items as completed when you add them to your cart.
        </div>
      </div>
    </Layout>
  );
};

export default GroceryList;
 