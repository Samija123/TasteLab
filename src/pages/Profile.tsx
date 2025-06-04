import  { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Settings, Plus, X } from 'lucide-react';

export default function Profile() {
  const { user, updateUserPreferences } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dietType, setDietType] = useState('');
  const [allergies, setAllergies] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [newAllergy, setNewAllergy] = useState('');
  const [newGoal, setNewGoal] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDietType(user.preferences.dietType);
      setAllergies(user.preferences.allergies);
      setGoals(user.preferences.goals);
      setIsLoading(false);
    }
  }, [user]);

  const handleSavePreferences = () => {
    updateUserPreferences({
      dietType,
      allergies,
      goals
    });
    
    // Show success message or feedback
    alert('Preferences saved successfully!');
  };

  const addAllergy = () => {
    if (newAllergy.trim() !== '' && !allergies.includes(newAllergy.trim())) {
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy('');
    }
  };

  const removeAllergy = (allergy: string) => {
    setAllergies(allergies.filter(a => a !== allergy));
  };

  const addGoal = () => {
    if (newGoal.trim() !== '' && !goals.includes(newGoal.trim())) {
      setGoals([...goals, newGoal.trim()]);
      setNewGoal('');
    }
  };

  const removeGoal = (goal: string) => {
    setGoals(goals.filter(g => g !== goal));
  };

  const dietOptions = [
    { value: 'balanced', label: 'Balanced' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'gluten-free', label: 'Gluten Free' },
    { value: 'keto', label: 'Keto' },
    { value: 'paleo', label: 'Paleo' }
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary-light">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-light min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-tertiary-dark mb-8">Your Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-primary p-6 flex items-center">
            <div className="bg-white rounded-full p-3 mr-4">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{name}</h2>
              <p className="text-primary-light">{email}</p>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-tertiary-dark mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-primary" />
                Dietary Preferences
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="dietType" className="block text-sm font-medium text-gray-700 mb-1">
                    Diet Type
                  </label>
                  <select
                    id="dietType"
                    value={dietType}
                    onChange={(e) => setDietType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {dietOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Allergies & Intolerances
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {allergies.length > 0 ? (
                      allergies.map((allergy) => (
                        <span 
                          key={allergy}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-tertiary"
                        >
                          {allergy}
                          <button
                            onClick={() => removeAllergy(allergy)}
                            className="ml-1 text-tertiary-dark hover:text-tertiary"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500">No allergies added</span>
                    )}
                  </div>
                  <div className="flex mt-2">
                    <input
                      type="text"
                      value={newAllergy}
                      onChange={(e) => setNewAllergy(e.target.value)}
                      placeholder="Add allergy or intolerance"
                      className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                      onClick={addAllergy}
                      disabled={newAllergy.trim() === ''}
                      className="bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-r-md disabled:opacity-50"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Health & Wellness Goals
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {goals.length > 0 ? (
                      goals.map((goal) => (
                        <span 
                          key={goal}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-light text-white"
                        >
                          {goal}
                          <button
                            onClick={() => removeGoal(goal)}
                            className="ml-1 text-white hover:text-secondary"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500">No goals added</span>
                    )}
                  </div>
                  <div className="flex mt-2">
                    <input
                      type="text"
                      value={newGoal}
                      onChange={(e) => setNewGoal(e.target.value)}
                      placeholder="Add health or wellness goal"
                      className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                      onClick={addGoal}
                      disabled={newGoal.trim() === ''}
                      className="bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-r-md disabled:opacity-50"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-medium"
                >
                  Save Preferences
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-tertiary-dark mb-4">Account Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled
                  />
                  <p className="mt-1 text-xs text-gray-500">Demo accounts cannot change name</p>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled
                  />
                  <p className="mt-1 text-xs text-gray-500">Demo accounts cannot change email</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 