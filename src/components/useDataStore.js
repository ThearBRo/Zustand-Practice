import { create } from "zustand";
import axios from "axios";

export const productStore = create((set) => ({
  product: {},
  isLoading: false,
  error: null,

  fetchData: async () => {
    // Set isLoading to true while fetching data
    set({ isLoading: true });

    try {
      // Perform your async API call
      await axios
        .get("")
        .then((res) => res.json())
        .then((data) => set({ product: data }));
    } catch (error) {
      // Set the fetched data in the store
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
