import { useState } from "react";

const Noted = (props) => {
  const { key, note } = props;
  return (
    <div>
      <li key={key}>{note}</li>
    </div>
  );
};

const Note = () => {
  // const [newNote, setNewNote] = useState("Add a note");
  const [show, setShow] = useState(true);

  // const handleAdd = () => {
  //   setNewNote();
  // };

  return (
    <div>
      <h1>This is a note data send</h1>
      {/* <div>
        <ul>
          {notes.map((note) => (
            <Noted key={note.id} note={note.note} />
          ))}
        </ul>
      </div> */}
      <div>Game</div>
      <h1>{show ? "Important" : "not important"}</h1>
      <button onClick={() => setShow(!show)}>Click me to change</button>
      <form>
        {/* <input
          type="text"
          value={newNote}
          onChange={(e) => setNotes(e.target.value)}
        /> */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Note;
