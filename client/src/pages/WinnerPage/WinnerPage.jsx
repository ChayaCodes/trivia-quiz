import React, { useState } from "react";
import './winnerPage.css'

import victoryTrophy1 from '../../assets/picture/winners/2.png'
import victoryTrophy3 from '../../assets/picture/winners/1.png'
import victoryTrophy2 from '../../assets/picture/winners/3.png'

import AnimatedText from "./AnimatedText";
import ConfettiComponent from "./Confetti";

const WinnerPage = ({ winners, onRestart }) => {
    const win1 = "aaa"
    const win2 = "bbb"
    const win3 = "ccc"
    const [winner1, setWinner1] = useState(false)
    const [winner2, setWinner2] = useState(false)
    const [winner3, setWinner3] = useState(false)

    return (<div className="bodyWinner">
        <div className="winAnimation"><AnimatedText text="והמנצחים שלנו הם:" /> </div>
        <ConfettiComponent />

        <div className="buttons-container">
            <div className="2">
                <img
                    src={victoryTrophy1}
                    alt="victoryTrophy1"
                    className="victoryTrophy1"
                    onClick={() => setWinner1(true)}
                />
            </div>

            <div className="2">
                <img
                    src={victoryTrophy2}
                    alt="victoryTrophy3"
                    className="victoryTrophy3"
                    onClick={() => setWinner3(true)}
                />
            </div>

            <div className="3">
                <img
                    src={victoryTrophy3}
                    alt="victoryTrophy2"
                    className="victoryTrophy2"
                    onClick={() => setWinner2(true)}
                />
            </div>
        </div>

        <div className="winnerscontainer">
            <div className="winner">
                <h3>במקום שלישי:</h3>
                {winner3 && <h2 className="visible">{winners[2].name}</h2>}
            </div>
            <div className="winner">
                <h3>במקום ראשון:</h3>
                {winner1 && <h2 className="visible">{winners[0].name}</h2>}
            </div>
            <div className="winner">
                <h3>במקום שני:</h3>
                {winner2 && <h2 className="visible">{winners[1].name}</h2>}
            </div>
        </div>
        <button onClick={onRestart} className="restart-button">
        הפעל מחדש את החידון
      </button>
    </div>

    );
};

export default WinnerPage;
