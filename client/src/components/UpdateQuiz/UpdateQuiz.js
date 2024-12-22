import React from 'react'
import RandomQuiz from '../RandomQuiz/RandomQuiz'

const UpdateQuiz = () => {
    const oldData = {
        title: 'yes',
        questions: [{ text: '', isCorrect: false }]
    }

    return (
        <RandomQuiz
            pageTitle='עדכן חידון'
            data={oldData}
        />
    )
}

export default UpdateQuiz