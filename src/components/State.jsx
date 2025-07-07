import { useState } from "react";

const State = () => {
  const [state, setState] = useState(0);

  //   setTimeout(() => {
  //     setState(state + 1);
  //   }, 3000);
  const handleStop = () => {
    setTimeout(() => {
      setState(state);
    }, 3000);
  };
  const handleContinue = () => {
    setTimeout(() => {
      setState(state + 1);
    }, 3000);
  };

  return (
    <div>
      {state}
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default State;
