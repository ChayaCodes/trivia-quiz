import React, { useEffect, useState } from "react";
import './ListOfPlayers.css';

const ListOfPlayers = () => {
    const gamePhoneNumber = "0731234567";
    const room = "5432";

    // הגדרת state עבור רשימת השחקנים
    const [players, setPlayers] = useState([
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000",  
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000", "0520000000", "0520000000", "0520000000", 
        "0520000000", "0520000000"
    ]);
    const [displayedPlayers, setDisplayedPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [playersPerPage, setPlayersPerPage] = useState(12); // מספר שחקנים להציג כל פעם

    // פונקציה לעדכון השחקנים המוצגים בכל דף
    const updateDisplayedPlayers = () => {
        const start = currentPage * playersPerPage;
        const end = start + playersPerPage;
        setDisplayedPlayers(players.slice(start, end));
    };

    // פונקציה לעדכון מספר השחקנים לכל דף לפי גודל המסך
    const updatePlayersPerPage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1400) {
            setPlayersPerPage(54); // במסכים רחבים, הצג 40 שחקנים
        } else if (screenWidth > 1300) {
            setPlayersPerPage(48); // במסכים בינוניים, הצג 30 שחקנים
        } else if (screenWidth >= 1100) {
            setPlayersPerPage(42); // במסכים קטנים יותר, הצג 20 שחקנים
        }  else if (screenWidth >= 950) {
            setPlayersPerPage(36); // במסכים קטנים יותר, הצג 20 שחקנים
        }else if (screenWidth > 800) {
            setPlayersPerPage(30); // במסכים קטנים יותר, הצג 20 שחקנים
        } else if (screenWidth >650) {
            setPlayersPerPage(24); // במסכים קטנים יותר, הצג 20 שחקנים
        } else if (screenWidth >500) {
            setPlayersPerPage(21); // במסכים קטנים יותר, הצג 20 שחקנים
        } else {
            setPlayersPerPage(14); // במסכים מאוד קטנים, הצג 12 שחקנים
        }
    };

    // עדכון השחקנים המוצגים כל 20 שניות
    useEffect(() => {
        // ביצוע בקשה לשרת לשליפת השחקנים (במקום ה-fetch הזה אפשר להחליף בקוד המייצר את רשימת השחקנים)
        const fetchPlayers = async () => {
            try {
                const response = await fetch('/admin/get_participants/<quiz_id>'); // החלף <quiz_id> עם מזהה המתאים
                const data = await response.json();
                setPlayers(data); // עדכון ה-state עם רשימת השחקנים
            } catch (error) {
                console.error("Error fetching players:", error);
            }
        };

        fetchPlayers(); // מבצע את הבקשה לשרת בשליפה של השחקנים

        // עדכון השחקנים המוצגים
        updateDisplayedPlayers();
        const intervalId = setInterval(() => {
            setCurrentPage(prevPage => {
                // אם הגעת לעמוד האחרון, חזור להתחלה
                const nextPage = (prevPage + 1) % Math.ceil(players.length / playersPerPage);
                return nextPage;
            });
        }, 20000); // כל 20 שניות

        return () => {
            clearInterval(intervalId); // ניקוי ה-interval
        };
    }, [players, playersPerPage]); // עדכון אם יש שינוי בשחקנים או במספר השחקנים לכל דף

    // עדכון משתנה playersPerPage בעת שינוי רוחב המסך
    useEffect(() => {
        updatePlayersPerPage();
        window.addEventListener('resize', updatePlayersPerPage); // עדכון דינמי של מספר השחקנים לפי רוחב המסך
        return () => {
            window.removeEventListener('resize', updatePlayersPerPage);
        };
    }, []);

    return (
        <div className="listOfPlayers">
            <div>
                <h1 className="title1">מוכנים? מתחילים!</h1>
                <h2 className="title2">כדי להתחיל לשחק חייגו למספר {gamePhoneNumber}</h2>
                <h3 className="title3">ומיד הקישו {room} </h3>
                <h1 className="title4">כעת חפשו את מספר הטלפון שלכם על המסך</h1>
            </div>

            <div className="numbers">
                {displayedPlayers.length > 0 ? (
                    displayedPlayers.map((player, index) => (
                        <div key={index} className="player">
                            <p>{player}</p> {/* הצגת פרטי השחקן */}
                        </div>
                    ))
                ) : (
                    <p className="noPlayers">אין שחקנים כרגע.</p>
                )}
            </div>
        </div>
    );
};

export default ListOfPlayers;
