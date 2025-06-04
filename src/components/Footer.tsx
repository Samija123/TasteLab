import  { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">TasteLab</span>
            </div>
            <p className="text-sm text-primary-light">
              Your journey to balanced nutrition starts here. Personalized meal plans, recipes, and wellness tracking.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-sm hover:text-secondary">Home</Link>
              </li>
              <li>
                <Link to="/recipes" className="text-sm hover:text-secondary">Recipes</Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm hover:text-secondary">Categories</Link>
              </li>
              <li>
                <Link to="/wellness" className="text-sm hover:text-secondary">Wellness Tracker</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm hover:text-secondary">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-secondary">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-secondary">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">support@tastelab.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">-378 60 326-6318</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">Sarajevo</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} TasteLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
 