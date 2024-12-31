import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RandomQuizButtons.css'

const RandomQuizButtons = ({icon, fn, content}) => {
    return (
        <div className='button-random-for-quiz' onClick={fn}>
            <FontAwesomeIcon
                icon={icon}
            />
            <lable> {content} </lable>
        </div>
    )
}

export default RandomQuizButtons