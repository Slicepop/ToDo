import './popup.css'

export default function Popup(){
    function close(){
        const openedTask = document.getElementById('popup')
        openedTask.style.zIndex = '-1'
    }
    return (
        <div className='popup' id='popup'>
            <div className="window">
                <img src= ".//xIcon.png" alt="close" className='closeIcon' onClick={close}/>
                <div className="top">
                    <h1>Title</h1>
                    <div className="topRight">
                        <p>project</p>
                        <p>date</p>
                    </div>
                </div>
                <textarea readOnly className='window--desc'></textarea>
                <p className='window--priority'>Priority: High</p>
            </div>
        </div>
    )
}