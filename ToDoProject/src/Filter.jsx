import { useState } from 'react'
import './sidebar.css'
export default function Filter(props) {
    const [searchTerm, setSearchTerm] = useState('')
    function handleOnClick() {
        //var filteredArray = data.filter((item) => item[filter] === keyword);


        // props.setThings(prevState => prevState.filter(term => term[filter] === (searchTerm)))

        // props.things.map(item => {
        //     if (item.title.includes(searchTerm, 0)) {
        //         props.setThings(prevThings => [item])
        //         console.log(props.things)

        //     } else {
        //     }


        // })
    }
    return (
        <div className='rightwindow' onMouseEnter={props.onMouseEnter}>
            <div className="search">
                <input type="text" name="" id="searchKey" value={searchTerm} onChange={evt => setSearchTerm(evt.target.value)} />
                <img src="./search.png" alt="search" onClick={handleOnClick}
                />
            </div>
            <select defaultValue={'Priority'} name="priority" id="" ></select>
            <select defaultValue={'Priority'} name="project" id="" ></select>

        </div>
    )
}