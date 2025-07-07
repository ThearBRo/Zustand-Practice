import axios from "axios";
import { useEffect, useState } from "react";
const GetData = () => {
  const [note, setnote] = useState([]);
  const [person, setPerson] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/note").then((res) => {
      console.log(res.data);
      setnote(res.data);
    });
    axios.get("http://localhost:3000/persons").then((res) => {
      console.log(res.data);
      setPerson(res.data);
    });
  }, []);


  return (
    <div>
      <h1>GetData</h1>
      <ul>
        {note.map((p) => (
          <li key={p.id}>{p.content}</li>
        ))}
      </ul>
      <h1>Get all person and their number</h1>
      <ul>
        {person.map((p) => (
          <li key={p.id}>{p.name} Here is my number : {p.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetData;
