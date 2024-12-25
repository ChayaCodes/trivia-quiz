import './RandomQuiz.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { faBan, faGamepad, faPlus } from "@fortawesome/free-solid-svg-icons";
import RandomQuizButtons from '../RQButtons/RandomQuizButtons';
import QuizQuestion from '../QuiezComp/QuizQuestion';

const RandomQuiz = ({ pageTitle, buttonCreate, data }) => {

    const [title, setTitle] = useState(data ? data.title : '');
    const [questions, setQuestions] = useState(data?.ques || [
        { text: '', answers: [{ text: '', isCorrect: false }] }
    ]);

    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const addNewQuestion = () => {
        setQuestions([...questions,
        {
            text: '', answers: [{ text: '', isCorrect: true },
            { text: '', isCorrect: false }]
        }])
    }

    const saveTheQuiz = () => {
    }

    const cancelTheChanges = () => {
        navigate(-1);
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
                    <QuizQuestion
                        questions={questions}
                        setQuestions={setQuestions}
                    />
                </div>
            </form>
            <div className='quiz-bottom-buttons box'>
                <div className='buttoms-up'>
                    <RandomQuizButtons
                        icon={faPlus}
                        fn={addNewQuestion}
                        content='הוספת שאלה'
                    />
                    <RandomQuizButtons
                        icon={faGamepad}
                        fn={saveTheQuiz}
                        content={buttonCreate}
                    />
                </div>
                <RandomQuizButtons
                    icon={faBan}
                    fn={cancelTheChanges}
                    content='ביטול'
                />
            </div>
        </div>
    )
}

export default RandomQuiz