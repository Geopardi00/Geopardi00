
import React, { useState, useEffect } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { LevelProps } from '../types';
import HintButton from './HintButton';
import ImageWithFallback from './ImageWithFallback';
import { ASSETS } from '../assets';

const Level3: React.FC<LevelProps> = ({ onComplete, hintUsed, onUseHint }) => {
  // Left Puzzle States (Rocky vs Apollo)
  const [rocky, setRocky] = useState('');
  const [apollo, setApollo] = useState('');
  const [solvedRocky, setSolvedRocky] = useState(false);
  const [solvedApollo, setSolvedApollo] = useState(false);
  const [errorRocky, setErrorRocky] = useState(false);
  const [errorApollo, setErrorApollo] = useState(false);

  // Right Puzzle State (Math)
  const [mathAns, setMathAns] = useState('');
  const [solvedMath, setSolvedMath] = useState(false);
  const [errorMath, setErrorMath] = useState(false);

  useEffect(() => {
    if (solvedRocky && solvedApollo && solvedMath) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [solvedRocky, solvedApollo, solvedMath, onComplete]);

  const checkRocky = () => {
    if (rocky.toLowerCase().trim() === 'rocky') {
      setSolvedRocky(true);
      setErrorRocky(false);
    } else {
      setErrorRocky(true);
      setTimeout(() => setErrorRocky(false), 500);
    }
  };

  const checkApollo = () => {
    if (apollo.toLowerCase().trim() === 'apollo') {
      setSolvedApollo(true);
      setErrorApollo(false);
    } else {
      setErrorApollo(true);
      setTimeout(() => setErrorApollo(false), 500);
    }
  };

  const checkMath = () => {
    if (mathAns.trim() === '13') {
      setSolvedMath(true);
      setErrorMath(false);
    } else {
      setErrorMath(true);
      setTimeout(() => setErrorMath(false), 500);
    }
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-6 bg-slate-900/80 border border-slate-700 rounded-lg shadow-2xl backdrop-blur-sm animate-fade-in">
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <h2 className="text-2xl text-christmas-brightRed cinzel font-bold">Level III</h2>
        {solvedRocky && solvedApollo && solvedMath ? <Unlock className="text-green-500" /> : <Lock className="text-christmas-red" />}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left: Rocky vs Apollo */}
        <div className="space-y-4">
          <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-600 relative">
             <ImageWithFallback 
               src={ASSETS.LEVEL_3_LEFT} 
               alt="Rocky vs Apollo"
               className="w-full h-full object-cover opacity-90"
             />
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex-1 min-w-[100px]">
              <input
                type="text"
                value={rocky}
                onChange={(e) => setRocky(e.target.value)}
                onBlur={checkRocky}
                placeholder="Fighter 1"
                disabled={solvedRocky}
                className={`w-full bg-slate-950 border px-3 py-2 rounded focus:outline-none text-center
                  ${errorRocky ? 'border-red-500 animate-shake' : 'border-slate-700 focus:border-christmas-red'}
                  ${solvedRocky ? 'border-green-500 text-green-500' : 'text-white'}
                `}
              />
            </div>
            
            <span className="cinzel text-christmas-accent font-bold text-lg">VS.</span>

            <div className="flex-1 min-w-[100px]">
              <input
                type="text"
                value={apollo}
                onChange={(e) => setApollo(e.target.value)}
                onBlur={checkApollo}
                placeholder="Fighter 2"
                disabled={solvedApollo}
                className={`w-full bg-slate-950 border px-3 py-2 rounded focus:outline-none text-center
                  ${errorApollo ? 'border-red-500 animate-shake' : 'border-slate-700 focus:border-christmas-red'}
                  ${solvedApollo ? 'border-green-500 text-green-500' : 'text-white'}
                `}
              />
            </div>
          </div>
          <HintButton 
              hint="Who are they? (Left Name vs Right Name)" 
              isUsed={hintUsed} 
              onUse={onUseHint}
              isSolved={solvedRocky && solvedApollo}
            />
        </div>

        {/* Right: Math */}
        <div className="space-y-4">
           <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-600 relative flex flex-col">
             <ImageWithFallback 
               src={ASSETS.LEVEL_3_RIGHT} 
               alt="Math Puzzle"
               className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute bottom-0 w-full bg-black/70 p-2 text-center text-sm font-mono text-christmas-accent">
               laske yhteen
             </div>
          </div>
          
          <div className="flex gap-2">
              <input
                type="number"
                value={mathAns}
                onChange={(e) => setMathAns(e.target.value)}
                placeholder="Sum?"
                disabled={solvedMath}
                onKeyDown={(e) => e.key === 'Enter' && checkMath()}
                className={`w-full bg-slate-950 border px-3 py-2 rounded focus:outline-none transition-all
                  ${errorMath ? 'border-red-500 animate-shake' : 'border-slate-700 focus:border-christmas-red'}
                  ${solvedMath ? 'border-green-500 text-green-500' : 'text-white'}
                `}
              />
              {!solvedMath && (
                <button onClick={checkMath} className="px-4 bg-slate-800 hover:bg-slate-700 text-white rounded font-bold">→</button>
              )}
            </div>
             <HintButton 
              hint={null} 
              isUsed={hintUsed} 
              onUse={onUseHint}
              isSolved={solvedMath}
            />
        </div>
      </div>
    </div>
  );
};

export default Level3;
