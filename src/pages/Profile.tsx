import  { useState } from 'react';
import { User, Book, Settings, Save } from 'lucide-react';
import Layout from '../components/Layout';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('Samija Hadzic');
  const [email, setEmail] = useState('samija123@gmail.com');
  const [height, setHeight] = useState(168);
  const [weight, setWeight] = useState(65);
  const [dietary, setDietary] = useState('No specific diet');
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-accent-dark mb-4">Your Profile</h1>
          <p className="text-gray-600">
            Manage your personal information and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-primary text-white">
                <h3 className="font-medium">Profile Navigation</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveTab('profile')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-secondary-light'
                      }`}
                    >
                      <User size={18} className="mr-2" />
                      Personal Info
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('saved')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'saved' ? 'bg-primary text-white' : 'hover:bg-secondary-light'
                      }`}
                    >
                      <Book size={18} className="mr-2" />
                      Saved Recipes
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('settings')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'settings' ? 'bg-primary text-white' : 'hover:bg-secondary-light'
                      }`}
                    >
                      <Settings size={18} className="mr-2" />
                      Preferences
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-accent-dark mb-6">Personal Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl overflow-hidden">
                        <User size={48} />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(parseInt(e.target.value))}
                        className="input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(parseInt(e.target.value))}
                        className="input"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">
                        Dietary Preferences
                      </label>
                      <input
                        type="text"
                        id="dietary"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        className="input"
                        placeholder="e.g., Vegetarian, Vegan, Gluten-free, etc."
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
                        Activity Level
                      </label>
                      <select className="input w-full" defaultValue="Moderately active">
                        <option>Sedentary</option>
                        <option>Lightly active</option>
                        <option>Moderately active</option>
                        <option>Very active</option>
                        <option>Extra active</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <button className="btn btn-primary flex items-center">
                      <Save size={16} className="mr-1" /> Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'saved' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-accent-dark mb-6">Saved Recipes</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=200&h=200&q=80" 
                        alt="Avocado Toast" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium text-accent-dark">Avocado Toast with Poached Eggs</h3>
                      <p className="text-sm text-gray-500">Breakfast • 15 min</p>
                    </div>
                    <div>
                      <button className="text-gray-400 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1660715683888-8e506d6898c8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=200&h=200&q=80" 
                        alt="Buddha Bowl" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium text-accent-dark">Mediterranean Buddha Bowl</h3>
                      <p className="text-sm text-gray-500">Lunch • 25 min</p>
                    </div>
                    <div>
                      <button className="text-gray-400 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwZm9vZCUyMHBsYXRpbmclMjBiZWF1dGlmdWx8ZW58MHx8fHwxNzQ4MTM3MTQ1fDA&ixlib=rb-4.1.0&fit=crop&w=200&h=200&q=80" 
                        alt="Smoothie Bowl" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium text-accent-dark">Protein-Packed Berry Smoothie Bowl</h3>
                      <p className="text-sm text-gray-500">Breakfast • 10 min</p>
                    </div>
                    <div>
                      <button className="text-gray-400 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-accent-dark mb-6">Account Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-3">Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="emailNotifications"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                          Email notifications for new recipes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="weeklyDigest"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="weeklyDigest" className="ml-2 block text-sm text-gray-700">
                          Weekly digest of nutrition tips
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="mealReminders"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="mealReminders" className="ml-2 block text-sm text-gray-700">
                          Meal planning reminders
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800 mb-3">Privacy</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="publicProfile"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="publicProfile" className="ml-2 block text-sm text-gray-700">
                          Make my profile public
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="shareProgress"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="shareProgress" className="ml-2 block text-sm text-gray-700">
                          Share my wellness progress
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800 mb-3">Measurement Units</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          id="metric"
                          name="units"
                          type="radio"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="metric" className="ml-2 block text-sm text-gray-700">
                          Metric (g, kg, cm, ml)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="imperial"
                          name="units"
                          type="radio"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <label htmlFor="imperial" className="ml-2 block text-sm text-gray-700">
                          Imperial (oz, lb, in, fl oz)
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <button className="btn btn-primary flex items-center">
                      <Save size={16} className="mr-1" /> Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
 