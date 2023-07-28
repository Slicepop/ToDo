import './mainwindow.css'
import Task from './/Task'
import { useState } from 'react'
import tasks from './/tasks.js'
import Sidebar from './Sidebar'
import Popup from './Popup'
import Filter from './Filter'
import Test from './Test'

export default function Mainwindow() {
    // const [title, setTitle] = useState('Default Title')
    // const [desc, setDesc] = useState('Default Desc')
    // const [project, setProject] = useState('Default Project')
    // const [priority, setPriority] = useState('Default Priority')
    // const [date, setDate] = useState('Default Date')

    const [popupState, setPopupState] = useState([])

    function handleTaskClick(item) {
        console.log(item)
        setPopupState(prevState => [...prevState,
        {
            'title': item.title,
            'description': item.desc,
            'project': item.project,
            'priority': item.priority,
            'date': item.date
        }
        ])

    }
    const [things, setThings] = useState(tasks.Task)
    var list = things.map(item => <Task setPopupState={setPopupState} key={item.description} task={item} onClick={() => handleTaskClick(item)} />)
    const [testState, setTestState] = useState(tasks.Task)
    var popups = popupState.map(test => {
        return (
            <Popup item={test} setPopupState={setPopupState} />
        )
    })

    // var popups = popupState.map(item => {
    //     <Popup
    //     // item={
    //     //     {
    //     //         'title': item.title,
    //     //         'description': item.desc,
    //     //         'project': item.project,
    //     //         'priority': item.priority,
    //     //         'date': item.date
    //     //     }
    //     // }
    //     />
    // })

    return (
        <>
            <Sidebar setThings={setThings} />
            {popups}
            <Filter setThings={setThings} things={things} />
            <div className='mainwindow' id='mainwindow' >
                <div className="app">
                    {list}
                </div>
            </div>
        </>
    )
}
