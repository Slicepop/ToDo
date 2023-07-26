import './popup.css'

export default function Popup(){
    function close(){
        const openedTask = document.getElementById('popup')
        openedTask.style.zIndex = '-1'
    }
    return (
        <div className='popup' id='popup'>
            <div className="window">
                <div className="banner">
                    <h1>Title</h1>
                    <img src= ".//xIcon.png" alt="close" className='closeIcon' onClick={close}/>
                </div>
                <div className="top">
                    <p>project</p>
                    <p>date</p>
                </div>
                <textarea readOnly className='window--desc'></textarea>
                <p className='window--priority'>Priority: High</p>
            </div>
        </div>
    )
}