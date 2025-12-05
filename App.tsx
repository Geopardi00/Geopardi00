import React, { useState } from 'react';
import { GameState } from './types';
import Snow from './components/Snow';
import Intro from './components/Intro';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Finished from './components/Finished';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [level, setLevel] = useState(1);
  const [hintUsed, setHintUsed] = useState(false);

  const handleStart = () => {
    setGameState('playing');
  };

  const handleLevelComplete = () => {
    if (level < 3) {
      setLevel(prev => prev + 1);
    } else {
      setGameState('finished');
    }
  };

  const handleUseHint = () => {
    setHintUsed(true);
  };

  return (
    <div className="min-h-screen w-full bg-christmas-darker text-slate-200 relative overflow-x-hidden flex flex-col items-center justify-center p-4">
      <Snow />
      
      <div className="relative z-10 w-full">
        {gameState === 'intro' && (
          <Intro onStart={handleStart} />
        )}

        {gameState === 'playing' && (
          <div className="transition-all duration-500">
            <div className="mb-4 text-center text-slate-500 text-sm font-mono">
              LEVEL {level} / 3
            </div>
            
            {level === 1 && (
              <Level1 
                onComplete={handleLevelComplete} 
                hintUsed={hintUsed} 
                onUseHint={handleUseHint}
              />
            )}
            
            {level === 2 && (
              <Level2 
                onComplete={handleLevelComplete} 
                hintUsed={hintUsed} 
                onUseHint={handleUseHint}
              />
            )}
            
            {level === 3 && (
              <Level3 
                onComplete={handleLevelComplete} 
                hintUsed={hintUsed} 
                onUseHint={handleUseHint}
              />
            )}
          </div>
        )}

        {gameState === 'finished' && (
          <Finished />
        )}
      </div>

      <footer className="fixed bottom-4 text-slate-600 text-xs font-mono z-0">
        X-MAS APOCALYPSE v1.0
      </footer>
    </div>
  );
};

export default App;