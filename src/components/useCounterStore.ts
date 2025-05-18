import { create } from "zustand";

interface CounterState {
  count: number;
  inc: () => void;
  dec: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
