import './sidebar.css'
import tasks from './/tasks.js'
import Task from './Task'
import { useState } from 'react'
export default function Sidebar(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    let yourDate = new Date()
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset * 60 * 1000));
    const formattedDate = yourDate.toISOString().split('T')[0];
    const [date, setDate] = useState(formattedDate)
    const [project, setProject] = useState('')
    const [priority, setPriority] = useState('Low')
    var count = tasks.Task.length - 1



    /* TODO:
        
        make it so the user can make new projects and have them update to the options
        
    */
    var projects

    function addtask() {
        if (title == '') {

        } else {
            setTitle('')
            setDesc('')
            setDate(formattedDate)
            setPriority('Low')
            props.setTaskCount(prevState => prevState + 1)
            props.setThings(prevState => [...prevState,
            {
                'id': props.taskCount,
                'title': title,
                'description': desc,
                'project': 'Default',
                'priority': priority,
                'date': date

            }
            ])
            localStorage.setItem("tasks", JSON.stringify(props.things));

        }
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

            <li><p>Project: <select name="project" id="project">
                {projects}
            </select></p>
            </li>
            <li><p>Priority: <select name="priority" id="priority" value={priority} onChange={select => setPriority(select.target.value)}>
                <option value="Low" >Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select></p>
            </li>
        </div>
    )
}