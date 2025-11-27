import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  useEffect (() => {
    fetchNotes();
  },[])

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/notes/");
      const data = await response.json()
      setNotes(data);
      console.log(data)
    } catch (err) {
      console.log(err);
      
    }
  }

  return (
    <>
      <h1>Personal Notes</h1>
      <div>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder='Enter Your Name' /> <br /> 
            <label htmlFor="desc">Note Description : </label>
            <input type="text" placeholder='Write Your Notes Here' /> <br />
            <button>Add Note</button>
      </div>

      <div>
        <h1>Display Notes</h1>
        {notes.map((item)=>(
          <div key={item.id}>
            <p>Name : {item.userName} </p>
            <p>Descriptions : {item.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
