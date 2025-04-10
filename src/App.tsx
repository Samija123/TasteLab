import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Wellness from './pages/Wellness';
import Grocery from './pages/Grocery';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <footer className="bg-beige-100 border-t border-beige-200 py-6">
          <div className="tastelab-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="font-serif font-semibold text-primary-700 mr-2">TasteLab</span>
                <span className="text-sm text-gray-500">© 2023 All Rights Reserved</span>
              </div>
              <div className="flex space-x-4 text-sm text-gray-600">
                <a href="#" className="hover:text-primary-700">Privacy Policy</a>
                <a href="#" className="hover:text-primary-700">Terms of Service</a>
                <a href="#" className="hover:text-primary-700">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
 