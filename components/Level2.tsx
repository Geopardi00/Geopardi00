
import React, { useState, useEffect } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { LevelProps } from '../types';
import HintButton from './HintButton';
import ImageWithFallback from './ImageWithFallback';
import { ASSETS } from '../assets';

const Level2: React.FC<LevelProps> = ({ onComplete, hintUsed, onUseHint }) => {
  const [ansLeft, setAnsLeft] = useState('');
  const [ansRight, setAnsRight] = useState('');
  
  const [solvedLeft, setSolvedLeft] = useState(false);
  const [solvedRight, setSolvedRight] = useState(false);
  
  const [errorLeft, setErrorLeft] = useState(false);
  const [errorRight, setErrorRight] = useState(false);

  useEffect(() => {
    if (solvedLeft && solvedRight) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [solvedLeft, solvedRight, onComplete]);

  const checkLeft = () => {
    const clean = ansLeft.toLowerCase().trim();
    if (clean === 'pirunpelto') {
      setSolvedLeft(true);
      setErrorLeft(false);
    } else {
      setErrorLeft(true);
      setTimeout(() => setErrorLeft(false), 500);
    }
  };

  const checkRight = () => {
    const clean = ansRight.toLowerCase().trim();
    if (clean === 'pallo') {
      setSolvedRight(true);
      setErrorRight(false);
    } else {
      setErrorRight(true);
      setTimeout(() => setErrorRight(false), 500);
    }
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-6 bg-slate-900/80 border border-slate-700 rounded-lg shadow-2xl backdrop-blur-sm animate-fade-in">
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <h2 className="text-2xl text-christmas-brightRed cinzel font-bold">Level II</h2>
        {solvedLeft && solvedRight ? <Unlock className="text-green-500" /> : <Lock className="text-christmas-red" />}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Puzzle */}
        <div className="space-y-4">
          <div className="aspect-square bg-slate-800 rounded-lg overflow-hidden border border-slate-600 relative">
             <ImageWithFallback 
               src={ASSETS.LEVEL_2_LEFT} 
               alt="Left Puzzle"
               className="w-full h-full object-cover opacity-90"
             />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={ansLeft}
                onChange={(e) => setAnsLeft(e.target.value)}
                placeholder="Identify this"
                disabled={solvedLeft}
                onKeyDown={(e) => e.key === 'Enter' && checkLeft()}
                className={`w-full bg-slate-950 border px-3 py-2 rounded focus:outline-none transition-all
                  ${errorLeft ? 'border-red-500 animate-shake' : 'border-slate-700 focus:border-christmas-red'}
                  ${solvedLeft ? 'border-green-500 text-green-500' : 'text-white'}
                `}
              />
              {!solvedLeft && (
                <button onClick={checkLeft} className="px-4 bg-slate-800 hover:bg-slate-700 text-white rounded font-bold">→</button>
              )}
            </div>
            <HintButton 
              hint="irma magna" 
              isUsed={hintUsed} 
              onUse={onUseHint}
              isSolved={solvedLeft}
            />
          </div>
        </div>

        {/* Right Puzzle */}
        <div className="space-y-4">
           <div className="aspect-square bg-slate-800 rounded-lg overflow-hidden border border-slate-600 relative">
             <ImageWithFallback 
               src={ASSETS.LEVEL_2_RIGHT} 
               alt="Right Puzzle"
               className="w-full h-full object-cover opacity-90"
             />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={ansRight}
                onChange={(e) => setAnsRight(e.target.value)}
                placeholder="Name the shape"
                disabled={solvedRight}
                onKeyDown={(e) => e.key === 'Enter' && checkRight()}
                className={`w-full bg-slate-950 border px-3 py-2 rounded focus:outline-none transition-all
                  ${errorRight ? 'border-red-500 animate-shake' : 'border-slate-700 focus:border-christmas-red'}
                  ${solvedRight ? 'border-green-500 text-green-500' : 'text-white'}
                `}
              />
              {!solvedRight && (
                <button onClick={checkRight} className="px-4 bg-slate-800 hover:bg-slate-700 text-white rounded font-bold">→</button>
              )}
            </div>
            <HintButton 
              hint={null} // No hint for this one
              isUsed={hintUsed} 
              onUse={onUseHint}
              isSolved={solvedRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level2;
