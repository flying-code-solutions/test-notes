import React, { useState } from "react";

function NewNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  function handleAdd(event) {
    props.addNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="title"
          placeholder="Note title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Note content"
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewNote;
