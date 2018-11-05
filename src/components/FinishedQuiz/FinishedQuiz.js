import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../../components/UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
    let rightAnswersCount = 0;

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {console.log(props.results)}
                { props.quiz.map((quizItem, index) => {
                    if (props.results[index + 1] === 'success') {
                        rightAnswersCount++;
                    }

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={props.results[index + 1] === 'success' ?
                                'fa fa-check ' + classes.success :
                                'fa fa-times ' + classes.error}/>
                        </li>
                    )
                })}

                <p>Правильно {rightAnswersCount} из {props.quiz.length}</p>

                <div>
                    <Button onClick={props.onRetry} type="primary">Повторить</Button>
                    <Link to="/">
                        <Button type={"success"}>Перейти в список тестов</Button>
                    </Link>
                </div>
            </ul>
        </div>
    )
};

export default FinishedQuiz