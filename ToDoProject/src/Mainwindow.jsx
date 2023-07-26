import './mainwindow.css'
import Task from './/Task'
import {useState} from 'react'
import tasks from './/tasks.js'
import Sidebar from './Sidebar'

export default function Mainwindow(){
    const [things,setThings] = useState(tasks.Task)
    var list = things.map(item => <Task key = {item.title} task = {item}/>)
    
    return (
        <>
      <Sidebar
      setThings = {setThings}
      />
        <div className='mainwindow'>
            {list}
        </div>
        </>
    )
}
