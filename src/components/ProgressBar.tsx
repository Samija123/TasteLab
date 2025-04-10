interface  ProgressBarProps {
  current: number;
  target: number;
  unit: string;
}

export default function ProgressBar({ current, target, unit }: ProgressBarProps) {
  const percentage = Math.min(Math.round((current / target) * 100), 100);
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{current} {unit}</span>
        <span>{target} {unit}</span>
      </div>
      <div className="w-full bg-beige-100 rounded-full h-2.5">
        <div 
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
 