import React from 'react'
import classes from './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.currentQuestion}.</strong>&nbsp;
                {props.question.question}
            </span>

            <small>{props.currentQuestion} из {props.totalQuestion}</small>
        </p>

        <AnswersList answers={props.question.answers}
                     onAnswerClick={props.onAnswerClick}
                     state={props.state}/>
    </div>
);

export default ActiveQuiz