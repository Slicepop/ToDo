import './sidebar.css'
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

    /**
     * TODO:
     * Make it so the user can make new projects and have them update to the options
     */


    function addtask() {
        props.setNumberOfTasks(prevState => prevState = prevState + 1)
        var testtt = props.numberOfTasks

        if (title !== '') {
            // If the title has a name then clear the options to default
            setTitle('')
            setDesc('')
            setDate(formattedDate)
            setPriority('Low')
            setProject('')
            props.setTaskCount(prevState => prevState + 1)
            props.setThings(prevState => [...prevState,
            {
                'id': (testtt),
                'title': title,
                'description': desc,
                'project': project,
                'priority': priority,
                'date': date

            }])

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
            <li><input placeholder='Project' name="project" id="project" value={project} onChange={text => setProject(text.target.value)} /></li>
            <li><input type="date" name="" className='dates'
                value={date}
                onChange={t => setDate(t.target.value)}
            />
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