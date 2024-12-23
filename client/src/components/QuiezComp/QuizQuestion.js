import React from 'react'
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

    return (
        <div>
            {questions.map((question, qIndex) => (
                <div key={qIndex}>
                    <div className='quiz-question'>
                        <div className='quiz-question-title'>
                            <label>שאלה {qIndex + 1}</label>
                            <div className='quiz-question-title-buttons'>
                                <FontAwesomeIcon icon={faPlus} />
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                        <input
                            type="text"
                            value={question.text}
                            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                            required
                            placeholder={`השאלה ה${qIndex + 1}`}
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
                                            <FontAwesomeIcon icon={faCircleXmark} />
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