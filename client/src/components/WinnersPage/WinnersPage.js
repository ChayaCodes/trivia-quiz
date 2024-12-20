import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './WinnersPage.css'; // אם יש סגנונות מותאמים אישית

const WinnersPage = ({ winners, onRestart }) => {
  useEffect(() => {
    // אם האנשים המנצחים לא טוענים עדיין, טען אותם
    if (!winners) {
      axios.get('/api/quiz_winners')
        .then(response => {
          // ניתן להוסיף state לניהול המנצחים אם רוצים
        })
        .catch(error => {
          console.error('Error fetching winners:', error);
        });
    }
  }, [winners]);

  return (
    <div className="winners-page">
      <h2>מזל טוב!</h2>
      <h3>המנצחים של החידון:</h3>
      <ul>
        {winners && winners.length > 0 ? (
          winners.map((winner, index) => (
            <li key={index}>{winner.name} - {winner.score} נקודות</li>
          ))
        ) : (
          <li>אין נתונים זמינים.</li>
        )}
      </ul>
      <button onClick={onRestart} className="restart-button">
        הפעל מחדש את החידון
      </button>
    </div>
  );
};

WinnersPage.propTypes = {
  winners: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  })),
  onRestart: PropTypes.func.isRequired,
};

export default WinnersPage;