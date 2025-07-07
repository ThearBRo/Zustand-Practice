import { useEffect, useState } from "react";
import noteService from "../services/notes";
import "../index.css";

const GetDataURL = () => {
  const [notes, setNotes] = useState([]);
  // const [newNote, setNewNote] = useState("");
  const [show, setShow] = useState(true);
  const [errorMessage, setErrorMessage] = useState("something went wrong...");

  const noteshow = show ? notes : notes.filter((note) => note.important);

  const handleToggleImportant = (id) => {
    console.log(" This is important : " + id);

    const note = notes.find((n) => n.id === id);
    const changeNote = { ...note, important: !note.important };

    noteService
      .update(id, changeNote)
      .then((returnNote) => {
        setNotes(
          notes.map((note) => (note.id === id ? returnNote.data : note))
        );
      })
      .catch((err) => {
        setErrorMessage(
          `noted : ${note.content} was already deleted from server ${err}`
        );
        setTimeout(() => setErrorMessage(null), 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  useEffect(() => {
    noteService.getURL().then((initalNotes) => {
      setNotes(initalNotes.data);
      console.log(initalNotes.data);
    });
  }, []);

  // const addNote = (e) => {
  //   e.preventDefault();
  //   const newObject = {
  //     content: newNote,
  //     important: Math.random() > 0.5,
  //   };

  //   noteService.create(newObject).then((returnNote) => {
  //     setNewNote(notes.concat(returnNote.data));
  //     setNewNote("");
  //   });
  // };

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <button onClick={() => setShow(!show)}>
        show {show ? "Important" : "All"}
      </button>
      <ul>
        {noteshow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportant={() => handleToggleImportant(note.id)}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default GetDataURL;

//////////////////////////////
////==== ChildElement ====////
//////////////////////////////

const Note = ({ note, toggleImportant }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      {note.content}
      <span> </span>
      <button onClick={toggleImportant}>{label}</button>
    </li>
  );
};

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
  };

  return (
    <div style={footerStyle}>
      <br />
      <p>
        Note app, Department of Computer Science, University of Helsinki 2025
      </p>
    </div>
  );
};
