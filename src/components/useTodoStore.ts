import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const useTodoState = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id != id),
    })),
}));

export default useTodoState;



//////// 2 Arrays or more //////////

interface eat {
  id: number;
  text: string;
  completed: boolean;
}

interface drink {
  id: number;
  text: string;
  completed: boolean;
}

interface EatAndDrinkState {
  eats: eat[];
  drinks: drink[];
  addEatAndDrink: (text: string) => void;
  deleteEatAndDrink: (id: number) => void;
}

export const useEatAndDrinkState = create<EatAndDrinkState>((set) => ({
  eats: [],
  drinks: [],
  addEatAndDrink: (text) =>
    set((state) => ({
      eats: [...state.eats, { text, id: Date.now(), completed: false }],
      drinks: [...state.drinks, { text, id: Date.now(), completed: false }],
    })),
  deleteEatAndDrink: (id) =>
    set((state) => ({
      eats: state.eats.filter((eats) => eats.id != id),
      drinks: state.drinks.filter((drinks) => drinks.id != id),
    })),
}));
