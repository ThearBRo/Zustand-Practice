import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),

  dec: () => set((state) => ({ count: state.count - 1 })),

  // setCount: (e) => set((state) => ({ count: e })),
}));

function Prac() {
  const { count, inc, dec } = useStore(); // setCount function

  return (
    <div>
      <h1>This is a zustand practice page</h1>
      <span>{count}</span>
      <button onClick={inc}>increase</button>
      <button onClick={dec}>decrease</button>
      {/* <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      /> */}
    </div>
  );
}

export default Prac;
