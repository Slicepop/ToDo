import './mainwindow.css'
import Task from './/Task'
import {useState} from 'react'
import tasks from './/tasks.js'
export default function Mainwindow(){
    return (
        <div className='mainwindow'>
            <Task
            task = {tasks.Task[0]}
            />
        </div>
    )
}