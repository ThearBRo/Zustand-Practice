import { create } from "zustand";
import axios from "axios";

const gameStore = create((set) => ({
  games: [],
  isLoading: false,
  error: null,

  fetchData: async () => {
    set({ isLoading: true });
    await axios
      .post("http://127.0.0.1:5000/game")
      .then((res) => res.json())
      .then((data) => set({ games: data }))
      .catch((err) => set({ err: err.message }))
      .finally((err) => set({ isLoading: false }));
  },
}));
export default gameStore;
