import  { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import GroceryList from './pages/GroceryList';
import Wellness from './pages/Wellness';
import Profile from './pages/Profile';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes with Layout */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryDetail />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
 