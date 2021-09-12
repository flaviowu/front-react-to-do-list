import React from 'react'
import "./ToDoCard.css"

const ToDoCard = (props) => {
    return (
        <div className="to-do-card">
            <h5>{props.titulo}</h5>
        </div>
    )
}

export default ToDoCard
