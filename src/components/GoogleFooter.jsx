
import React from 'react';
import { Leaf } from 'lucide-react';

const GoogleFooter = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 00">
      {/* Country Section */}
      <div className="px-6 py-3 border-b border-gray-300">
        <p className="text-gray-600  text-sm">India</p>
      </div>
      
      {/* Links Section */}
      <div className="px-6 py-3 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600  space-y-3 sm:space-y-0">
        <div className="flex flex-wrap justify-center sm:justify-start space-x-6">
          <a href="#" className="hover:underline">Advertising</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">How Search works</a>
        </div>
        
        {/* Carbon Neutral */}
        <div className="flex items-center space-x-1">
          <Leaf size={16} className="text-green-600 0" />
          <span className="text-gray-600 ">Carbon neutral since 2007</span>
        </div>
        
        <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default GoogleFooter;
