import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [userName, setUserName] = useState("");
  const [desc, setDesc] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/notes/");
      const data = await response.json();
      setNotes(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addNote = async () => {
    const noteData = { userName, desc };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/notes/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noteData),
      });

      const data = await response.json();
      setNotes((prev) => [...prev, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateName = async (pk, desc) => {
    const noteData = {
      userName: newName,
      desc,
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/notes/${pk}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noteData),
      });

      const data = await response.json();

      // Update correct note in the list
      setNotes((prev) =>
        prev.map((note) => (note.id === pk ? data : note))
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Personal Notes</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <label>Note Description: </label>
        <input
          type="text"
          placeholder="Write Your Notes Here"
          onChange={(e) => setDesc(e.target.value)}
        />{" "}
        <br />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div>
        <h1>Display Notes</h1>

        {notes.map((item) => (
          <div key={item.id}>
            <p>Name: {item.userName}</p>
            <p>Description: {item.desc}</p>

            <input
              type="text"
              placeholder="Update Name ..."
              onChange={(e) => setNewName(e.target.value)}
            />
            <button type="button" onClick={() => updateName(item.id, item.desc)}>
              Update Name
            </button>

            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
