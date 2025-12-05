import React, { useEffect, useState } from 'react';

const Snow: React.FC = () => {
  const [flakes, setFlakes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Generate static snowflakes to avoid re-renders causing jumps
    const newFlakes = Array.from({ length: 50 }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 5}s`, // 5-8s fall time
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.1,
        fontSize: `${Math.random() * 10 + 10}px`
      };
      return <div key={i} className="snowflake" style={style}>•</div>;
    });
    setFlakes(newFlakes);
  }, []);

  return <>{flakes}</>;
};

export default Snow;