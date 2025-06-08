
import React from 'react';
import { Grid3X3 } from 'lucide-react';

const GoogleHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 text-sm">
      <div className="flex space-x-4">
        <a href="#" className="text-gray-700 hover:underline">About</a>
        <a href="#" className="text-gray-700 hover:underline">Store</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:underline">Gmail</a>
        <a href="#" className="text-gray-700 hover:underline">Images</a>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Grid3X3 size={20} className="text-gray-600" />
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default GoogleHeader;
