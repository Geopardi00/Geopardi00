
import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { LevelProps } from '../types';
import HintButton from './HintButton';
import ImageWithFallback from './ImageWithFallback';
import { ASSETS } from '../assets';

const Level1: React.FC<LevelProps> = ({ onComplete, hintUsed, onUseHint }) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAnswer = answer.toLowerCase().trim();
    if (cleanAnswer === 'mäkikotka' || cleanAnswer === 'makikotka') {
      setSolved(true);
      setError(false);
      setTimeout(onComplete, 1500); // Delay to show success state
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-6 bg-slate-900/80 border border-slate-700 rounded-lg shadow-2xl backdrop-blur-sm animate-fade-in">
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <h2 className="text-2xl text-christmas-brightRed cinzel font-bold">Level I</h2>
        {solved ? <Unlock className="text-green-500" /> : <Lock className="text-christmas-red" />}
      </div>

      <div className="space-y-6">
        <div className="relative group overflow-hidden rounded-lg border-2 border-slate-800">
           <div className="w-full h-64 bg-slate-800 flex flex-col items-center justify-center text-slate-500">
             <ImageWithFallback
               src={ASSETS.LEVEL_1_PUZZLE}
               alt="Visual Puzzle"
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
             />
           </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="What is the nickname?"
              disabled={solved}
              className={`w-full bg-slate-950 border-2 px-4 py-3 text-lg rounded focus:outline-none transition-all
                ${error ? 'border-red-500 animate-shake text-red-500' : 'border-slate-700 focus:border-christmas-red text-white'}
                ${solved ? 'border-green-500 text-green-500' : ''}
              `}
            />
          </div>
          
          {!solved && (
            <button
              type="submit"
              className="bg-christmas-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors cinzel"
            >
              Submit Answer
            </button>
          )}
        </form>

        <HintButton 
          hint="Janne Ahonen" 
          isUsed={hintUsed} 
          onUse={onUseHint}
          isSolved={solved}
        />
      </div>
    </div>
  );
};

export default Level1;
