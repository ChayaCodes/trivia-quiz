import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text }) => {  // מקבל פרופס בשם text
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(text.split('')); // מחלקים את הטקסט לאותיות
  }, [text]);  // משנה את האותיות רק אם ה-text משתנה

  return (
    <div id="animated">
      <h2>
        {letters.map((letter, index) => (
          <span key={index} className="letter">{letter}</span>
        ))}
      </h2>
    </div>
  );
};

export default AnimatedText;
