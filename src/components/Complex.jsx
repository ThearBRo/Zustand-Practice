import { useState } from "react";

const History = (props) => {
  const { allClick } = props;

  if (allClick.length === 0) {
    return (
      <div>
        <h1>je parle francais pour trois semaines</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Je suis Thearith </h1>
    </div>
  );
};
const Complex = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClick, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  console.log(allClick);
  const handleRight = () => {
    setRight(right + 1);
    setAll(allClick.concat(" R "));
    setTotal(left + right);
  };

  const handleLeft = () => {
    setLeft(left + 1);
    setAll(allClick.concat(" L "));
    setTotal(left + right);
  };
  return (
    <div>
      <h1>{total}</h1>
      {left}
      <button onClick={handleLeft}>Left</button>
      {right}
      <button onClick={handleRight}>right</button>
      <h1>{allClick.join(" ")}</h1>
      <History allClick={allClick} />
    </div>
  );
};

export default Complex;
