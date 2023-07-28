import './/task.css'

export default function Task(props) {
    function openPopup() {
        props.setPopupState(prevState => [...prevState, {
            'title': props.task.title,
            'description': props.task.description,
            'project': props.task.project,
            'priority': props.task.priority,
            'date': props.task.date
        }])
    }
    return (
        <div className="task" onClick={openPopup}>
            <h5 className='title'>{props.task.title}</h5>
            <p className='desc'>{props.task.description}</p>
            <p className='project'>Project: {props.task.project}</p>
            <p className='priority'>Priority: {props.task.priority}</p>
            <p className='date'>{props.task.date}</p>
        </div>
    )
}   