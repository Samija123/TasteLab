const API_URL = 'http://localhost:5000/api';

// Recipes API
export const getRecipes = async (category: string, search: string) => {
  let url = `${API_URL}/recipes`;
  const params = new URLSearchParams();
  
  if (category && category !== 'all') {
    params.append('category', category);
  }
  
  if (search) {
    params.append('search', search);
  }
  
  if (params.toString()) {
    url += `?${params.toString()}`;
  }
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  
  return response.json();
};

export const getRecipeById = async (id: any) => {
  const response = await fetch(`${API_URL}/recipes/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipe');
  }
  
  return response.json();
};

// Meals API
export const getMeals = async () => {
  const response = await fetch(`${API_URL}/meals`);
  if (!response.ok) {
    throw new Error('Failed to fetch meals');
  }
  
  return response.json();
};


export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return response.json();
};

export const addUser = async (user: any) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  
  if (!response.ok) {
    throw new Error('Failed to add user');
  }
  
  return response.json();
};

// Wellness API
export const getWellnessGoals = async () => {
  const response = await fetch(`${API_URL}/wellness`);
  if (!response.ok) {
    throw new Error('Failed to fetch wellness goals');
  }
  
  return response.json();
};

export const addWellnessGoal = async (goal: any) => {
  const response = await fetch(`${API_URL}/wellness`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goal)
  });
  
  if (!response.ok) {
    throw new Error('Failed to add wellness goal');
  }
  
  return response.json();
};
