import { useState } from 'react'
import './/task.css'
import Popup from './Popup'

export default function Task(props) {
    const [popupVariable, setPopupVariable] = useState(false)
    const [checkboxState, seCheckboxState] = useState(false)
    function openPopup(event) {
        if (event.target.id !== 'check') {
            setPopupVariable(true)
        }

    }
    /**TODO:
 * Make the checkbox remove the task 
 *      (ask first) with undo if no
 *   ✔  Needs to have a transition
 *      
 */

    function handleClick() {
        var response = confirm("You are about to remove this task")
        if (response) {
            // Remove task
        } else {
            // Do nothing (maybe)
        }
    }
    return (
        <>
            <div className="task" onClick={event => openPopup(event)}>
                <img src='check.png' alt="Checkmark" id='check'
                    onClick={handleClick} />
                <h5 className='title'>{props.task.title}</h5>
                <p className='desc'>{props.task.description}</p>
                <p className='project'>Project: {props.task.project}</p>
                <p className='priority'>Priority: {props.task.priority}</p>
                <p className='date'>{props.task.date}</p>
            </div>
            {popupVariable ? <Popup description={props.task.description} popupVariable={setPopupVariable} item={props.task} things={props.things} setThings={props.setThings} /> : ''}
        </>
    )
}   