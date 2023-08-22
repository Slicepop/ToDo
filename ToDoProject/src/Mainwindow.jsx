import './mainwindow.css'
import Task from './/Task'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Filter from './Filter'

export default function Mainwindow() {
    if (localStorage.getItem('Count') === null) {
        localStorage.setItem('Count', 1)
    }
    const [numberOfTasks, setNumberOfTasks] = useState(parseInt(localStorage.getItem('Count')))
    var Tasks = [
        {
            //default sample task
            id: numberOfTasks - 1,
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
        localStorage.setItem('Count', numberOfTasks)
    };


    // This taskCount state is used to add id to each task so there is a key
    const [taskCount, setTaskCount] = useState(things.length)


    var list = things.map(item => {
        return (<Task
            key={item.id}
            task={item}
            things={things}
            setThings={setThings}
        />)
    })
    return (
        <>
            <Sidebar numberOfTasks={numberOfTasks} setNumberOfTasks={setNumberOfTasks} taskCount={taskCount} setTaskCount={setTaskCount} things={things} setThings={setThings} />
            <Filter things={things} setThings={setThings} />
            <h1 className='header'>TaskMe</h1>
            <div className='mainwindow' id='mainwindow' >
                <div className="app">
                    {list}
                </div>
            </div>
        </>
    )
}
