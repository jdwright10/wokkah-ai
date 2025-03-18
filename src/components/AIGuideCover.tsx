
import React from 'react';

const AIGuideCover: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg shadow-lg p-6 text-white">
      <div className="border-2 border-white/20 rounded-lg p-5 h-full flex flex-col justify-between">
        <div>
          <div className="text-sm uppercase tracking-wider mb-2 font-medium">FREE GUIDE</div>
          <h1 className="text-2xl font-bold mb-4">Demystifying the AI Landscape</h1>
          <h2 className="text-xl mb-6">A Complete Guide for Business Leaders</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-white/10 rounded-md flex items-center justify-center">
              <div className={`w-6 h-6 rounded-full bg-white/20`}></div>
            </div>
          ))}
        </div>
        
        <div className="text-sm mt-auto">
          <p>By Dr. Iyanu Odebode</p>
          <p>Wokkah © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default AIGuideCover;
