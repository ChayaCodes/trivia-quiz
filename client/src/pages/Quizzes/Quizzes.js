import React, { useState, useEffect } from 'react';
import './Quizzes.css';
import { useNavigate, useNavigation } from 'react-router-dom';


function Quizzes() {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizzes = async () => {
            const data = [
                {
                    "id": 1,
                    "title": "החידון הראשון",
                    "description": "חידון ראשון עם תיאור קצר"
                },
                {
                    "id": 2,
                    "title": "החידון השני",
                    "description": "חידון שני עם תיאור קצר"
                },
                {
                    "id": 3,
                    "title": "החידון השלישי",
                    "description": "חידון שלישי עם תיאור קצר"
                }
            ];
            setQuizzes(data);
        };

        fetchQuizzes();
    }, []);

    const navigateToUpdateQuiz = (quizz) => {
        navigate('/update-quiz', { state: { quiz: quizz } })
        console.log(quizzes);
    }

    return (
        <div>
            <h1 className='Title'>רשימת החידונים</h1>
            <ul className='quiz-list'>
                {quizzes.map(quiz => (
                    <li className='quiz-item' key={quiz.id}>
                        <h2>{quiz.title}</h2>
                        <p>{quiz.description}</p>
                        <div className='buttons'>
                            <button className='activate-button'>התחל חידון</button>
                            <button className='edit-button' onClick={()=> navigateToUpdateQuiz(quiz)}>ערוך חידון</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Quizzes;