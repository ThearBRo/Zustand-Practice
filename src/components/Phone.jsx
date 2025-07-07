import { useState } from "react";

const Phone = () => {
  const [person, setPerson] = useState([{ name: "Thearith" }]);
  const [name, setName] = useState("");

  const handleadd = () => {
    setPerson(name);
  };

  return (
    <div>
      <h1>Phone</h1>
      <form onSubmit={handleadd}>
        <div>
          name :
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add name</button>
        </div>
      </form>
      <h1>Number</h1>
      {person.map((name) => (
        <p>{name.name}</p>
      ))}
    </div>
  );
};

export default Phone;
