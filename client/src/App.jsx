import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [userName , setUserName] = useState("")
  const [desc, setDesc] = useState("")


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

const addNote = async () => {
  const noteData = {
    userName,
    desc
  }
  try {
    const response = await fetch("http://127.0.0.1:8000/api/notes/create/" , {
    method: "POST",
    headers: {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(noteData)
  });
  const data = await response.json()
  console.log(data)
    setNotes((prev) => [...prev, data])
  } catch (err) {
    console.log(err)
  }
  
}

  return (
    <>
      <h1>Personal Notes</h1>
      <div>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder='Enter Your Name' onChange={(e)=> setUserName(e.target.value)} /> 
            <br /> 
            <label htmlFor="desc">Note Description : </label>
            <input type="text" placeholder='Write Your Notes Here' onChange={(e)=> setDesc(e.target.value)} /> <br />
            <button onClick={addNote}>Add Note</button>
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
