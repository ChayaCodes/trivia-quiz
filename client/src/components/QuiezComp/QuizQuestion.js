import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './QuizQuestion.css'


const QuizQuestion = ({ questions, setQuestions }) => {

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].text = value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (qIndex, aIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers[aIndex].text = value;
        setQuestions(newQuestions);
    };

    const handleIsCorrectChange = (qIndex, aIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers[aIndex].isCorrect = !newQuestions[qIndex].answers[aIndex].isCorrect;
        setQuestions(newQuestions);
    };

    const addAnswer = (qIndex) => {
        const newQuestions = [...questions];
        if (newQuestions[qIndex].answers.length < 4) {
            newQuestions[qIndex].answers.push({ text: '', isCorrect: false });
            setQuestions(newQuestions);
        }
    };

    const removeQuestion = (qIndex) => {
        const oldQuestions = [...questions];
        if (oldQuestions.length > 1) {
            const newQuestions = questions.filter((_, index) => index !== qIndex);
            setQuestions(newQuestions);
        }
    }

    const removeAnswer = (qIndex, aIndex) => {
        const newQuestions = [...questions];
        if (newQuestions[qIndex].answers.length > 1) {
            newQuestions[qIndex].answers = newQuestions[qIndex].answers.filter((_, index) => index !== aIndex);
            setQuestions(newQuestions);
        }
    };

return (
    <div>
        {questions.map((question, qIndex) => (
            <div key={qIndex}>
                <div className='quiz-question'>
                    <div className='quiz-question-title'>
                        <label>שאלה {qIndex + 1}</label>
                        <div className='quiz-question-title-buttons'>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={question.answers.length < 4 ? 'q-q-b' : 'q-q-b-u'}
                                onClick={() => addAnswer(qIndex)}
                            />
                            <FontAwesomeIcon
                                icon={faTrash}
                                className={questions.length > 1 ? 'q-q-b' : 'q-q-b-u'}
                                onClick={() => removeQuestion(qIndex)}
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        className='question-input'
                        value={question.text}
                        onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                        required
                        placeholder={`וזו תהיה השאלה ה${qIndex + 1}`}
                    />
                </div>
                <div className='quiz-answers' >
                    {question.answers.map((answer, aIndex) => (
                        <div className='quiz-answer-box' key={aIndex}>
                            <input
                                type="text"
                                value={answer.text}
                                onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                                required
                                placeholder={`תשובה מספר ${aIndex + 1}`}
                            />
                            <div className='quiz-answer-buttons'>
                                <input
                                    type='checkbox'
                                    checked={answer.isCorrect}
                                    onChange={() => handleIsCorrectChange(qIndex, aIndex)}
                                />
                                <div>
                                    {question.answers.length > 1 && (
                                        <FontAwesomeIcon
                                            icon={faCircleXmark}
                                            className='q-a-r-b'
                                            onClick={() => removeAnswer(qIndex, aIndex)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))
        }
    </div>
)
}

export default QuizQuestion