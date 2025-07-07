import { useState } from "react";

const HandleAge = () => {
  const [val, setVal] = useState(0);

  const setValu = (newVal) => {
    console.log("The val is : " + newVal);
    setVal(newVal);
  };

  return (
    <div>
      <h1>{val}</h1>
      <button onClick={() => setValu(1000)}>1000</button>
      <button onClick={() => setValu(10)}>10</button>
      <button onClick={() => setValu(0)}>0</button>
    </div>
  );
};

export default HandleAge;
