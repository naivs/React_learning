import React from 'react'
import classes from './AnswersList.css'
import Answer from './Answer/Answer'

const AnswerList = props => (
    <ul className={classes.AnswersList}>
        { props.answers.map((answer, index) => {
            return (
                <Answer key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}/>
            )
        }) }
    </ul>
);

export default AnswerList