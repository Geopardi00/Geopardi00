import React from 'react';
import { Gift, RefreshCw } from 'lucide-react';

const Finished: React.FC = () => {
  return (
    <div className="max-w-3xl w-full mx-auto p-10 bg-slate-900/95 border-2 border-christmas-brightRed rounded-xl shadow-[0_0_100px_rgba(220,38,38,0.4)] text-center animate-fade-in">
      
      <div className="mb-8 flex justify-center">
        <Gift size={80} className="text-christmas-brightRed animate-bounce" />
      </div>

      <h2 className="text-2xl text-slate-400 cinzel mb-4">The Secret Movie Is...</h2>
      
      <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-christmas-brightRed to-christmas-accent mb-12 cinzel tracking-widest drop-shadow-lg">
        APOLLO 13
      </h1>

      <div className="space-y-4 text-slate-300 font-light">
        <p>Joulupukki thanks you.</p>
        <p>Mrs. Claus will be delighted.</p>
        <p className="text-sm text-slate-500 mt-8 font-mono">System Status: CHRISTMAS SAVED</p>
      </div>

      <button 
        onClick={() => window.location.reload()}
        className="mt-12 flex items-center gap-2 mx-auto text-slate-500 hover:text-white transition-colors"
      >
        <RefreshCw size={16} /> Play Again
      </button>
    </div>
  );
};

export default Finished;