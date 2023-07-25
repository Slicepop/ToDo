import { useState } from 'react'
import './index.css'
import Mainwindow from '/src/Mainwindow'
import Sidebar from './Sidebar'

/*
  Sprints
    Make rightwindow that has 
      filters ie. priority and prejects
      search function
    Make task.jsx
      make it cache look at june dasilva's notes for inspo
    Export/import functions
    Add header
*/



export default function App(){
  return (
    <>
      <Sidebar/>
      <Mainwindow />

    </>
  )
}
