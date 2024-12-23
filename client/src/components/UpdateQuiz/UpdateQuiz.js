import React from 'react'
import RandomQuiz from '../RandomQuiz/RandomQuiz'

const UpdateQuiz = () => {
    const oldData = {
        title: 'yes',
        ques: [{text: 'que',answers: [{ text: 'yap', isCorrect: false }, {text: 'hey', isCorrect: true}]} ]
    }

    return (
        <RandomQuiz
            pageTitle='עדכן חידון'
            data={oldData}
        />
    )
}

export default UpdateQuiz