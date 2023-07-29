import { useState } from 'react'
import './index.css'
import Mainwindow from '/src/Mainwindow'

/*
  Sprints
    Make rightwindow 
      filters ie. priority and prejects
      search function
    Make task.jsx
      make it cache look at june dasilva's notes for inspo

    Export/import functions
    Add footer

    Make edit mode that changes the background to that blue we use
      Date will be a problem 
    Close still does not work
      the problem is that I need to look at the object that I clicked inside a array and find the index then remove the object at the index
      
*/



export default function App() {
  return (
    <>
      <Mainwindow />
    </>
  )
}
