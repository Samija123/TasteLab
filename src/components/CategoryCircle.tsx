import  { ReactNode } from 'react';

interface CategoryCircleProps {
  image?: string;
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
}

const CategoryCircle = ({ image, icon, label, onClick }: CategoryCircleProps) => {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer group"
      onClick={onClick}
    >
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-secondary-light border-2 border-secondary flex items-center justify-center mb-2 group-hover:border-primary transition-colors duration-200">
        {image ? (
          <img src={image} alt={label} className="w-full h-full object-cover" />
        ) : (
          <div className="text-accent-dark text-3xl">{icon}</div>
        )}
      </div>
      <span className="text-center text-sm font-medium text-gray-700 group-hover:text-primary transition-colors duration-200">
        {label}
      </span>
    </div>
  );
};

export default CategoryCircle;
 