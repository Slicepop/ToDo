import './mainwindow.css'
import Task from './/Task'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Filter from './Filter'

export default function Mainwindow() {
    var Tasks = [
        {
            //default sample task
            id: 0,
            title: "Sample Title",
            description: "Click on me to open up a window to edit!",
            project: "Sample",
            priority: "High",
            date: "2023-07-28",
        }
    ]

    // If the user does not have the local storage of tasks create a key with the task
    if (localStorage.getItem('Tasks') === null) {
        localStorage.setItem('Tasks', JSON.stringify(Tasks))
    }
    // This is where I set the local storage data to the state
    var test = JSON.parse(localStorage.getItem('Tasks'))
    const [things, setThings] = useState(test)

    // If the tab is being closed save the state that has the tasks to local storage
    addEventListener("pagehide", (event) => { });
    onpagehide = (event) => {
        localStorage.setItem('Tasks', JSON.stringify(things))
    };


    // This taskCount state is used to add id to each task so there is a key
    const [taskCount, setTaskCount] = useState(things.length)
    var list = things.map(item => <Task key={item.id} task={item} things={things} setThings={setThings} />)
    return (
        <>
            <Sidebar taskCount={taskCount} setTaskCount={setTaskCount} things={things} setThings={setThings} />

            <Filter setThings={setThings} things={things} />
            <div className='mainwindow' id='mainwindow' >
                <div className="app">
                    {list}
                </div>
            </div>
        </>
    )
}
