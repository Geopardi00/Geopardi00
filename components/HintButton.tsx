import React from 'react';
import { HelpCircle, AlertCircle } from 'lucide-react';

interface HintButtonProps {
  hint: string | null;
  isUsed: boolean;
  onUse: () => void;
  isSolved: boolean;
}

const HintButton: React.FC<HintButtonProps> = ({ hint, isUsed, onUse, isSolved }) => {
  const [showHintText, setShowHintText] = React.useState(false);

  // If there is no hint available for this puzzle
  if (!hint) {
    return (
      <div className="mt-2 text-xs text-slate-500 flex items-center gap-1 justify-center opacity-50 cursor-not-allowed">
        <HelpCircle size={14} />
        <span>No hint available</span>
      </div>
    );
  }

  // If hint is already used globally, but not on this specific puzzle yet (unless we track per puzzle, but requirement says Global Hint System)
  // Requirement: "Once used, the hint button becomes disabled for all other puzzles."
  // So if `isUsed` is true, we show the disabled state unless this specific component "owns" the hint usage?
  // The prompt says "The player has exactly ONE hint they can use during the entire game."
  // This implies if they used it on Level 1, Level 2 cannot use it.

  const handleUseHint = () => {
    if (!isUsed && !isSolved) {
      onUse();
      setShowHintText(true);
    }
  };

  if (isUsed && !showHintText) {
     return (
      <div className="mt-2 text-xs text-christmas-red flex items-center gap-1 justify-center opacity-70">
        <AlertCircle size={14} />
        <span>Global hint already used</span>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col items-center">
      {!showHintText ? (
        <button
          onClick={handleUseHint}
          disabled={isUsed || isSolved}
          className={`
            flex items-center gap-2 px-3 py-1 text-sm border rounded transition-all
            ${isUsed || isSolved 
              ? 'border-slate-700 text-slate-700 cursor-not-allowed' 
              : 'border-christmas-red text-christmas-accent hover:bg-christmas-red/10 hover:text-white'}
          `}
        >
          <HelpCircle size={16} />
          {isUsed ? 'Hint Unavailable' : 'Use Global Hint'}
        </button>
      ) : (
        <div className="p-3 border border-christmas-accent/30 bg-christmas-red/10 rounded text-christmas-accent text-sm animate-fade-in">
          <span className="font-bold mr-2">HINT:</span> {hint}
        </div>
      )}
    </div>
  );
};

export default HintButton;