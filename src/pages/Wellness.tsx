import  { healthGoals } from '../data';
import GoalCard from '../components/GoalCard';
import { Plus, Award, Calendar } from 'lucide-react';

export default function Wellness() {
  return (
    <div className="py-6">
      <div className="tastelab-container">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Wellness Tracker</h1>
          <p className="text-gray-600">Monitor your health goals and track your progress.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-5 bg-primary-50 border border-primary-100">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-primary-100">
                <Award size={20} className="text-primary-600" />
              </div>
              <h3 className="ml-3 font-medium">Current Streak</h3>
            </div>
            <div className="text-3xl font-bold text-primary-700">7 Days</div>
            <p className="text-gray-600 text-sm mt-1">Keep going! You're doing great.</p>
          </div>
          
          <div className="card p-5">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-gray-100">
                <Calendar size={20} className="text-gray-600" />
              </div>
              <h3 className="ml-3 font-medium">Weekly Activity</h3>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-gray-500 mb-1">{day}</div>
                  <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center ${
                    i < 5 ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {i < 5 && <Check size={14} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Add New Goal</h3>
              <button className="btn btn-primary text-sm flex items-center">
                <Plus size={16} className="mr-1" />
                Add
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Track your water intake, exercise, nutrition, sleep, and more.
            </p>
          </div>
        </div>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthGoals.map(goal => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Wellness Insights</h2>
          <div className="card p-5">
            <p className="text-gray-600 mb-4">
              Based on your activity, we recommend focusing on increasing your water intake and adding more protein to your diet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">Hydration Tip</h3>
                <p className="text-sm text-gray-600">Try carrying a water bottle with you throughout the day and set reminders to drink regularly.</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                <h3 className="font-medium text-primary-800 mb-2">Nutrition Tip</h3>
                <p className="text-sm text-gray-600">Consider adding lean protein sources like chicken, fish, tofu, or legumes to each meal.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Check } from 'lucide-react';
 