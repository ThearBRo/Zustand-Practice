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
  name: string;
  type: string[];
  instruction: string;
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
