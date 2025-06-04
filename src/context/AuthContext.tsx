import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserPreferences {
  dietType: string;
  allergies: string[];
  goals: string[];
}

interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
  savedRecipes: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call to login
    try {
      // In a real app, this would be an API call
      if (email && password) {
        const demoUser = {
          id: '1',
          name: email.split('@')[0], // Use part of email as name
          email: email,
          preferences: {
            dietType: 'balanced',
            allergies: [],
            goals: ['weight-management', 'healthy-eating']
          },
          savedRecipes: []
        };
        
        setUser(demoUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(demoUser));
        return;
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const updateUserPreferences = (preferences: Partial<UserPreferences>) => {
    if (user) {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          ...preferences
        }
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        updateUserPreferences
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
 