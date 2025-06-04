import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../backend/api';

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const data = await api.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-secondary-light min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-tertiary-dark mb-8">Recipe Categories</h1>
        
        {isLoading ? (
          <div className="flex justify-center my-12">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: any }) {
  return (
    <Link to={`/categories/${category.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative h-56">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-xl font-bold text-white">{category.name}</h2>
            <p className="text-white/80 text-sm">{category.recipeCount} recipes</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
 