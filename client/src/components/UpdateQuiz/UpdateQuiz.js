import React from 'react'
import RandomQuiz from '../RandomQuiz/RandomQuiz'

const UpdateQuiz = () => {
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
            data={oldData}
            buttonCreate='שמור שינויים'
        />
    )
}

export default UpdateQuiz