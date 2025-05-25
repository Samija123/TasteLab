import  { useState } from 'react';
import { Plus, CheckCircle, Trash, ShoppingBag } from 'lucide-react';
import Layout from '../components/Layout';

const Grocery = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Quinoa', quantity: '1 cup', category: 'Grains', completed: false },
    { id: 2, name: 'Avocados', quantity: '2', category: 'Produce', completed: false },
    { id: 3, name: 'Spinach', quantity: '1 bag', category: 'Produce', completed: false },
    { id: 4, name: 'Olive Oil', quantity: '1 bottle', category: 'Oils', completed: true },
    { id: 5, name: 'Greek Yogurt', quantity: '16 oz', category: 'Dairy', completed: false },
    { id: 6, name: 'Chickpeas', quantity: '1 can', category: 'Canned Goods', completed: false },
    { id: 7, name: 'Sweet Potatoes', quantity: '3', category: 'Produce', completed: false }
  ]);
  
  const [newItem, setNewItem] = useState({ name: '', quantity: '', category: 'Produce' });
  
  const categories = ['Produce', 'Grains', 'Dairy', 'Meat', 'Seafood', 'Oils', 'Canned Goods', 'Frozen', 'Snacks', 'Beverages', 'Baking', 'Other'];
  
  const addItem = () => {
    if (newItem.name.trim() === '') return;
    
    setItems([
      ...items,
      {
        id: Date.now(),
        name: newItem.name,
        quantity: newItem.quantity,
        category: newItem.category,
        completed: false
      }
    ]);
    
    setNewItem({ name: '', quantity: '', category: 'Produce' });
  };
  
  const toggleItemCompletion = (id) => {
    setItems(
      items.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const itemsByCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-accent-dark mb-8">Smart Grocery List</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 bg-primary text-white">
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Add New Item
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Item Name
                </label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  placeholder="e.g., Apples"
                  className="input w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  value={newItem.quantity}
                  onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                  placeholder="e.g., 6 medium"
                  className="input w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  className="input w-full"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <button 
                onClick={addItem}
                className="btn btn-primary flex items-center"
              >
                <Plus size={18} className="mr-1" /> Add Item
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 bg-secondary text-accent-dark">
            <h2 className="text-xl font-semibold">Shopping List</h2>
            <p className="text-sm">{items.filter(item => !item.completed).length} items remaining</p>
          </div>
          
          <div>
            {Object.keys(itemsByCategory).length > 0 ? (
              Object.keys(itemsByCategory).map(category => (
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
                      <div className={`flex-grow ${item.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                        <span className="font-medium">{item.name}</span>
                        {item.quantity && <span className="text-sm ml-2">({item.quantity})</span>}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
                <p>Your grocery list is empty. Add some items to get started!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Grocery;
 