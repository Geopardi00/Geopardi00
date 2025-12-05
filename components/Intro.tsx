import React from 'react';
import { Play } from 'lucide-react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl w-full mx-auto p-8 bg-slate-900/90 border border-christmas-red rounded-lg shadow-[0_0_50px_rgba(220,38,38,0.2)] text-center animate-fade-in relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-christmas-red to-transparent"></div>

      <h1 className="text-4xl md:text-5xl font-bold text-christmas-brightRed mb-2 cinzel tracking-wider">
        X-MAS MOVIE<br/>APOCALYPSE
      </h1>
      
      <div className="w-16 h-1 bg-christmas-red mx-auto my-6"></div>

      <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light">
        Auta Joulupukkia selvittämään Joulumuorin lempielokuva. Tontut ovat jättäneet kyptisiä vihjeitä ja pukilta alkaa loppua aika ennen jouluaattoa.
      </p>

      <button
        onClick={onStart}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-christmas-red text-white text-xl font-bold rounded hover:bg-red-700 transition-all transform hover:scale-105"
      >
        <Play className="fill-current" />
        <span className="cinzel">START MISSION</span>
        <div className="absolute inset-0 rounded border border-white/20 group-hover:scale-105 transition-transform"></div>
      </button>

      <p className="mt-8 text-xs text-slate-500 font-mono">
        WARNING: Only ONE global hint available. Use it wisely.
      </p>
    </div>
  );
};

export default Intro;