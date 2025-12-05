import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setCurrentSrc(objectUrl);
      setHasError(false);
    }
  };

  if (hasError) {
    return (
      <label 
        className={`flex flex-col items-center justify-center bg-slate-900 border-2 border-dashed border-slate-700 text-slate-500 cursor-pointer hover:border-christmas-red hover:text-christmas-red hover:bg-slate-800 transition-all group ${className}`}
      >
        <div className="flex flex-col items-center p-4 text-center">
          <Upload className="mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-mono mb-1">Image not found:</span>
          <code className="text-[10px] bg-black/50 px-1 py-0.5 rounded mb-2 text-red-400 break-all max-w-[90%]">{src}</code>
          <span className="text-xs font-bold uppercase tracking-wider">Click to Upload File</span>
        </div>
        <input 
          type="file" 
          className="hidden" 
          accept="image/*" 
          onChange={handleFileChange} 
        />
      </label>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default ImageWithFallback;