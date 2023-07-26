import './mainwindow.css'
import Task from './/Task'
import {useState} from 'react'
import tasks from './/tasks.js'
import Sidebar from './Sidebar'
import Popup from './Popup'

export default function Mainwindow(){
    const [things,setThings] = useState(tasks.Task)
    var list = things.map(item => <Task key = {item.description} task = {item}/>)
    
    return (
        <>
        <Sidebar
        setThings = {setThings}
        />
        <Popup/>
        <div className='mainwindow' id='mainwindow' >
            {list}
        </div>
        </>
    )
}
