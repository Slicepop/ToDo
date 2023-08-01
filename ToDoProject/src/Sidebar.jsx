import './sidebar.css'
import tasks from './/tasks.js'
import Task from './Task'
import { useState } from 'react'
export default function Sidebar(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')
    const [project, setProject] = useState('')
    const [priority, setPriority] = useState('')
    var count = tasks.Task.length - 1

    function addtask() {

        props.setThings(prevState => [...prevState,
        {
            'id': ++count,
            'title': title,
            'description': desc,
            'project': 'Default',
            'priority': 'High',
            'date': date

        }
        ])
        localStorage.setItem("tasks", JSON.stringify(props.things));
    }
    return (
        <div className="leftwindow" >
            <li><div className='button' onClick={addtask}> + </div></li>
            <li><textarea placeholder='Title'
                name="" className='title'
                value={title}
                onChange={t => setTitle(t.target.value)}
            /></li>
            <li><textarea placeholder='Description' name="" className='description'
                value={desc}
                onChange={t => setDesc(t.target.value)}
            /></li>
            <li><input type="date" name="" className='dates'
                value={date}
                onChange={t => setDate(t.target.value)}
            /></li>
            <li><select placeholder='p' name="priority" id=""></select></li>
        </div>
    )
}