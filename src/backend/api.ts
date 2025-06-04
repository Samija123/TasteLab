
interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: number;
  servings: number;
  dietType: string;
  categoryId: string;
  featured: boolean;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
    sugar: string;
  };
}

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  recipeCount: number;
}

// Sample data
const sampleCategories: Category[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right with nutritious breakfast recipes',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwZm9vZCUyMGNvb2tpbmclMjBpbmdyZWRpZW50cyUyMHZlZ2V0YWJsZXMlMjBmcnVpdHN8ZW58MHx8fHwxNzQ5MDM3MTg2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200',
    recipeCount: 6
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Quick and satisfying lunch ideas for busy days',
    image: 'https://images.unsplash.com/photo-1536329639134-ade172b2fea0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    recipeCount: 8
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Nutritious dinner recipes to end your day on a healthy note',
    image: 'https://plus.unsplash.com/premium_photo-1669557208969-737d6ab1c9fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    recipeCount: 10
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Healthy treats to satisfy your sweet tooth',
    image: 'https://plus.unsplash.com/premium_photo-1681826507324-0b3c43928753?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    recipeCount: 5
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Nutritious bites for when hunger strikes between meals',
    image: 'https://images.unsplash.com/photo-1707032207694-380b8cf0e831?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    recipeCount: 7
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh and vibrant salads for any occasion',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop',
    recipeCount: 9
  }
];

const sampleRecipes: Recipe[] = [
  {
    id: 'avocado-toast',
    title: 'Avocado Toast with Poached Eggs',
    description: 'Start your day with this nutrient-packed breakfast featuring creamy avocado and protein-rich eggs on whole grain toast.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop',
    time: 15,
    servings: 2,
    dietType: 'vegetarian',
    categoryId: 'breakfast',
    featured: true,
    ingredients: [
      { name: 'whole grain bread', amount: 2, unit: 'slices' },
      { name: 'ripe avocado', amount: 1, unit: 'whole' },
      { name: 'eggs', amount: 2, unit: 'large' },
      { name: 'lemon juice', amount: 1, unit: 'tsp' },
      { name: 'red pepper flakes', amount: 0.25, unit: 'tsp' },
      { name: 'salt', amount: 0.25, unit: 'tsp' },
      { name: 'black pepper', amount: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Toast the bread slices until golden and crisp.',
      'In a small bowl, mash the avocado with lemon juice, salt, and black pepper.',
      'Bring a pot of water to a gentle simmer. Add a splash of vinegar.',
      'Crack each egg into a small cup, then carefully slip into the simmering water.',
      'Poach eggs for 3-4 minutes for a runny yolk.',
      'Spread the mashed avocado on the toast slices.',
      'Top each slice with a poached egg, and sprinkle with red pepper flakes.',
      'Serve immediately.'
    ],
    nutrition: {
      calories: '320 kcal',
      protein: '15g',
      carbs: '28g',
      fat: '18g',
      fiber: '8g',
      sugar: '2g'
    }
  },
  {
    id: 'berry-smoothie-bowl',
    title: 'Berry Smoothie Bowl',
    description: 'A nutritious and Instagram-worthy breakfast bowl packed with antioxidants and topped with fresh fruits and nuts.',
    image: 'https://images.unsplash.com/photo-1640126219893-6c869dbe9bd0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: 10,
    servings: 1,
    dietType: 'vegan',
    categoryId: 'breakfast',
    featured: true,
    ingredients: [
      { name: 'frozen mixed berries', amount: 1, unit: 'cup' },
      { name: 'banana', amount: 1, unit: 'ripe' },
      { name: 'plant-based milk', amount: 0.5, unit: 'cup' },
      { name: 'chia seeds', amount: 1, unit: 'tbsp' },
      { name: 'fresh berries', amount: 0.25, unit: 'cup' },
      { name: 'granola', amount: 2, unit: 'tbsp' },
      { name: 'almond butter', amount: 1, unit: 'tbsp' }
    ],
    instructions: [
      'In a blender, combine frozen berries, banana, and plant milk.',
      'Blend until smooth and creamy. The mixture should be thick enough to eat with a spoon.',
      'Pour into a bowl and top with fresh berries, granola, and a drizzle of almond butter.',
      'Sprinkle with chia seeds and serve immediately.'
    ],
    nutrition: {
      calories: '380 kcal',
      protein: '10g',
      carbs: '65g',
      fat: '12g',
      fiber: '14g',
      sugar: '30g'
    }
  },
  {
    id: 'mediterranean-salad',
    title: 'Mediterranean Chickpea Salad',
    description: 'A protein-rich, refreshing salad featuring chickpeas, cucumber, and feta cheese with a light lemon dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
    time: 15,
    servings: 2,
    dietType: 'vegetarian',
    categoryId: 'lunch',
    featured: true,
    ingredients: [
      { name: 'chickpeas', amount: 1, unit: 'can (15 oz), drained' },
      { name: 'cucumber', amount: 1, unit: 'medium, diced' },
      { name: 'cherry tomatoes', amount: 1, unit: 'cup, halved' },
      { name: 'red onion', amount: 0.25, unit: 'cup, diced' },
      { name: 'feta cheese', amount: 0.5, unit: 'cup, crumbled' },
      { name: 'kalamata olives', amount: 0.25, unit: 'cup, pitted' },
      { name: 'extra virgin olive oil', amount: 2, unit: 'tbsp' },
      { name: 'lemon juice', amount: 1, unit: 'tbsp' },
      { name: 'dried oregano', amount: 0.5, unit: 'tsp' },
      { name: 'salt', amount: 0.25, unit: 'tsp' },
      { name: 'black pepper', amount: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'In a large bowl, combine chickpeas, cucumber, tomatoes, red onion, feta, and olives.',
      'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.',
      'Pour dressing over the salad and toss gently to combine.',
      'Let sit for 10 minutes to allow flavors to meld before serving.',
      'Serve chilled or at room temperature.'
    ],
    nutrition: {
      calories: '380 kcal',
      protein: '15g',
      carbs: '35g',
      fat: '20g',
      fiber: '10g',
      sugar: '5g'
    }
  },
  {
    id: 'quinoa-veggie-bowl',
    title: 'Quinoa Veggie Power Bowl',
    description: 'A nourishing bowl of protein-rich quinoa topped with roasted vegetables and a tahini dressing.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop',
    time: 30,
    servings: 2,
    dietType: 'vegan',
    categoryId: 'lunch',
    featured: false,
    ingredients: [
      { name: 'quinoa', amount: 1, unit: 'cup, uncooked' },
      { name: 'sweet potato', amount: 1, unit: 'medium, diced' },
      { name: 'broccoli', amount: 1, unit: 'cup, florets' },
      { name: 'red bell pepper', amount: 1, unit: 'sliced' },
      { name: 'chickpeas', amount: 1, unit: 'can (15 oz), drained' },
      { name: 'olive oil', amount: 2, unit: 'tbsp' },
      { name: 'tahini', amount: 2, unit: 'tbsp' },
      { name: 'lemon juice', amount: 1, unit: 'tbsp' },
      { name: 'maple syrup', amount: 1, unit: 'tsp' },
      { name: 'garlic', amount: 1, unit: 'clove, minced' },
      { name: 'salt', amount: 0.5, unit: 'tsp' },
      { name: 'black pepper', amount: 0.25, unit: 'tsp' },
      { name: 'avocado', amount: 0.5, unit: 'sliced' }
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Rinse quinoa and cook according to package instructions.',
      'Toss sweet potato, broccoli, and bell pepper with 1 tbsp olive oil, salt, and pepper.',
      'Spread vegetables on a baking sheet and roast for 20-25 minutes until tender.',
      'In a small bowl, whisk together tahini, lemon juice, remaining olive oil, maple syrup, garlic, and a pinch of salt.',
      'Assemble bowls with quinoa as the base, topped with roasted vegetables, chickpeas, and avocado.',
      'Drizzle with tahini dressing and serve.'
    ],
    nutrition: {
      calories: '480 kcal',
      protein: '18g',
      carbs: '65g',
      fat: '20g',
      fiber: '14g',
      sugar: '8g'
    }
  },
  {
    id: 'salmon-asparagus',
    title: 'Baked Salmon with Asparagus',
    description: 'Omega-rich salmon fillet baked to perfection with lemon and herbs, served with roasted asparagus.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop',
    time: 25,
    servings: 2,
    dietType: 'paleo',
    categoryId: 'dinner',
    featured: true,
    ingredients: [
      { name: 'salmon fillets', amount: 2, unit: '6 oz each' },
      { name: 'asparagus', amount: 1, unit: 'bunch, trimmed' },
      { name: 'olive oil', amount: 2, unit: 'tbsp' },
      { name: 'lemon', amount: 1, unit: 'sliced' },
      { name: 'garlic', amount: 2, unit: 'cloves, minced' },
      { name: 'fresh dill', amount: 2, unit: 'tbsp, chopped' },
      { name: 'salt', amount: 0.5, unit: 'tsp' },
      { name: 'black pepper', amount: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Place salmon fillets on a baking sheet lined with parchment paper.',
      'Arrange asparagus around the salmon.',
      'Drizzle everything with olive oil and sprinkle with minced garlic.',
      'Season with salt, pepper, and fresh dill.',
      'Place lemon slices on top of the salmon.',
      'Bake for 12-15 minutes until salmon is cooked through and asparagus is tender.',
      'Serve immediately with additional lemon wedges if desired.'
    ],
    nutrition: {
      calories: '390 kcal',
      protein: '35g',
      carbs: '10g',
      fat: '24g',
      fiber: '4g',
      sugar: '3g'
    }
  },
  {
    id: 'lentil-curry',
    title: 'Creamy Coconut Lentil Curry',
    description: 'A hearty, plant-based curry made with red lentils, coconut milk, and warming spices.',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=2487&auto=format&fit=crop',
    time: 35,
    servings: 4,
    dietType: 'vegan',
    categoryId: 'dinner',
    featured: false,
    ingredients: [
      { name: 'red lentils', amount: 1.5, unit: 'cups' },
      { name: 'coconut milk', amount: 1, unit: 'can (14 oz)' },
      { name: 'diced tomatoes', amount: 1, unit: 'can (14 oz)' },
      { name: 'onion', amount: 1, unit: 'medium, diced' },
      { name: 'garlic', amount: 3, unit: 'cloves, minced' },
      { name: 'ginger', amount: 1, unit: 'tbsp, grated' },
      { name: 'curry powder', amount: 2, unit: 'tbsp' },
      { name: 'turmeric', amount: 1, unit: 'tsp' },
      { name: 'cumin', amount: 1, unit: 'tsp' },
      { name: 'vegetable broth', amount: 2, unit: 'cups' },
      { name: 'spinach', amount: 2, unit: 'cups, fresh' },
      { name: 'olive oil', amount: 1, unit: 'tbsp' },
      { name: 'salt', amount: 0.5, unit: 'tsp' },
      { name: 'black pepper', amount: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat.',
      'Add onion and cook until translucent, about 4-5 minutes.',
      'Add garlic and ginger, cook for another minute until fragrant.',
      'Stir in curry powder, turmeric, and cumin, cooking for 30 seconds to toast the spices.',
      'Add lentils, diced tomatoes, coconut milk, and vegetable broth. Bring to a boil.',
      'Reduce heat to low, cover, and simmer for 20-25 minutes until lentils are tender.',
      'Stir in spinach and cook until wilted, about 2 minutes.',
      'Season with salt and pepper to taste.',
      'Serve over rice or with naan bread.'
    ],
    nutrition: {
      calories: '320 kcal',
      protein: '16g',
      carbs: '45g',
      fat: '12g',
      fiber: '8g',
      sugar: '5g'
    }
  },
  {
    id: 'dark-chocolate-avocado-mousse',
    title: 'Dark Chocolate Avocado Mousse',
    description: 'A rich, creamy dessert made with avocados and dark chocolate that\'s surprisingly healthy.',
    image: 'https://images.unsplash.com/photo-1603032305813-be7441bc1037?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: 15,
    servings: 4,
    dietType: 'vegan',
    categoryId: 'desserts',
    featured: true,
    ingredients: [
      { name: 'ripe avocados', amount: 2, unit: 'large' },
      { name: 'dark chocolate', amount: 6, unit: 'oz, melted' },
      { name: 'unsweetened cocoa powder', amount: 3, unit: 'tbsp' },
      { name: 'maple syrup', amount: 3, unit: 'tbsp' },
      { name: 'vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'almond milk', amount: 2, unit: 'tbsp' },
      { name: 'salt', amount: 0.25, unit: 'tsp' },
      { name: 'fresh berries', amount: 0.5, unit: 'cup (for topping)' }
    ],
    instructions: [
      'Cut avocados in half, remove pits, and scoop flesh into a food processor.',
      'Add melted chocolate, cocoa powder, maple syrup, vanilla extract, almond milk, and salt.',
      'Process until completely smooth, scraping down the sides as needed.',
      'Taste and adjust sweetness if necessary.',
      'Spoon mixture into serving cups and refrigerate for at least 2 hours.',
      'Before serving, top with fresh berries and a sprinkle of cocoa powder.'
    ],
    nutrition: {
      calories: '280 kcal',
      protein: '4g',
      carbs: '25g',
      fat: '22g',
      fiber: '9g',
      sugar: '14g'
    }
  },
 {
  id: 'banana-pancakes',
  title: 'Fluffy Banana Pancakes',
  description: 'Soft, sweet pancakes made with ripe bananas and a hint of cinnamon.',
  image: 'https://images.unsplash.com/photo-1695046176390-f8c97adb7b17?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  time: 20,
  servings: 4,
  dietType: 'vegetarian',
  categoryId: 'breakfast',
  featured: true,
  ingredients: [
    { name: 'ripe bananas', amount: 2, unit: 'large' },
    { name: 'eggs', amount: 2, unit: '' },
    { name: 'milk', amount: 0.5, unit: 'cup' },
    { name: 'flour', amount: 1, unit: 'cup' },
    { name: 'baking powder', amount: 1, unit: 'tsp' },
    { name: 'cinnamon', amount: 0.5, unit: 'tsp' },
    { name: 'salt', amount: 0.25, unit: 'tsp' },
    { name: 'butter or oil', amount: 1, unit: 'tbsp' }
  ],
  instructions: [
    'Mash bananas in a bowl.',
    'Whisk in eggs and milk.',
    'Add flour, baking powder, cinnamon, and salt. Mix until combined.',
    'Heat butter/oil in a pan over medium heat.',
    'Pour batter into pan and cook until bubbles form. Flip and cook other side.',
    'Serve warm with syrup or fruit.'
  ],
  nutrition: {
    calories: '210 kcal',
    protein: '6g',
    carbs: '30g',
    fat: '7g',
    fiber: '2g',
    sugar: '8g'
  }
},
{
  id: 'chicken-caesar-wrap',
  title: 'Chicken Caesar Wrap',
  description: 'A quick and tasty lunch wrap with grilled chicken, romaine, and Caesar dressing.',
  image: 'https://images.unsplash.com/photo-1666819615040-eff5e52c778a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  time: 15,
  servings: 2,
  dietType: 'non-vegetarian',
  categoryId: 'lunch',
  featured: true,
  ingredients: [
    { name: 'tortilla wraps', amount: 2, unit: 'large' },
    { name: 'grilled chicken breast', amount: 1, unit: 'cup, sliced' },
    { name: 'romaine lettuce', amount: 1, unit: 'cup, chopped' },
    { name: 'Caesar dressing', amount: 2, unit: 'tbsp' },
    { name: 'Parmesan cheese', amount: 2, unit: 'tbsp, shredded' },
    { name: 'croutons', amount: 0.25, unit: 'cup, crushed' }
  ],
  instructions: [
    'Warm tortillas slightly for easy rolling.',
    'Toss lettuce with dressing, cheese, and croutons.',
    'Add sliced chicken to the mix.',
    'Place filling in the center of each tortilla and roll up.',
    'Slice in half and serve.'
  ],
  nutrition: {
    calories: '430 kcal',
    protein: '28g',
    carbs: '30g',
    fat: '22g',
    fiber: '3g',
    sugar: '2g'
  }
},
{
  id: 'grilled-salmon',
  title: 'Grilled Lemon Garlic Salmon',
  description: 'Succulent salmon fillets grilled with a zesty lemon garlic marinade.',
  image: 'https://images.unsplash.com/photo-1630914441316-6d95bbd00caf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  time: 25,
  servings: 4,
  dietType: 'pescatarian',
  categoryId: 'dinner',
  featured: true,
  ingredients: [
    { name: 'salmon fillets', amount: 4, unit: '6 oz each' },
    { name: 'lemon juice', amount: 2, unit: 'tbsp' },
    { name: 'garlic', amount: 3, unit: 'cloves, minced' },
    { name: 'olive oil', amount: 2, unit: 'tbsp' },
    { name: 'salt', amount: 0.5, unit: 'tsp' },
    { name: 'black pepper', amount: 0.25, unit: 'tsp' }
  ],
  instructions: [
    'Combine lemon juice, garlic, olive oil, salt, and pepper in a bowl.',
    'Marinate salmon for 15 minutes.',
    'Grill salmon skin-side down over medium heat for 4-5 minutes per side.',
    'Serve with steamed vegetables or rice.'
  ],
  nutrition: {
    calories: '360 kcal',
    protein: '34g',
    carbs: '2g',
    fat: '24g',
    fiber: '0g',
    sugar: '0g'
  }
},
{
  id: 'chocolate-brownies',
  title: 'Fudgy Chocolate Brownies',
  description: 'Rich and chewy brownies made with dark chocolate and cocoa powder.',
  image: 'https://cafedelites.com/wp-content/uploads/2016/08/Fudgy-Cocoa-Brownies-13.jpg',
  time: 40,
  servings: 9,
  dietType: 'vegetarian',
  categoryId: 'dessert',
  featured: true,
  ingredients: [
    { name: 'dark chocolate', amount: 1, unit: 'cup, chopped' },
    { name: 'butter', amount: 0.5, unit: 'cup' },
    { name: 'sugar', amount: 1, unit: 'cup' },
    { name: 'eggs', amount: 2, unit: '' },
    { name: 'vanilla extract', amount: 1, unit: 'tsp' },
    { name: 'flour', amount: 0.75, unit: 'cup' },
    { name: 'cocoa powder', amount: 0.25, unit: 'cup' },
    { name: 'salt', amount: 0.25, unit: 'tsp' }
  ],
  instructions: [
    'Preheat oven to 350°F (175°C).',
    'Melt chocolate and butter together.',
    'Whisk in sugar, eggs, and vanilla.',
    'Stir in flour, cocoa powder, and salt.',
    'Pour into greased baking pan and bake for 25–30 minutes.',
    'Cool before cutting into squares.'
  ],
  nutrition: {
    calories: '280 kcal',
    protein: '3g',
    carbs: '32g',
    fat: '16g',
    fiber: '2g',
    sugar: '22g'
  }
},
{
  id: 'mango-smoothie',
  title: 'Tropical Mango Smoothie',
  description: 'A refreshing and creamy mango smoothie with a tropical twist.',
  image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  time: 5,
  servings: 2,
  dietType: 'vegan',
  categoryId: 'beverage',
  featured: true,
  ingredients: [
    { name: 'ripe mango', amount: 1, unit: 'large, peeled and chopped' },
    { name: 'banana', amount: 1, unit: 'medium' },
    { name: 'coconut milk', amount: 1, unit: 'cup' },
    { name: 'orange juice', amount: 0.5, unit: 'cup' },
    { name: 'ice cubes', amount: 1, unit: 'cup' }
  ],
  instructions: [
    'Combine all ingredients in a blender.',
    'Blend until smooth.',
    'Pour into glasses and serve chilled.'
  ],
  nutrition: {
    calories: '180 kcal',
    protein: '2g',
    carbs: '35g',
    fat: '4g',
    fiber: '4g',
    sugar: '25g'
  }
},
{
    id: 'avocado-toast-egg',
    title: 'Avocado Toast with Poached Egg',
    description: 'Creamy avocado on crispy toast topped with a runny poached egg.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2487&auto=format&fit=crop',
    time: 15,
    servings: 1,
    dietType: 'vegetarian',
    categoryId: 'breakfast',
    featured: true,
    ingredients: [
      { name: 'bread slices', amount: 2, unit: '' },
      { name: 'avocado', amount: 1, unit: 'ripe' },
      { name: 'egg', amount: 1, unit: '' },
      { name: 'lemon juice', amount: 0.5, unit: 'tsp' },
      { name: 'salt', amount: 0.25, unit: 'tsp' },
      { name: 'black pepper', amount: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Toast the bread slices.',
      'Mash avocado with lemon juice, salt, and pepper.',
      'Poach the egg to your liking.',
      'Spread avocado on toast and top with the poached egg.',
      'Serve immediately.'
    ],
    nutrition: {
      calories: '320 kcal',
      protein: '10g',
      carbs: '30g',
      fat: '18g',
      fiber: '7g',
      sugar: '2g'
    }
  },
  {
    id: 'oatmeal-berries',
    title: 'Warm Oatmeal with Berries',
    description: 'Hearty oats cooked to perfection and topped with fresh berries.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2487&auto=format&fit=crop',
    time: 10,
    servings: 1,
    dietType: 'vegetarian',
    categoryId: 'breakfast',
    featured: true,
    ingredients: [
      { name: 'rolled oats', amount: 0.5, unit: 'cup' },
      { name: 'milk or plant milk', amount: 1, unit: 'cup' },
      { name: 'mixed berries', amount: 0.5, unit: 'cup' },
      { name: 'maple syrup', amount: 1, unit: 'tbsp' },
      { name: 'cinnamon', amount: 0.25, unit: 'tsp' }
    ],
    instructions: [
      'Combine oats and milk in a pot and bring to a boil.',
      'Reduce heat and simmer for 5 minutes, stirring occasionally.',
      'Top with berries, cinnamon, and maple syrup.',
      'Serve warm.'
    ],
    nutrition: {
      calories: '280 kcal',
      protein: '6g',
      carbs: '40g',
      fat: '7g',
      fiber: '5g',
      sugar: '10g'
    }
  },
  {
    id: 'quinoa-bowl',
    title: 'Mediterranean Quinoa Bowl',
    description: 'Quinoa topped with chickpeas, cucumber, tomato, and tzatziki.',
    image: 'https://plus.unsplash.com/premium_photo-1705003210245-41b4773b5bb5?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: 25,
    servings: 2,
    dietType: 'vegetarian',
    categoryId: 'lunch',
    featured: true,
    ingredients: [
      { name: 'quinoa', amount: 1, unit: 'cup, cooked' },
      { name: 'chickpeas', amount: 0.5, unit: 'cup, cooked' },
      { name: 'cucumber', amount: 0.5, unit: 'cup, diced' },
      { name: 'cherry tomatoes', amount: 0.5, unit: 'cup, halved' },
      { name: 'tzatziki sauce', amount: 2, unit: 'tbsp' }
    ],
    instructions: [
      'In a bowl, layer quinoa, chickpeas, cucumber, and tomatoes.',
      'Top with tzatziki and serve chilled.'
    ],
    nutrition: {
      calories: '350 kcal',
      protein: '14g',
      carbs: '40g',
      fat: '14g',
      fiber: '7g',
      sugar: '4g'
    }
  },
  {
    id: 'creamy-tomato-pasta',
    title: 'Creamy Tomato Pasta',
    description: 'Pasta in a creamy tomato basil sauce topped with parmesan.',
    image: 'https://images.unsplash.com/photo-1676300184847-4ee4030409c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: 30,
    servings: 2,
    dietType: 'vegetarian',
    categoryId: 'dinner',
    featured: true,
    ingredients: [
      { name: 'pasta', amount: 2, unit: 'cups, cooked' },
      { name: 'tomato sauce', amount: 1, unit: 'cup' },
      { name: 'heavy cream', amount: 0.5, unit: 'cup' },
      { name: 'garlic', amount: 2, unit: 'cloves, minced' },
      { name: 'parmesan', amount: 0.25, unit: 'cup' }
    ],
    instructions: [
      'Sauté garlic, add tomato sauce and cream.',
      'Simmer and toss with pasta.',
      'Top with parmesan and serve.'
    ],
    nutrition: {
      calories: '500 kcal',
      protein: '15g',
      carbs: '60g',
      fat: '22g',
      fiber: '4g',
      sugar: '6g'
    }
  },
  {
    id: 'beef-stir-fry',
    title: 'Beef and Broccoli Stir-Fry',
    description: 'Tender beef strips and broccoli in a savory sauce.',
    image: 'https://plus.unsplash.com/premium_photo-1664478238082-3df93e48c491?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: 25,
    servings: 2,
    dietType: 'non-vegetarian',
    categoryId: 'dinner',
    featured: true,
    ingredients: [
      { name: 'beef sirloin', amount: 1, unit: 'cup, sliced' },
      { name: 'broccoli florets', amount: 1.5, unit: 'cups' },
      { name: 'soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'garlic', amount: 2, unit: 'cloves, minced' },
      { name: 'cornstarch', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Cook beef in oil, set aside.',
      'Stir-fry broccoli and garlic.',
      'Add beef back with sauce and cook until thickened.'
    ],
    nutrition: {
      calories: '420 kcal',
      protein: '35g',
      carbs: '15g',
      fat: '25g',
      fiber: '3g',
      sugar: '4g'
    }
  },
   {
    id: "roasted-chickpeas",
    title: "Crispy Roasted Chickpeas",
    description: "A crunchy, protein-packed snack that's easy to make and great for munching.",
    image: "https://images.unsplash.com/photo-1705925438840-86614d4f7155?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 35,
    servings: 4,
    dietType: "vegan",
    categoryId: "snacks",
    featured: true,
    ingredients: [
      { name: "canned chickpeas", amount: 1.5, unit: "cups (drained and rinsed)" },
      { name: "olive oil", amount: 1, unit: "tbsp" },
      { name: "smoked paprika", amount: 1, unit: "tsp" },
      { name: "garlic powder", amount: 0.5, unit: "tsp" },
      { name: "salt", amount: 0.25, unit: "tsp" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Pat chickpeas dry with a paper towel.",
      "Toss chickpeas with olive oil and spices.",
      "Spread on a baking sheet in a single layer.",
      "Roast for 30–35 minutes until crispy, shaking halfway through.",
      "Cool before serving."
    ],
    nutrition: {
      calories: "160 kcal",
      protein: "7g",
      carbs: "18g",
      fat: "7g",
      fiber: "6g",
      sugar: "2g"
    }
  },
  {
    id: "apple-nachos",
    title: "Apple Nachos",
    description: "Fresh apple slices topped with nut butter, granola, and chocolate for a sweet, healthy treat.",
    image: "https://images.unsplash.com/photo-1551848739-00f229d30d81?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 10,
    servings: 2,
    dietType: "vegetarian",
    categoryId: "snacks",
    featured: true,
    ingredients: [
      { name: "apple", amount: 1, unit: "large, sliced" },
      { name: "peanut butter", amount: 2, unit: "tbsp (melted)" },
      { name: "granola", amount: 2, unit: "tbsp" },
      { name: "dark chocolate chips", amount: 1, unit: "tbsp" },
      { name: "coconut flakes", amount: 1, unit: "tsp (optional)" }
    ],
    instructions: [
      "Arrange apple slices on a plate.",
      "Drizzle with melted peanut butter.",
      "Sprinkle granola, chocolate chips, and coconut flakes on top.",
      "Serve immediately."
    ],
    nutrition: {
      calories: "180 kcal",
      protein: "3g",
      carbs: "26g",
      fat: "8g",
      fiber: "4g",
      sugar: "18g"
    }
  },
  {
    id: "trail-mix-energy-bites",
    title: "Trail Mix Energy Bites",
    description: "No-bake bites packed with oats, seeds, and dried fruit. Perfect for on-the-go snacking.",
    image: "https://plus.unsplash.com/premium_photo-1687975124441-44de2808d083?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 15,
    servings: 6,
    dietType: "vegetarian",
    categoryId: "snacks",
    featured: true,
    ingredients: [
      { name: "rolled oats", amount: 1, unit: "cup" },
      { name: "peanut butter", amount: 0.5, unit: "cup" },
      { name: "honey or maple syrup", amount: 0.25, unit: "cup" },
      { name: "chia seeds", amount: 1, unit: "tbsp" },
      { name: "mini chocolate chips", amount: 2, unit: "tbsp" },
      { name: "raisins or dried cranberries", amount: 2, unit: "tbsp" }
    ],
    instructions: [
      "Mix all ingredients in a bowl until combined.",
      "Refrigerate for 10 minutes if too sticky.",
      "Roll into bite-sized balls.",
      "Store in fridge for up to 1 week."
    ],
    nutrition: {
      calories: "140 kcal",
      protein: "4g",
      carbs: "15g",
      fat: "7g",
      fiber: "2g",
      sugar: "8g"
    }
  },
  {
    id: "berry-spinach-salad",
    title: "Berry Spinach Salad",
    description: "Fresh spinach tossed with sweet berries, nuts, and a tangy balsamic glaze.",
    image: "https://images.unsplash.com/photo-1564185722618-ae3ffa1ac5aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 10,
    servings: 2,
    dietType: "vegan",
    categoryId: "salads",
    featured: true,
    ingredients: [
      { name: "baby spinach", amount: 3, unit: "cups" },
      { name: "mixed berries", amount: 1, unit: "cup (strawberries, blueberries, raspberries)" },
      { name: "sliced almonds", amount: 2, unit: "tbsp" },
      { name: "red onion", amount: 2, unit: "tbsp, thinly sliced" },
      { name: "balsamic glaze", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Combine spinach, berries, almonds, and red onion in a bowl.",
      "Drizzle with balsamic glaze before serving."
    ],
    nutrition: {
      calories: "120 kcal",
      protein: "2g",
      carbs: "14g",
      fat: "6g",
      fiber: "4g",
      sugar: "8g"
    }
  },
  {
    id: "tropical-quinoa-salad",
    title: "Tropical Quinoa Salad",
    description: "A refreshing salad with mango, pineapple, and mint tossed in lime juice.",
    image: "https://plus.unsplash.com/premium_photo-1704989936092-c41f477cb6e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 20,
    servings: 4,
    dietType: "vegan",
    categoryId: "salads",
    featured: true,
    ingredients: [
      { name: "cooked quinoa", amount: 1.5, unit: "cups" },
      { name: "mango", amount: 1, unit: "cup, diced" },
      { name: "pineapple", amount: 1, unit: "cup, diced" },
      { name: "red bell pepper", amount: 0.5, unit: "cup, diced" },
      { name: "mint leaves", amount: 2, unit: "tbsp, chopped" },
      { name: "lime juice", amount: 2, unit: "tbsp" },
      { name: "olive oil", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Combine all ingredients in a large bowl.",
      "Toss gently and serve chilled."
    ],
    nutrition: {
      calories: "180 kcal",
      protein: "5g",
      carbs: "30g",
      fat: "5g",
      fiber: "4g",
      sugar: "12g"
    }
  },
  {
    id: "watermelon-feta-salad",
    title: "Watermelon Feta Salad",
    description: "Sweet watermelon paired with salty feta and refreshing mint.",
    image: "https://images.unsplash.com/photo-1690921349852-7694d2b2c447?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 10,
    servings: 4,
    dietType: "vegetarian",
    categoryId: "salads",
    featured: true,
    ingredients: [
      { name: "watermelon", amount: 3, unit: "cups, cubed" },
      { name: "feta cheese", amount: 0.5, unit: "cup, crumbled" },
      { name: "mint leaves", amount: 2, unit: "tbsp, chopped" },
      { name: "lime juice", amount: 1, unit: "tbsp" },
      { name: "olive oil", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Combine all ingredients in a large bowl.",
      "Toss gently and serve cold."
    ],
    nutrition: {
      calories: "100 kcal",
      protein: "3g",
      carbs: "11g",
      fat: "5g",
      fiber: "1g",
      sugar: "9g"
    }
  },
  {
    id: "coconut-chia-pudding",
    title: "Coconut Chia Pudding",
    description: "Creamy chia pudding made with coconut milk, perfect for a healthy dessert.",
    image: "https://images.unsplash.com/photo-1651256785597-4efe48fd71f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 5,
    servings: 4,
    dietType: "vegan",
    categoryId: "desserts",
    featured :true,
    ingredients: [
      { name: "chia seeds", amount: 0.25, unit: "cup" },
      { name: "coconut milk", amount: 1, unit: "cup (full fat or light)" },
      { name: "maple syrup", amount: 1.5, unit: "tbsp" },
      { name: "vanilla extract", amount: 0.5, unit: "tsp" },
      { name: "fresh mango or berries", amount: 0.5, unit: "cup (for topping)" }
    ],
    instructions: [
      "Whisk chia seeds, coconut milk, maple syrup, and vanilla in a bowl.",
      "Refrigerate for at least 4 hours or overnight.",
      "Stir well and serve topped with fresh fruit."
    ],
    nutrition: {
      calories: "180 kcal",
      protein: "3g",
      carbs: "14g",
      fat: "12g",
      fiber: "6g",
      sugar: "7g"
    }
  },
  {
    id: "baked-cinnamon-apples",
    title: "Baked Cinnamon Apples",
    description: "Warm, tender apples with cinnamon and a hint of maple syrup—comforting and naturally sweet.",
    image: "https://images.unsplash.com/photo-1703876087705-818f2af21c65?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time: 25,
    servings: 2,
    dietType: "vegan",
    categoryId: "desserts",
    featured: true,
    ingredients: [
      { name: "apples", amount: 2, unit: "medium, sliced" },
      { name: "cinnamon", amount: 1, unit: "tsp" },
      { name: "maple syrup", amount: 1, unit: "tbsp" },
      { name: "coconut oil", amount: 1, unit: "tsp (optional)" },
      { name: "lemon juice", amount: 1, unit: "tsp" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Toss apple slices with remaining ingredients.",
      "Spread in a baking dish and bake for 20–25 minutes, stirring halfway.",
      "Serve warm on its own or with yogurt."
    ],
    nutrition: {
      calories: "120 kcal",
      protein: "1g",
      carbs: "26g",
      fat: "2g",
      fiber: "4g",
      sugar: "18g"
    }
  }
];

// API Methods
export const api = {
  // Initialize mock data
  initializeData: () => {
    localStorage.setItem('categories', JSON.stringify(sampleCategories));
    localStorage.setItem('recipes', JSON.stringify(sampleRecipes));
    return Promise.resolve({ success: true });
  },

  // Categories
  getCategories: () => {
    return Promise.resolve(JSON.parse(localStorage.getItem('categories') || '[]'));
  },

  getCategoryById: (id: string) => {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    const category = categories.find((c: Category) => c.id === id);
    if (!category) {
      return Promise.reject(new Error('Category not found'));
    }
    return Promise.resolve(category);
  },

  // Recipes
  getRecipes: () => {
    return Promise.resolve(JSON.parse(localStorage.getItem('recipes') || '[]'));
  },

  getRecipeById: (id: string) => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find((r: Recipe) => r.id === id);
    if (!recipe) {
      return Promise.reject(new Error('Recipe not found'));
    }
    return Promise.resolve(recipe);
  },

  getFeaturedRecipes: () => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    return Promise.resolve(recipes.filter((r: Recipe) => r.featured));
  },

  getRecipesByCategory: (categoryId: string) => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    return Promise.resolve(recipes.filter((r: Recipe) => r.categoryId === categoryId));
  },

  searchRecipes: (query: string) => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const lowerQuery = query.toLowerCase();
    return Promise.resolve(
      recipes.filter(
        (r: Recipe) =>
          r.title.toLowerCase().includes(lowerQuery) ||
          r.description.toLowerCase().includes(lowerQuery) ||
          r.dietType.toLowerCase().includes(lowerQuery)
      )
    );
  }
};
 