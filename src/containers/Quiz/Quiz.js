import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        answerState: null, // { [id]: 'success' or 'error' }
        isFinished: false,
        quiz: [
            {
                id: 1,
                question: 'Сколько будет 2 + 2 * 2?',
                rightId: 4,
                answers: [
                    {id: 1, text: '2'},
                    {id: 2, text: '4'},
                    {id: 3, text: '8'},
                    {id: 4, text: '6'},
                ]
            },
            {
                id: 2,
                question: 'Столица Германии?',
                rightId: 2,
                answers: [
                    {id: 1, text: 'Грац'},
                    {id: 2, text: 'Берлин'},
                    {id: 3, text: 'Франкфурт'},
                    {id: 4, text: 'Стокгольм'},
                ]
            },
            {
                id: 3,
                question: 'Название фреймворка JavaScript от компании Facebook?',
                rightId: 3,
                answers: [
                    {id: 1, text: 'Angular'},
                    {id: 2, text: 'Python'},
                    {id: 3, text: 'React'},
                    {id: 4, text: 'JSX'},
                ]
            }
        ],
        results: {} // { {id}: 'success' or 'error' }
    };

    onAnswerClickHandler = (answerId) => {
        const results = this.state.results;

        if (this.state.answerState !== null) {
            return
        }

        if (answerId === this.state.quiz[this.state.currentQuestion].rightId) {
            // right
            results[this.state.currentQuestion + 1] = 'success';
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });
        } else {
            // wrong
            results[this.state.currentQuestion + 1] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }

        const timeout = window.setTimeout(() => {
            if (this.state.currentQuestion + 1 !== this.state.quiz.length) {
                // not last question
                this.setState({
                    currentQuestion: this.state.currentQuestion + 1,
                    answerState: null
                })
            } else {
                this.setState({
                    isFinished: true
                })
            }
            window.clearTimeout(timeout)
        }, 1000)
    };

    onRetryHandler = () => {
        this.setState({
            currentQuestion: 0,
            answerState: null,
            isFinished: false
        })
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Give the answer</h1>
                    {
                        this.state.isFinished ? <FinishedQuiz results={this.state.results}
                                                              quiz={this.state.quiz}
                                                              onRetry={this.onRetryHandler} /> :
                            <ActiveQuiz
                                question={this.state.quiz[this.state.currentQuestion]}
                                currentQuestion={this.state.currentQuestion + 1}
                                state={this.state.answerState}
                                totalQuestion={this.state.quiz.length}
                                onAnswerClick={this.onAnswerClickHandler} />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz