import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewNote from "./NewNote";
import Note from "./Note";
import data from "../notes";

function App() {
  const [notes, setNotes] = useState(data);

  function addNote(note) {
    setNotes((prev) => [...prev, note]);
  }

  function removeNote(index) {
    setNotes((prev) => prev.filter((note, i) => i !== index));
  }

  return (
    <div>
      <Header />
      <NewNote addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={"note" + note.key}
          title={note.title}
          content={note.content}
          index={index}
          remove={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
