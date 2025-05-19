import { create } from "zustand";

interface post {
  image: string;
  text: string;
  id: number;
}

interface postState {
  posts: post[];
  addPost: (text: string) => void;
  deletePost: (id: number) => void;
}

const usePostState = create<postState>((set) => ({
  posts: [],
  addPost: (text) =>
    set((state) => ({
      posts: [...state.posts, { image: text, text, id: Date.now() }],
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id != id),
    })),
}));

export default usePostState;
