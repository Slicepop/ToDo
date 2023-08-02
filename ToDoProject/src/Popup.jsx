import { useState } from 'react'
import './popup.css'
import Draggable from 'react-draggable'

export default function Popup(props) {
    //<Task key={item.id} task={item} things={things} setThings={setThings} />


    function handleClose() {
        // props.setPopupState(prevState => prevState.filter(el => el.title == props.title))
        props.popupVariable(false)
    }
    const [isEdit, setIsEdit] = useState(false)
    const [date, setDate] = useState(props.item.date)
    function handleEdit() {
        /**
         * TODO:
         * Save edits into things state
         */


        /**
         * TODO:
         * 
         * get current value of all of the inputs in the popup and set them to the object below
         */
        if (isEdit) {
            // If in edit mode currently:
            const newState = props.things.map(item => {
                if (item.id == props.item.id) {
                    return {
                        ...item,
                        title: 'test',
                        description: 'test',
                        date: 'test',
                        project: 'test',
                        priority: 'test'
                    };
                }
                return item;
            })
            props.setThings(newState)

            setIsEdit(false);
        } else {
            // If in preview mode currently:
            setIsEdit(true);
        }
    }

    return (
        <Draggable allowAnyClick={true} handle='.banner' cancel='.popupTitle' defaultClassName='draggable'>

            <div className='popup' id='popup' >
                <div style={{ backgroundColor: isEdit ? '#bad7f2' : '#baf2d8' }} className='window'>
                    <div className="banner" id='banner' >

                        <h1 className='popupTitle' placeholder='Title' contentEditable={isEdit ? true : false} style={{ cursor: isEdit ? 'text' : 'move', pointerEvents: isEdit ? 'all' : 'none' }}> {props.item.title}</h1>

                        <img className='editIcon' onClick={handleEdit}
                            src={isEdit ? './save.png' : "./edit.png"} alt="" />

                        <img src=".//xIcon.png" alt="close" className='closeIcon' onClick={handleClose} />
                    </div>
                    <div className="top">
                        <div className="projectText">
                            <p>Project:</p>
                            <p contentEditable={isEdit ? true : false}>{props.item.project}</p>

                        </div>
                        {
                            isEdit ?
                                <input className='popup--Date' type="date" value={date} onChange={date => setDate(date.target.value)} /> :
                                <p>Date: {date}</p>
                        }

                    </div>
                    <textarea readOnly={isEdit ? false : true} style={{ color: isEdit ? 'black' : '#8c8684' }} className='window--desc' defaultValue={props.item.description} ></textarea>
                    <p className='window--mode'>{isEdit ? 'Edit' : 'Preview'}</p>
                    <p className='window--priority'>Priority: {props.item.priority}</p>
                </div>
            </div >
        </ Draggable >
    )
}