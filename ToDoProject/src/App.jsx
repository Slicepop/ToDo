import { useState } from 'react'
import './index.css'
import Mainwindow from '/src/Mainwindow'

/*
  TODO:

    Add checkmark to delete task when complete
    Add project and priority options on the add task sidebar
    Maybe add a <p> at the bottom left that specifies if the popup is in edit mode
    
    Filter capabilities:
      filter by search
      filter by project
      filter by priority

    Figure out local storage


  FIXME:

  Saving doesn't actually saves the array

      
*/



export default function App() {
  return (
    <>
      <Mainwindow />
    </>
  )
}
