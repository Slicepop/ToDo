import { useState } from 'react'
import './index.css'
import Mainwindow from '/src/Mainwindow'

/*
  TODO:

    ✔ Add checkmark to delete task when complete 
        Ask with a popup "Are you sure you want to finish this task?"

✔  Add project and priority options on the add task sidebar  
✔  Maybe add a <p> at the bottom left that specifies if the popup is in    edit mode  
    
    Filter capabilities:
      filter by search
      filter by project
      filter by priority


    ✔ Figure out local storage
          Only saves as tab is being closed
          Is this the best way to do it?

  FIXME:

  [✔] Saving doesn't actually save the array
  [✔] mobile doesn't allow onClick:
        Stack overflow says just add the buttons to the cancel attribute  

      
*/



export default function App() {
  return (
    <>
      <Mainwindow />
    </>
  )
}
