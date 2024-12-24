import React, { useState } from 'react'
import './RandomQuiz.css'
import QuizQuestion from '../QuiezComp/QuizQuestion';

const RandomQuiz = ({ pageTitle, buttonCreate, data }) => {
    // console.log(data);

    const [title, setTitle] = useState(data ? data.title : '');
    const [questions, setQuestions] = useState(data?.ques || [
        { text: '', answers: [{ text: '', isCorrect: false }] }
    ]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div id='quiz-out'>
            <div id='page-title'>
                {pageTitle}
            </div>
            <form>
                <div className='quize-title box'>
                    <label>כותרת החידון</label>
                    <input className='title-input'
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                        placeholder='בחר שם חזק לחידון שלך'
                    />
                </div>
                <div className='quize-questions box'>
                    <QuizQuestion questions={questions} setQuestions={setQuestions} />
                </div>
            </form>

        </div>
    )
}

export default RandomQuiz