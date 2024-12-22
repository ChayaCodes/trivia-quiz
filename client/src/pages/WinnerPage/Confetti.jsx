import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={200}
        recycle={true} // אם רוצים שהקונפטי לא יחזור ויתפוגג אחרי זמן מה
      />
    </div>
  );
};

export default ConfettiComponent;
