import { create } from "zustand";

const productStore = create((set) => ({
  product: [],
  isLoading: false,
  error: null,

  fetchData: async () => {
    // Set isLoading to true while fetching data
    set({ isLoading: true });

    try {
      // Perform your async API call
      console.log("Api");
      await fetch("http://127.0.0.1:5000/json")
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

export default productStore;
