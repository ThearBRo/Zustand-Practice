import { create } from "zustand";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id != id),
    })),
}));

// 2 practical

interface Game {
  id: number;
  game: string;
  genre: string[];
  country: string;
}

interface GameStore {
  games: Game[];
  addGame: (game: Game) => void;
  removeGame: (id: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  games: [],
  addGame: (game) => set((state) => ({ games: [...state.games, game] })),
  removeGame: (id) =>
    set((state) => ({ games: state.games.filter((game) => game.id != id) })),
}));

//==== Double Todo List ====//

interface DoubleTodo {
  id: number;
  title: string;
  tasks: string[];
  deadline: string;
}

interface DoubleTodoStore {
  doubles: DoubleTodo[];
  addTodo: (todo: DoubleTodo) => void;
  removeTodo: (id: number) => void;
}

export const useDoubleTodoStore = create<DoubleTodoStore>((set) => ({
  doubles: [],
  addTodo: (double) =>
    set((state) => ({ doubles: [...state.doubles, double] })),
  removeTodo: (id) =>
    set((state) => ({
      doubles: state.doubles.filter((double) => double.id != id),
    })),
}));

//==== Tip and Trick to ace our day ====//

interface Tip {
  id: number;
  tip: string[];
}

interface TipStore {
  allTips: Tip[];
  addTip: (tip: Tip) => void;
  removeTip: (id: number) => void;
}

export const useTipStore = create<TipStore>((set) => ({
  allTips: [],
  addTip: (tip) => set((state) => ({ allTips: [...state.allTips, tip] })),
  removeTip: (id) =>
    set((state) => ({
      allTips: state.allTips.filter((tip) => tip.id != id),
    })),
}));
