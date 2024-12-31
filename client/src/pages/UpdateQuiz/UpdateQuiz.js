import React from 'react'
import RandomQuiz from '../../components/RandomQuiz/RandomQuiz'
import { useLocation } from 'react-router-dom';

const UpdateQuiz = () => {
    const location = useLocation();
    const quizData = location.state?.quiz;

    if (!quizData) {
        return <div>לא נמצאו נתונים לעריכת החידון</div>;
    }

    const oldData = {
        title: 'yes',
        ques: [
            { text: 'que', answers: [{ text: 'yap', isCorrect: false }, { text: 'hey', isCorrect: true }] },
            { text: 'que2', answers: [{ text: 'no', isCorrect: false }, { text: 'ofCourse', isCorrect: true }] },
            { text: 'que2', answers: [{ text: 'no', isCorrect: false }, { text: 'ofCourse', isCorrect: true }] }
        ]
    }

    return (
        <RandomQuiz
            pageTitle='עדכן חידון'
            data={quizData}
            buttonCreate='שמור שינויים'
        />
    )
}

export default UpdateQuiz