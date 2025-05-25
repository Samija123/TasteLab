import  { useState } from 'react';
import { Activity, AlertCircle, Check, Plus } from 'lucide-react';
import Layout from '../components/Layout';

interface Goal {
  id: number;
  type: string;
  target: string;
  progress: number;
  total: number;
  startDate: string;
  status: string;
}

const Wellness = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [goals, setGoals] = useState<Goal[]>([
    { 
      id: 1, 
      type: 'Hydration', 
      target: 'Drink 8 glasses of water daily',
      progress: 6,
      total: 8,
      startDate: '2023-05-15',
      status: 'In Progress'
    },
    { 
      id: 2, 
      type: 'Nutrition', 
      target: 'Eat 5 servings of vegetables daily',
      progress: 4,
      total: 5,
      startDate: '2023-06-01',
      status: 'In Progress'
    },
    { 
      id: 3, 
      type: 'Activity', 
      target: 'Exercise 30 minutes daily',
      progress: 4,
      total: 7,
      startDate: '2023-05-20',
      status: 'In Progress'
    }
  ]);
  
  const incrementProgress = (goalId: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId && goal.progress < goal.total) {
        return { ...goal, progress: goal.progress + 1 };
      }
      return goal;
    }));
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-accent-dark mb-4">Wellness Tracker</h1>
          <p className="text-gray-600 max-w-3xl">
            Monitor your health goals, track your progress, and make informed decisions about your wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-primary text-white">
                <h3 className="font-medium">Wellness Navigation</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveTab('overview')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'overview' ? 'bg-primary text-white' : 'hover:bg-secondary-light'
                      }`}
                    >
                      <Activity size={18} className="mr-2" />
                      Overview
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('goals')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'goals' ? 'bg-primary text-white' : 'hover:bg-secondary-light'
                      }`}
                    >
                      <Check size={18} className="mr-2" />
                      Goals
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('tips')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'tips' ? 'bg-primary text-white' : 'hover:bg-secondary-light'
                      }`}
                    >
                      <AlertCircle size={18} className="mr-2" />
                      Wellness Tips
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === 'overview' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-accent-dark mb-6">Wellness Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-secondary-light bg-opacity-30 p-4 rounded-lg">
                    <h3 className="font-medium text-accent-dark mb-2">Overall Progress</h3>
                    <div className="text-3xl font-bold text-primary">75%</div>
                    <p className="text-sm text-gray-500 mt-1">Across all goals</p>
                  </div>
                  
                  <div className="bg-secondary-light bg-opacity-30 p-4 rounded-lg">
                    <h3 className="font-medium text-accent-dark mb-2">Active Goals</h3>
                    <div className="text-3xl font-bold text-primary">{goals.length}</div>
                    <p className="text-sm text-gray-500 mt-1">Currently tracking</p>
                  </div>
                  
                  <div className="bg-secondary-light bg-opacity-30 p-4 rounded-lg">
                    <h3 className="font-medium text-accent-dark mb-2">Streak</h3>
                    <div className="text-3xl font-bold text-primary">12 days</div>
                    <p className="text-sm text-gray-500 mt-1">Keep it up!</p>
                  </div>
                </div>
                
                <h3 className="font-semibold text-accent-dark mb-4">Recent Activity</h3>
                
                <div className="space-y-4">
                  {goals.map(goal => (
                    <div key={goal.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">{goal.type}</h4>
                          <p className="text-sm text-gray-600">{goal.target}</p>
                          <p className="text-xs text-gray-500 mt-1">Started: {formatDate(goal.startDate)}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2 py-1 bg-primary-light bg-opacity-20 text-primary text-xs font-medium rounded-full">
                            {goal.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-800 font-medium">{goal.progress}/{goal.total}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'goals' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-accent-dark">Your Goals</h2>
                  <button className="btn btn-primary flex items-center">
                    <Plus size={16} className="mr-1" /> Add Goal
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {goals.map(goal => (
                    <div key={goal.id} className="py-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-gray-800">{goal.type}</h3>
                          <p className="text-sm text-gray-600">{goal.target}</p>
                        </div>
                        <button 
                          onClick={() => incrementProgress(goal.id)}
                          disabled={goal.progress >= goal.total}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            goal.progress >= goal.total 
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                              : 'bg-primary text-white hover:bg-primary-dark'
                          }`}
                        >
                          Log Progress
                        </button>
                      </div>
                      
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-800 font-medium">{goal.progress}/{goal.total}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Started: {formatDate(goal.startDate)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'tips' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-accent-dark mb-6">Wellness Tips</h2>
                
                <div className="space-y-6">
                  <div className="bg-secondary-light bg-opacity-20 p-4 rounded-lg">
                    <h3 className="font-medium text-accent-dark mb-2">Hydration</h3>
                    <p className="text-gray-700">
                      Staying properly hydrated is essential for overall health. Aim to drink at least 8 glasses of water daily, 
                      and more if you're physically active or in hot weather.
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Carry a reusable water bottle to remind yourself to drink water throughout the day.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Set reminders on your phone if you tend to forget to drink water.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Infuse water with fruits, herbs, or cucumber slices for added flavor without added sugar.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary-light bg-opacity-20 p-4 rounded-lg">
                    <h3 className="font-medium text-accent-dark mb-2">Nutrition</h3>
                    <p className="text-gray-700">
                      A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats is the foundation 
                      of good health and disease prevention.
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Aim for 5 servings of fruits and vegetables daily for essential vitamins and minerals.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Choose whole grains over refined grains for more fiber and nutrients.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Include protein with each meal to maintain muscle mass and feel satisfied longer.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary-light bg-opacity-20 p-4 rounded-lg">
                    <h3 className="font-medium text-accent-dark mb-2">Physical Activity</h3>
                    <p className="text-gray-700">
                      Regular physical activity improves cardiovascular health, helps maintain a healthy weight, and boosts mood 
                      and energy levels.
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Aim for at least 150 minutes of moderate-intensity aerobic activity weekly.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Include strength training exercises at least twice a week.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Find activities you enjoy to increase the likelihood of sticking with your exercise routine.</span>
                      </li>
                    </ul>
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

export default Wellness;
 