export  interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  calories: number;
  prepTime: number;
  category: string;
  tags: string[];
}

export interface MealPlan {
  id: number;
  title: string;
  description: string;
  recipes: Recipe[];
}

export interface HealthGoal {
  id: number;
  title: string;
  target: number;
  current: number;
  unit: string;
  icon: string;
}

export interface GroceryItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  checked: boolean;
  category: string;
}
 