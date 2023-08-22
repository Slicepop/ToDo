import { useState } from 'react'
import './sidebar.css'
export default function Filter(props) {
    const [searchTerm, setSearchTerm] = useState('')
    function handleOnChange(evt) {
        setSearchTerm(evt.target.value)
        props.setThings(prevState => prevState.filter(item => {
            if (item.title == searchTerm) {
                return item
            }
            return 0
        }))

    }


    return (
        <div className='rightwindow' >
            <div className="search">
                <input type="text" name="" id="searchKey" value={searchTerm} onChange={evt => handleOnChange(evt)} />
                {/* will need to array.filter(searchTerm) will update as it is typed */}

            </div>
            <select defaultValue={'Priority'} name="priority" id="" ></select>
            <select defaultValue={'Priority'} name="project" id="" ></select>

        </div>
    )
}