import  { Recipe, MealPlan, HealthGoal, GroceryItem } from './types';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Herb Garden Egg Bites",
    description: "Protein-packed breakfast egg bites with fresh herbs from the garden and seasonal vegetables.",
    image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 120,
    prepTime: 25,
    category: "Breakfast",
    tags: ["High Protein", "Low Carb", "Vegetarian"]
  },
  {
    id: 2,
    title: "Strawberry Delight Smoothie",
    description: "A refreshing smoothie with seasonal berries, leafy greens, and plant-based protein.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 180,
    prepTime: 15,
    category: "Snacks",
    tags: ["Vegetarian", "Low Calorie", "Quick"]
  },
  {
    id: 3,
    title: "Popcorn Snack Bowl",
    description: "A healthy snack with organic popcorn and a sprinkle of nutritional yeast for a savory flavor.",
    image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 110,
    prepTime: 5,
    category: "Snacks",
    tags: ["Low Calorie", "Vegan", "Quick"]
  },
  {
    id: 4,
    title: "Garden Veggie Stir Fry",
    description: "A quick and nutritious dinner loaded with seasonal vegetables and tofu for plant-based protein.",
    image: "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 320,
    prepTime: 20,
    category: "Dinner",
    tags: ["High Protein", "Vegetarian", "Quick"]
  },
  {
    id: 5,
    title: "Heart-Shaped Berry Waffles",
    description: "Crispy whole-grain waffles topped with fresh berries and a drizzle of pure maple syrup.",
    image: "https://images.unsplash.com/photo-1450152021501-598b36b17449?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 280,
    prepTime: 25,
    category: "Breakfast",
    tags: ["High Fiber", "Vegetarian", "Weekend"]
  },
  {
    id: 6,
    title: "Orange Honey Crepes",
    description: "Light, delicate crepes with a bright citrus and honey filling that's perfect for brunch.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 220,
    prepTime: 30,
    category: "Breakfast",
    tags: ["Low Fat", "Vegetarian", "Sweet"]
  },
  {
    id: 7,
    title: "Citrus Infused Honey",
    description: "A versatile condiment that adds bright, floral notes to tea, yogurt, or toast.",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw3fHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 60,
    prepTime: 10,
    category: "Condiments",
    tags: ["Vegan", "Sugar-Free", "Quick"]
  },
  {
    id: 8,
    title: "Veggie Burger Delight",
    description: "A hearty plant-based burger that's packed with protein and garden-fresh flavors.",
    image: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw4fHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 340,
    prepTime: 40,
    category: "Lunch",
    tags: ["High Protein", "Vegan", "Hearty"]
  },
  {
    id: 9,
    title: "Blueberry Scones",
    description: "Tender whole-grain scones bursting with fresh blueberries and a hint of lemon.",
    image: "https://images.unsplash.com/photo-1464411335145-a52ac26409ad?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw5fHxoZWFsdGh5JTIwZm9vZCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwbWVhbCUyMHBsYW5uaW5nJTIwcmVjaXBlc3xlbnwwfHx8fDE3NDQyNzg5NTB8MA&ixlib=rb-4.0.3",
    calories: 240,
    prepTime: 35,
    category: "Breakfast",
    tags: ["Whole Grain", "Vegetarian", "Baking"]
  },
  {
    id: 10,
    title: "Macaron Assortment",
    description: "Delicate almond flour cookies with natural food coloring and seasonal fillings.",
    image: "https://images.unsplash.com/photo-1489069313310-63735a4f3010?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxMHx8aGVhbHRoeSUyMGZvb2QlMjBvcmdhbmljJTIwdmVnZXRhYmxlcyUyMG1lYWwlMjBwbGFubmluZyUyMHJlY2lwZXN8ZW58MHx8fHwxNzQ0Mjc4OTUwfDA&ixlib=rb-4.0.3",
    calories: 180,
    prepTime: 90,
    category: "Desserts",
    tags: ["Gluten-Free", "Vegetarian", "Special Occasion"]
  }
];

export const mealPlans: MealPlan[] = [
  {
    id: 1,
    title: "Spring Detox Plan",
    description: "Light, cleansing meals designed to help you feel refreshed and energized for spring.",
    recipes: [recipes[0], recipes[1]]
  },
  {
    id: 2,
    title: "Protein Power Plan",
    description: "High-protein meals to support muscle growth and recovery after workouts.",
    recipes: [recipes[0], recipes[3]]
  },
  {
    id: 3,
    title: "Quick & Easy Plan",
    description: "Simple meals that take 20 minutes or less to prepare, perfect for busy weekdays.",
    recipes: [recipes[2], recipes[3]]
  }
];

export const healthGoals: HealthGoal[] = [
  {
    id: 1,
    title: "Daily Water Intake",
    target: 8,
    current: 5,
    unit: "glasses",
    icon: "Droplet"
  },
  {
    id: 2,
    title: "Weekly Exercise",
    target: 5,
    current: 3,
    unit: "days",
    icon: "Activity"
  },
  {
    id: 3,
    title: "Mindful Meals",
    target: 21,
    current: 15,
    unit: "meals",
    icon: "BookOpen"
  },
  {
    id: 4,
    title: "Fruit & Veggie Servings",
    target: 35,
    current: 22,
    unit: "servings",
    icon: "Droplet"
  }
];

export const groceryItems: GroceryItem[] = [
  {
    id: 1,
    name: "Organic Eggs",
    quantity: 12,
    unit: "pcs",
    checked: false,
    category: "Dairy & Eggs"
  },
  {
    id: 2,
    name: "Baby Spinach",
    quantity: 1,
    unit: "bunch",
    checked: false,
    category: "Vegetables"
  },
  {
    id: 3,
    name: "Free-Range Chicken",
    quantity: 500,
    unit: "g",
    checked: false,
    category: "Proteins"
  },
  {
    id: 4,
    name: "Organic Bell Peppers",
    quantity: 3,
    unit: "pcs",
    checked: false,
    category: "Vegetables"
  },
  {
    id: 5,
    name: "Greek Yogurt",
    quantity: 500,
    unit: "g",
    checked: false,
    category: "Dairy & Eggs"
  },
  {
    id: 6,
    name: "Organic Popcorn Kernels",
    quantity: 250,
    unit: "g",
    checked: false,
    category: "Snacks"
  },
  {
    id: 7,
    name: "Fresh Strawberries",
    quantity: 1,
    unit: "box",
    checked: false,
    category: "Fruits"
  },
  {
    id: 8,
    name: "Organic Oats",
    quantity: 500,
    unit: "g",
    checked: false,
    category: "Grains"
  }
];
 