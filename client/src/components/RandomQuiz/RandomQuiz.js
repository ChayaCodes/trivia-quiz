import React, { useState } from 'react'
import './RandomQuiz.css'

const RandomQuiz = ({ pageTitle, buttonCreate, data}) => {
    console.log(data);

    const [title, setTitle] = useState(data ? data.title : '');
    const [questions, setQuestions] = useState(data ? data.questions : [
        { text: '', answers: [{ text: '', isCorrect: false }] }
    ]);


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <div id='quiz-title'>
                {pageTitle}
            </div>
            <form>
                <div id='quize-title'>
                    <label>כותרת החידון</label>
                    <input
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                        placeholder='בחר שם חזק לחידון שלך'
                    />
                </div>
                <div id='quize-questions'>
                    
                </div>
            </form>

        </div>
    )
}

export default RandomQuiz