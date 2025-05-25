import  { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Wellness from './pages/Wellness';
import GroceryList from './pages/GroceryList';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/grocery" element={<GroceryList />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
 