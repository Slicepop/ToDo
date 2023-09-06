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
    var title = props.item.title
    const [description, setDescription] = useState(props.item.description)
    var project = props.item.project
    const [date, setDate] = useState(props.item.date)
    const [priority, setPriority] = useState(props.item.priority)



    function handleInput(e) {
        // (e.target.value)3
    }
    function reverseString(str) {
        if (str === "")
            return "";
        else
            return reverseString(str.substr(1)) + str.charAt(0);
    }
    function handleEdit() {
        if (isEdit) {
            // If in edit mode currently:
            const newState = props.things.map(item => {
                if (item.id == props.item.id) {
                    return {
                        ...item,
                        title: title,
                        description: description,
                        date: date,
                        project: project,
                        priority: priority
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
    // TODO: Project needs to be a drop down but for now it is just text

    return (
        <Draggable allowAnyClick={true} handle='.banner' cancel={'.popupTitle, .editIcon, .closeIcon'} defaultClassName='draggable'>

            <div className='popup' id='popup' >
                <div style={{ backgroundColor: isEdit ? '#bad7f2' : '#baf2d8' }} className='window'>
                    <div className="banner" id='banner' >

                        <h1
                            className='popupTitle'
                            placeholder='Title'
                            contentEditable={isEdit ? true : false}
                            suppressContentEditableWarning={true}
                            defaultValue={title}
                            onInput={(e) => {
                                title = e.currentTarget.textContent
                            }}

                            style={{ cursor: isEdit ? 'text' : 'move', pointerEvents: isEdit ? 'all' : 'none' }}
                        >{title}</h1>

                        <img className='editIcon' onClick={handleEdit}
                            src={isEdit ? './save.png' : "./edit.png"} alt="" />

                        <img src=".//xIcon.png" alt="close" className='closeIcon' onClick={handleClose} />
                    </div>
                    <div className="top">
                        <div className="projectText">

                            <p>Project:</p>
                            <p
                                suppressContentEditableWarning={true}

                                contentEditable={isEdit ? true : false}
                                onInput={(e) => {
                                    project = e.currentTarget.textContent
                                }}
                            >{project}</p>

                        </div>
                        {
                            isEdit ?
                                <input
                                    className='popup--Date'
                                    type="date"
                                    value={date}
                                    onChange={date => setDate(date.target.value)}
                                /> :
                                <p>Date: {date}</p>
                        }

                    </div>
                    <textarea
                        readOnly={isEdit ? false : true}
                        style={{ color: isEdit ? 'black' : '#8c8684' }}
                        className='window--desc'
                        defaultValue={description}
                        onChange={text => setDescription(text.target.value)}
                    ></textarea>

                    <p className='window--mode'>{isEdit ? 'Edit Mode' : ''}</p>
                    {
                        isEdit ?
                            <select className='selectPriority' defaultValue={props.item.priority} name="" id="selectPriority"
                                onChange={change => setPriority(change.target.value)}
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>

                            </select>
                            :
                            <p className='window--priority'>Priority: {props.item.priority}</p>
                    }
                </div>
            </div >
        </ Draggable >
    )
}