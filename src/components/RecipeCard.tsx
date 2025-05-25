import  { Star } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  prepTime: string;
  category: string;
}

const RecipeCard = ({ title, description, image, rating, prepTime, category }: RecipeCardProps) => {
  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium text-accent-dark">
          {prepTime}
        </div>
        <div className="absolute top-2 left-2 bg-primary px-2 py-1 rounded-full text-xs font-medium text-white capitalize">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-accent-dark mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center">
          <div className="flex text-yellow-400">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < Math.floor(rating) ? 'fill-yellow-400' : 'text-gray-300'} 
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
 