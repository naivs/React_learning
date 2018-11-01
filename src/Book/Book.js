import React from 'react'
import './Book.css'

export default props => {
    const inputClasses = [];

    if (props.name !== '') {
        inputClasses.push('Book-input-green')
    } else {
        inputClasses.push('Book-input-red')
    }

    if (props.name.length > 4) {
        inputClasses.push('Book-input-bold')
    }

    return (
        <div className="Book">
            <p>Название: {props.name}</p>
            <p>Год: {props.year}</p>
            {props.children}
            <input className={inputClasses.join(' ')}
                   type="text"
                   onChange={props.onChangeName}
                   value={props.name} />
            <button onClick={props.onChangeTitle}>Download</button>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}