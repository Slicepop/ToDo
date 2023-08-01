import { useState } from 'react'
import './/task.css'
import Popup from './Popup'

export default function Task(props) {
    const [popupVariable, setPopupVariable] = useState(false)
    function openPopup() {
        setPopupVariable(true)

    }
    return (
        <>
            <div className="task" onClick={openPopup}>
                <h5 className='title'>{props.task.title}</h5>
                <p className='desc'>{props.task.description}</p>
                <p className='project'>Project: {props.task.project}</p>
                <p className='priority'>Priority: {props.task.priority}</p>
                <p className='date'>{props.task.date}</p>
            </div>
            {popupVariable ? <Popup popupVariable={setPopupVariable} item={props.task} setThings={props.setThings} /> : ''}
        </>
    )
}   