import './/task.css'

export default function Task(props){
    function openpop(){
        const openedTask = document.getElementById('popup')
        openedTask.style.zIndex = '1'
    }
    return (
        <div className="task" onClick={openpop}>
            <h4 className='title'>{props.task.title}</h4>
            <p className='desc'>{props.task.description}</p>
            <p className='project'>{props.task.project}</p>
            <p className='priority'>{props.task.priority}</p>
            <p className='date'>{props.task.date}</p>
        </div>
    )
}   