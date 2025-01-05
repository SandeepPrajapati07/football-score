import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-lg font-bold">Matches</div>
      <input 
        type="text" 
        placeholder="Search for matches..." 
        className="px-4 py-2 rounded bg-gray-700 text-white w-1/2"
      />
    </header>
  );
};

export default Header;