import React from 'react'
import classes from './Answer.css'

const Answer = props => {
    const cls = [classes.Answer];

    if (props.state) {
        cls.push(classes[props.state])
    }

    return (
        <li className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}>
            { props.answer.text }
        </li>
    )
};

export default Answer;