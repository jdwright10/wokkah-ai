
import React from 'react';

const AIGuideCover: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-lg shadow-lg p-3 text-white">
      <div className="border-2 border-white/30 rounded-lg p-2 h-full flex flex-col justify-between backdrop-blur-sm bg-white/5">
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-wider mb-1 font-medium">FREE GUIDE</div>
          <h1 className="text-sm font-bold mb-0.5">Demystifying</h1>
          <h1 className="text-sm font-bold mb-0.5">the AI</h1>
          <h1 className="text-sm font-bold mb-0.5">Landscape</h1>
          <h2 className="text-xs mb-1">A Complete Guide</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-0.5 mb-1">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-white/10 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
          ))}
        </div>
        
        <div className="text-[10px] mt-auto text-center">
          <p>By Dr. Iyanu Odebode</p>
          <p>Wokkah © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default AIGuideCover;
