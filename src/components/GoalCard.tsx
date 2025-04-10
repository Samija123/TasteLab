import  { HealthGoal } from '../types';
import ProgressBar from './ProgressBar';
import { Activity, Droplet, BookOpen } from 'lucide-react';

interface GoalCardProps {
  goal: HealthGoal;
}

export default function GoalCard({ goal }: GoalCardProps) {
  const getIcon = () => {
    switch (goal.icon) {
      case 'Activity':
        return <Activity size={18} className="text-primary-700" />;
      case 'Droplet':
        return <Droplet size={18} className="text-primary-700" />;
      default:
        return <BookOpen size={18} className="text-primary-700" />;
    }
  };

  return (
    <div className="card p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <div className="bg-primary-100 p-2 rounded-md mr-3">
          {getIcon()}
        </div>
        <h3 className="text-md font-medium">{goal.title}</h3>
      </div>
      <ProgressBar 
        current={goal.current} 
        target={goal.target} 
        unit={goal.unit} 
      />
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {Math.round((goal.current / goal.target) * 100)}% completed
        </span>
        <button className="text-sm text-primary-700 font-medium">Update</button>
      </div>
    </div>
  );
}
 