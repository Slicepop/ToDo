import './sidebar.css'
import tasks from './/tasks.js'
import Task from './Task'
import { useState } from 'react'
export default function Sidebar(props){
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [date,setDate] = useState('')
    const [project,setProject] = useState('')
    const [priority,setPriority] = useState('')
    
    function addtask(){
        
        props.setThings(prevState => [...prevState,{
                'title': title,
                'description': desc,
                'project': 'Default',
                'priority': 'hasdigh',
                'date': date

        }])
    }
    return (
        <div className="leftwindow" >
                <li><div className='button' onClick={addtask}> + </div></li>
                <li><textarea placeholder='title' 
                name="" className='title'
                value={title}
                onChange={t => setTitle(t.target.value)}
                /></li>
                <li><textarea placeholder='description'name="" className='description'
                value={desc}
                onChange={t => setDesc(t.target.value)}
                /></li>
                <li><input type="date" name="" className='date' 
                value={date}
                onChange={t => setDate(t.target.value)}
                /></li>
                <li><select placeholder='p' name="priority" id=""></select></li>
        </div>
    )
}