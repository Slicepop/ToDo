import { useState } from 'react'
import './popup.css'
import Draggable from 'react-draggable'

export default function Popup(props) {


    // const [title, setTitle] = useState(props.item.title)
    function handleClose() {
        // props.setPopupState(prevState => [...prevState, {
        // props.setPopupState(prevState => {
        prevState.map(item => {
            if (props.item.length === item.length) {
                console.log(props.item.title)
            }
        })
        //})
    }
    const [isEdit, setIsEdit] = useState(false)
    function handleEdit() {
        if (isEdit) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    }

    return (
        <Draggable>

            <div className='popup' id='popup' >
                <div style={{ backgroundColor: isEdit ? '#bad7f2' : '#baf2d8' }} className='window'>
                    <div className="banner" id='banner' >
                        <h1>{props.item.title}</h1>
                        <img className='editIcon' onClick={handleEdit}
                            src={isEdit ? './save.png' : "./edit.png"} alt="" />
                        <img src=".//xIcon.png" alt="close" className='closeIcon' onClick={handleClose} />
                    </div>
                    <div className="top">
                        <p>Project: {props.item.project}</p>
                        <p>Date: {props.item.date}</p>
                    </div>
                    <textarea readOnly={isEdit ? false : true} className='window--desc'>{props.item.description}</textarea>
                    <p className='window--priority'>Priority: {props.item.priority}</p>
                </div>
            </div >
        </Draggable >
    )
}