
const userEndpoints = {
  
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  

  login: (email, password) => {
    if (email && password) {
      const demoUser = {
        id: '1',
        name: 'Demo User',
        email: email,
        preferences: {
          dietType: 'balanced',
          allergies: [],
          goals: ['weight-management', 'healthy-eating']
        },
        savedRecipes: []
      };
      
      localStorage.setItem('user', JSON.stringify(demoUser));
      return demoUser;
    }
    
    throw new Error('Invalid credentials');
  },
  
 
  updateUserProfile: (userData) => {
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      const updatedUser = { ...JSON.parse(currentUser), ...userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    }
    
    throw new Error('User not found');
  }
};

// Recipe endpoints
const recipeEndpoints = {
  
  getAllRecipes: () => {
    return JSON.parse(localStorage.getItem('recipes') || '[]');
  },
  
  
  getRecipeById: (id) => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find(r => r.id === id);
    
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    
    return recipe;
  },
  
  
  getFeaturedRecipes: () => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    return recipes.filter(r => r.featured);
  },
  
 
  getRecipesByCategory: (categoryId) => {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    return recipes.filter(r => r.categoryId === categoryId);
  }
};

// Category endpoints
const categoryEndpoints = {
 
  getAllCategories: () => {
    return JSON.parse(localStorage.getItem('categories') || '[]');
  },
  
 
  getCategoryById: (id) => {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    const category = categories.find(c => c.id === id);
    
    if (!category) {
      throw new Error('Category not found');
    }
    
    return category;
  }
};

// Grocery list endpoints
const groceryListEndpoints = {
  
  getGroceryList: () => {
    return JSON.parse(localStorage.getItem('groceryList') || '[]');
  },
  

  addToGroceryList: (items) => {
    const currentList = JSON.parse(localStorage.getItem('groceryList') || '[]');
    const updatedList = [...currentList];
    
    items.forEach(item => {
      if (!currentList.some(existingItem => existingItem.name === item.name)) {
        updatedList.push(item);
      }
    });
    
    localStorage.setItem('groceryList', JSON.stringify(updatedList));
    return updatedList;
  },
  
  
  updateGroceryItem: (id, updates) => {
    const currentList = JSON.parse(localStorage.getItem('groceryList') || '[]');
    const updatedList = currentList.map(item => 
      item.id === id ? { ...item, ...updates } : item
    );
    
    localStorage.setItem('groceryList', JSON.stringify(updatedList));
    return updatedList;
  },
  
  
  removeFromGroceryList: (id) => {
    const currentList = JSON.parse(localStorage.getItem('groceryList') || '[]');
    const updatedList = currentList.filter(item => item.id !== id);
    
    localStorage.setItem('groceryList', JSON.stringify(updatedList));
    return updatedList;
  }
};

// Wellness endpoints
const wellnessEndpoints = {
  
  getWellnessGoals: () => {
    return JSON.parse(localStorage.getItem('wellness_goals') || '[]');
  },
  
 
  addWellnessGoal: (goal) => {
    const currentGoals = JSON.parse(localStorage.getItem('wellness_goals') || '[]');
    const newGoal = {
      id: Date.now().toString(),
      ...goal,
      completed: false
    };
    
    const updatedGoals = [...currentGoals, newGoal];
    localStorage.setItem('wellness_goals', JSON.stringify(updatedGoals));
    return updatedGoals;
  },
  
 
  updateWellnessGoal: (id, updates) => {
    const currentGoals = JSON.parse(localStorage.getItem('wellness_goals') || '[]');
    const updatedGoals = currentGoals.map(goal => 
      goal.id === id ? { ...goal, ...updates } : goal
    );
    
    localStorage.setItem('wellness_goals', JSON.stringify(updatedGoals));
    return updatedGoals;
  },
  
  
  deleteWellnessGoal: (id) => {
    const currentGoals = JSON.parse(localStorage.getItem('wellness_goals') || '[]');
    const updatedGoals = currentGoals.filter(goal => goal.id !== id);
    
    localStorage.setItem('wellness_goals', JSON.stringify(updatedGoals));
    return updatedGoals;
  },
  
 
  getWellnessStats: () => {
    return {
      waterIntake: {
        current: 6,
        target: 8,
        unit: 'glasses'
      },
      exercise: {
        current: 3,
        target: 5,
        unit: 'days'
      },
      nutrition: {
        score: 80,
        rating: 'Good'
      },
      weeklyActivity: [40, 65, 50, 80, 70, 30, 50]
    };
  }
};

// Export all endpoints
export const server = {
  user: userEndpoints,
  recipes: recipeEndpoints,
  categories: categoryEndpoints,
  groceryList: groceryListEndpoints,
  wellness: wellnessEndpoints
};
 