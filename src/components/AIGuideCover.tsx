
import React from 'react';

const AIGuideCover: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg shadow-lg p-4 text-white">
      <div className="border-2 border-white/20 rounded-lg p-3 h-full flex flex-col justify-between">
        <div className="text-center">
          <div className="text-xs uppercase tracking-wider mb-1 font-medium">FREE GUIDE</div>
          <h1 className="text-base font-bold mb-1">Demystifying</h1>
          <h1 className="text-base font-bold mb-1">the AI</h1>
          <h1 className="text-base font-bold mb-1">Landscape</h1>
          <h2 className="text-sm mb-2">A Complete Guide</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-1 mb-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-white/10 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
          ))}
        </div>
        
        <div className="text-xs mt-auto text-center">
          <p>By Dr. Iyanu Odebode</p>
          <p>Wokkah © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default AIGuideCover;
