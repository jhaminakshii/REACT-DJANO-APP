import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Personal Notes</h1>
      <label htmlFor="name">Name: </label>
      <input type="text" placeholder='Enter Your Name' /> <br /> 
      <label htmlFor="desc">Note Description : </label>
      <input type="text" placeholder='Write Your Notes Here' /> <br />

      <button>Add Note</button>
    </>
  )
}

export default App
