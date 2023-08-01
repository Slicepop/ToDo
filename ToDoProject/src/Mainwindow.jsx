import './mainwindow.css'
import Task from './/Task'
import { useState } from 'react'
import tasks from './/tasks.js'
import Sidebar from './Sidebar'
import Popup from './Popup'
import Filter from './Filter'
import Test from './Test'

export default function Mainwindow() {

    const [things, setThings] = useState(tasks.Task)
    var list = things.map(item => <Task key={item.description + item.title + item.date} task={item} setThings={setThings} />)
    return (
        <>
            <Sidebar things={things} setThings={setThings} />

            <Filter setThings={setThings} things={things} />
            <div className='mainwindow' id='mainwindow' >
                <div className="app">
                    {list}
                </div>
            </div>
        </>
    )
}
