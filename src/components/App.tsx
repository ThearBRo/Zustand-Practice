import useCounterStore from "./useCounterStore";

const App = () => {
  const { count, inc, dec } = useCounterStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>increase</button>
      <button onClick={dec}>decrease</button>
      <br />
      <br />
    </div>
  );
};

export default App;
