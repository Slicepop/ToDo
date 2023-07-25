export default function Sidebar(){
    return (
        <div className="leftwindow" >
                <li><div className='button'> + </div></li>
                <li><textarea placeholder='title' name="" className='title'/></li>
                <li><textarea placeholder='description'name="" className='description'/></li>
                <li><input type="date" name="" className='date' /></li>
                <li><select placeholder='p' name="priority" id=""></select></li>
        </div>
    )
}