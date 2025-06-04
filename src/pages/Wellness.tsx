import  { useState, useEffect } from 'react';
import { api } from '../backend/api';
import { ChevronRight, Activity, BarChart, Clipboard, Plus, Trash, Target, Heart, Award, Calendar } from 'lucide-react';

export default function Wellness() {
  const [goals, setGoals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newGoal, setNewGoal] = useState('');
  const [activeTab, setActiveTab] = useState('goals');
  const [sleepData, setSleepData] = useState({ hours: 7, quality: 'Good' });
  const [waterIntake, setWaterIntake] = useState(6);
  const [stressLevel, setStressLevel] = useState(3);
  const [mood, setMood] = useState('Good');
  
  // Calendar tracking
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activityLog, setActivityLog] = useState<Record<string, string[]>>({});
  const [newActivity, setNewActivity] = useState('');

  useEffect(() => {
    const fetchGoals = async () => {
      setIsLoading(true);
      try {
        // Get goals from local storage or initialize with defaults
        const savedGoals = localStorage.getItem('wellness_goals');
        if (savedGoals) {
          setGoals(JSON.parse(savedGoals));
        } else {
          const defaultGoals = [
            { id: '1', title: 'Drink 8 glasses of water daily', completed: false },
            { id: '2', title: 'Exercise 30 minutes per day', completed: false },
            { id: '3', title: 'Eat at least 5 servings of vegetables', completed: false },
            { id: '4', title: 'Meditate for 10 minutes daily', completed: false },
            { id: '5', title: 'Get 7-8 hours of quality sleep', completed: false }
          ];
          setGoals(defaultGoals);
          localStorage.setItem('wellness_goals', JSON.stringify(defaultGoals));
        }
        
        // Get activity log
        const savedLog = localStorage.getItem('activity_log');
        if (savedLog) {
          setActivityLog(JSON.parse(savedLog));
        }
      } catch (error) {
        console.error('Error fetching goals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoals();
  }, []);

  // Save goals to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('wellness_goals', JSON.stringify(goals));
    }
  }, [goals, isLoading]);
  
  // Save activity log to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('activity_log', JSON.stringify(activityLog));
    }
  }, [activityLog, isLoading]);

  const toggleGoalCompletion = (id: string) => {
    const updatedGoals = goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
  };

  const addNewGoal = () => {
    if (newGoal.trim() === '') return;
    
    const newGoalItem = {
      id: Date.now().toString(),
      title: newGoal,
      completed: false
    };
    
    const updatedGoals = [...goals, newGoalItem];
    setGoals(updatedGoals);
    setNewGoal('');
  };
  
  const removeGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };
  
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };
  
  const addActivity = () => {
    if (newActivity.trim() === '') return;
    
    const dateKey = formatDate(selectedDate);
    const currentActivities = activityLog[dateKey] || [];
    const updatedActivities = [...currentActivities, newActivity];
    
    setActivityLog({
      ...activityLog,
      [dateKey]: updatedActivities
    });
    
    setNewActivity('');
  };
  
  const removeActivity = (date: string, index: number) => {
    const activities = [...activityLog[date]];
    activities.splice(index, 1);
    
    if (activities.length === 0) {
      const newLog = {...activityLog};
      delete newLog[date];
      setActivityLog(newLog);
    } else {
      setActivityLog({
        ...activityLog,
        [date]: activities
      });
    }
  };
  
  const getCurrentDateActivities = () => {
    const dateKey = formatDate(selectedDate);
    return activityLog[dateKey] || [];
  };
  
  const getMoods = () => {
    return [
      { value: 'Excellent', color: 'bg-green-500' },
      { value: 'Good', color: 'bg-green-300' },
      { value: 'Average', color: 'bg-yellow-400' },
      { value: 'Below Average', color: 'bg-orange-400' },
      { value: 'Poor', color: 'bg-red-500' }
    ];
  };

  return (
    <div className="bg-secondary-light min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-tertiary-dark mb-8">Wellness Tracker</h1>
        
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('goals')}
              className={`px-4 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'goals' 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Target className="h-4 w-4 mr-2" />
              Health Goals
            </button>
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-4 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'daily' 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Daily Tracker
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'stats' 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart className="h-4 w-4 mr-2" />
              Wellness Stats
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-4 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'activity' 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Activity className="h-4 w-4 mr-2" />
              Activity Log
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center my-12">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {/* Goals Tab */}
            {activeTab === 'goals' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Goals List */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-tertiary-dark flex items-center">
                        <Clipboard className="mr-2 h-5 w-5 text-primary" />
                        Health Goals
                      </h2>
                      <span className="text-sm text-gray-500">{goals.filter(g => g.completed).length}/{goals.length} Completed</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {goals.map((goal) => (
                        <div 
                          key={goal.id}
                          className="flex items-start p-3 border border-gray-100 rounded-md hover:bg-secondary-light/50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => toggleGoalCompletion(goal.id)}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary mt-0.5"
                          />
                          <span 
                            className={`ml-3 flex-1 ${goal.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
                          >
                            {goal.title}
                          </span>
                          <button
                            onClick={() => removeGoal(goal.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center mt-6">
                      <input
                        type="text"
                        value={newGoal}
                        onChange={(e) => setNewGoal(e.target.value)}
                        placeholder="Add a new goal..."
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        onClick={addNewGoal}
                        disabled={newGoal.trim() === ''}
                        className="bg-primary hover:bg-primary-dark text-white p-2 rounded-r-md disabled:opacity-50"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Wellness Tips */}
                <div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-tertiary-dark flex items-center mb-6">
                      <Heart className="mr-2 h-5 w-5 text-primary" />
                      Wellness Tips
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-secondary-light rounded-md">
                        <h3 className="font-medium text-tertiary mb-2">Hydration Matters</h3>
                        <p className="text-sm text-gray-600">
                          Aim to drink at least 8 glasses of water daily. Staying hydrated improves energy levels, brain function, and helps maintain a healthy weight.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-secondary-light rounded-md">
                        <h3 className="font-medium text-tertiary mb-2">Mindful Eating</h3>
                        <p className="text-sm text-gray-600">
                          Practice mindful eating by savoring each bite, eating slowly, and paying attention to hunger and fullness cues.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-secondary-light rounded-md">
                        <h3 className="font-medium text-tertiary mb-2">Move Regularly</h3>
                        <p className="text-sm text-gray-600">
                          Even short bursts of physical activity throughout the day can significantly improve your health and mood.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-xl font-semibold text-tertiary-dark flex items-center mb-6">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Your Achievements
                    </h2>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                          7
                        </div>
                        <div>
                          <p className="font-medium text-tertiary-dark">7-Day Streak</p>
                          <p className="text-xs text-gray-500">Completed goals for 7 consecutive days</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-tertiary h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                          5
                        </div>
                        <div>
                          <p className="font-medium text-tertiary-dark">5 Goals Achieved</p>
                          <p className="text-xs text-gray-500">Completed 5 wellness goals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Daily Tracking Tab */}
            {activeTab === 'daily' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-tertiary-dark mb-6">Daily Wellness Tracking</h2>
                  
                  <div className="space-y-6">
                    {/* Sleep Tracking */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sleep Duration (hours)
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="12"
                        step="0.5"
                        value={sleepData.hours}
                        onChange={(e) => setSleepData({...sleepData, hours: parseFloat(e.target.value)})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-500">0h</span>
                        <span className="text-sm font-medium text-primary">{sleepData.hours}h</span>
                        <span className="text-sm text-gray-500">12h</span>
                      </div>
                    </div>
                    
                    {/* Sleep Quality */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sleep Quality
                      </label>
                      <select
                        value={sleepData.quality}
                        onChange={(e) => setSleepData({...sleepData, quality: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                        <option value="Very Poor">Very Poor</option>
                      </select>
                    </div>
                    
                    {/* Water Intake */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Water Intake (glasses)
                      </label>
                      <div className="flex items-center">
                        <button
                          onClick={() => setWaterIntake(Math.max(0, waterIntake - 1))}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-600 p-1 rounded-md"
                        >
                          -
                        </button>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-primary h-2.5 rounded-full" 
                              style={{ width: `${Math.min(100, (waterIntake / 8) * 100)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">0</span>
                            <span className="text-xs font-medium text-primary">{waterIntake}/8 glasses</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setWaterIntake(Math.min(12, waterIntake + 1))}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-600 p-1 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Stress Level */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stress Level (1-5)
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <button
                            key={level}
                            onClick={() => setStressLevel(level)}
                            className={`flex-1 py-2 rounded-md ${
                              stressLevel === level
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Low Stress</span>
                        <span className="text-xs text-gray-500">High Stress</span>
                      </div>
                    </div>
                    
                    {/* Mood Tracking */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Today's Mood
                      </label>
                      <select
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {getMoods().map(moodOption => (
                          <option key={moodOption.value} value={moodOption.value}>
                            {moodOption.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <button className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md">
                      Save Today's Log
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-tertiary-dark mb-6">Wellness Summary</h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Sleep</div>
                      <div className="text-2xl font-semibold text-tertiary">{sleepData.hours}h</div>
                      <div className="text-xs text-gray-500">{sleepData.quality} quality</div>
                    </div>
                    
                    <div className="bg-secondary-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Hydration</div>
                      <div className="text-2xl font-semibold text-tertiary">{waterIntake}/8</div>
                      <div className="text-xs text-gray-500">glasses of water</div>
                    </div>
                    
                    <div className="bg-secondary-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Stress Level</div>
                      <div className="text-2xl font-semibold text-tertiary">{stressLevel}/5</div>
                      <div className="text-xs text-gray-500">
                        {stressLevel <= 2 ? 'Low' : stressLevel <= 3 ? 'Moderate' : 'High'}
                      </div>
                    </div>
                    
                    <div className="bg-secondary-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Mood</div>
                      <div className="text-2xl font-semibold text-tertiary">{mood}</div>
                      <div className="text-xs text-gray-500">overall feeling</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-tertiary-dark">Recommendations</h3>
                    
                    <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-md">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Great job on hydration!</span> Keep drinking water throughout the day.
                      </p>
                    </div>
                    
                    {sleepData.hours < 7 && (
                      <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-md">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Try to get more sleep.</span> Aim for 7-8 hours for optimal health.
                        </p>
                      </div>
                    )}
                    
                    {stressLevel > 3 && (
                      <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-md">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Your stress level is high.</span> Consider trying meditation or deep breathing exercises.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Stats Tab */}
            {activeTab === 'stats' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-tertiary-dark flex items-center mb-6">
                    <BarChart className="mr-2 h-5 w-5 text-primary" />
                    Wellness Insights
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-tertiary-dark">Daily Water Intake</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-primary">{waterIntake}/8 glasses</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: `${(waterIntake / 8) * 100}%` }}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {waterIntake >= 8 ? 'Target achieved!' : `${8 - waterIntake} more glasses to go`}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-tertiary-dark">Weekly Exercise</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-primary">3/5 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        2 more days to reach your weekly goal
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-tertiary-dark">Nutrition Balance</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-primary">Good</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Great variety of nutrients in your diet
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-tertiary-dark mb-6">Weekly Activity</h2>
                    
                    <div className="flex items-end justify-between h-40 mb-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                        const heights = [40, 65, 50, 80, 70, 30, 50];
                        return (
                          <div key={day} className="flex flex-col items-center">
                            <div 
                              className="w-8 bg-primary-light rounded-t"
                              style={{ height: `${heights[index]}%` }}
                            ></div>
                            <span className="text-xs text-gray-500 mt-1">{day}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-sm text-gray-600">Weekly Average</span>
                        <div className="text-lg font-semibold text-tertiary-dark">42 min/day</div>
                      </div>
                      <button className="text-primary hover:text-primary-dark text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-tertiary-dark mb-6">Health Metrics</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Sleep Quality</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 15.585l-5.804 3.045 1.107-6.46L.608 7.53l6.483-.942L10 .75l2.91 5.838 6.482.942-4.695 4.64 1.108 6.46L10 15.585z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Stress Management</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ${star <= 3 ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 15.585l-5.804 3.045 1.107-6.46L.608 7.53l6.483-.942L10 .75l2.91 5.838 6.482.942-4.695 4.64 1.108 6.46L10 15.585z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Nutritional Balance</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 15.585l-5.804 3.045 1.107-6.46L.608 7.53l6.483-.942L10 .75l2.91 5.838 6.482.942-4.695 4.64 1.108 6.46L10 15.585z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Physical Activity</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ${star <= 3 ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 15.585l-5.804 3.045 1.107-6.46L.608 7.53l6.483-.942L10 .75l2.91 5.838 6.482.942-4.695 4.64 1.108 6.46L10 15.585z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full flex items-center justify-center bg-secondary py-2 rounded-md text-tertiary hover:bg-secondary-dark transition-colors">
                      View Detailed Metrics <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Activity Log Tab */}
            {activeTab === 'activity' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-tertiary-dark mb-6">Activity Log</h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={formatDate(selectedDate)}
                      onChange={(e) => setSelectedDate(new Date(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-lg font-medium text-tertiary-dark">
                        Activities for {selectedDate.toLocaleDateString()}
                      </h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {getCurrentDateActivities().length > 0 ? (
                        getCurrentDateActivities().map((activity, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-secondary-light/50"
                          >
                            <span className="text-gray-700">{activity}</span>
                            <button
                              onClick={() => removeActivity(formatDate(selectedDate), index)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Trash className="h-4 w-4" />
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-center py-4">
                          No activities logged for this date.
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={newActivity}
                        onChange={(e) => setNewActivity(e.target.value)}
                        placeholder="Add a new activity..."
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        onClick={addActivity}
                        disabled={newActivity.trim() === ''}
                        className="bg-primary hover:bg-primary-dark text-white p-2 rounded-r-md disabled:opacity-50"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-tertiary-dark mb-4">
                      Recent Activity History
                    </h3>
                    
                    <div className="space-y-4">
                      {Object.keys(activityLog).length > 0 ? (
                        Object.keys(activityLog)
                          .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
                          .slice(0, 5)
                          .map(date => (
                            <div key={date} className="border-b border-gray-100 pb-3">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-tertiary">
                                  {new Date(date).toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })}
                                </h4>
                                <span className="text-xs text-gray-500">
                                  {activityLog[date].length} activities
                                </span>
                              </div>
                              <ul className="space-y-1">
                                {activityLog[date].slice(0, 2).map((activity, index) => (
                                  <li key={index} className="text-sm text-gray-600">
                                    • {activity}
                                  </li>
                                ))}
                                {activityLog[date].length > 2 && (
                                  <li className="text-xs text-primary">
                                    +{activityLog[date].length - 2} more activities
                                  </li>
                                )}
                              </ul>
                            </div>
                          ))
                      ) : (
                        <p className="text-gray-500 text-center py-4">
                          No activity history available.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-tertiary-dark mb-6">Activity Insights</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-tertiary-dark mb-2">Activity Streak</h3>
                        <div className="flex items-center">
                          <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-white mr-3">
                            5
                          </div>
                          <div className="text-sm text-gray-600">
                            You've logged activities for 5 consecutive days!
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-tertiary-dark mb-2">Most Active Days</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Monday</span>
                            <div className="w-2/3 bg-gray-200 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Wednesday</span>
                            <div className="w-2/3 bg-gray-200 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Friday</span>
                            <div className="w-2/3 bg-gray-200 rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-tertiary-dark mb-4">Activity Types</h3>
                        <div className="space-y-2">
                          <div className="bg-secondary-light p-3 rounded-md flex justify-between items-center">
                            <span className="text-sm text-tertiary-dark">Cardio</span>
                            <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">42%</span>
                          </div>
                          <div className="bg-secondary-light p-3 rounded-md flex justify-between items-center">
                            <span className="text-sm text-tertiary-dark">Strength Training</span>
                            <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">28%</span>
                          </div>
                          <div className="bg-secondary-light p-3 rounded-md flex justify-between items-center">
                            <span className="text-sm text-tertiary-dark">Flexibility</span>
                            <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">18%</span>
                          </div>
                          <div className="bg-secondary-light p-3 rounded-md flex justify-between items-center">
                            <span className="text-sm text-tertiary-dark">Other</span>
                            <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">12%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
 