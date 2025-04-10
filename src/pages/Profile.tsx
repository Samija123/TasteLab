import  { User, Settings, HelpCircle, Bell, LogOut } from 'lucide-react';

export default function Profile() {
  const menuItems = [
    { icon: <User size={20} />, label: 'Account Information', active: true },
    { icon: <Bell size={20} />, label: 'Notifications', active: false },
    { icon: <Settings size={20} />, label: 'Preferences', active: false },
    { icon: <HelpCircle size={20} />, label: 'Help & Support', active: false }
  ];

  return (
    <div className="py-6">
      <div className="tastelab-container">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Your Profile</h1>
          <p className="text-gray-600">Manage your account settings and preferences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="card overflow-hidden">
              <div className="bg-primary-500 p-6 text-center text-white">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User size={36} className="text-primary-500" />
                </div>
                <h2 className="text-xl font-bold">Samija Hadzic</h2>
                <p className="opacity-90">samija123@gmail.com</p>
              </div>
              
              <div className="p-4">
                <nav className="space-y-1">
                  {menuItems.map((item, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className={`flex items-center p-3 rounded-md ${
                        item.active 
                          ? 'bg-primary-50 text-primary-700' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </a>
                  ))}
                  
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-md text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={20} className="mr-3" />
                    Log Out
                  </a>
                </nav>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Account Information</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="Samija "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="Hadzic"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="Samija123@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="+387 62 987 654"
                    />
                  </div>
                </div>
                
                <h3 className="font-medium text-lg mb-3 mt-6">Health Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Height
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="5'10&quot;"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weight
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="100 lbs"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue="2003-01-15"
                    />
                  </div>
                </div>
                
                <h3 className="font-medium text-lg mb-3">Dietary Preferences</h3>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {['Vegetarian', 'Vegan', 'Gluten-Free', 'Lactose-Free', 'Low-Carb', 'High-Protein'].map((diet, i) => (
                      <label key={i} className="flex items-center p-2 border rounded-md cursor-pointer">
                        <input type="checkbox" className="mr-2" defaultChecked={i === 0 || i === 5} />
                        <span>{diet}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button type="button" className="btn btn-secondary mr-3">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 