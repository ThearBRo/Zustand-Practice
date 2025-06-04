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
//==== On going with the Tip and Double ====//


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

//==== Creating Advice app ====//


//==== This is for expense tracker ====//
interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id != id),
    })),
}));


///////////////////////////////////////
//==== The Password Generator 🔑====//
//////////////////////////////////////

type PasswordState = {
  length: number;
  includeNumbers: boolean;
  includeSymbles: boolean;
  includeUppers: boolean;
  includeLowers: boolean;
  generatedPassword: string;
  setLength: (length: number) => void;
  toggleNumbers: () => void;
  toggleSymbles: () => void;
  toggleUppers: () => void;
  toggleLowers: () => void;
  generatePassword: () => void;
};

const usePasswordStore = create<PasswordState>((set) => ({
  length: 12,
  includeNumbers: true,
  includeSymbles: false,
  includeUppers: true,
  includeLowers: true,
  generatedPassword: "",

  setLength: (length) => set({ length }),
  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbles: () =>
    set((state) => ({ includeSymbles: !state.includeSymbles })),
  toggleUppers: () => set((state) => ({ includeUppers: !state.includeUppers })),
  toggleLowers: () => set((state) => ({ includeLowers: !state.includeLowers })),

  generatePassword: () =>
    set((state) => {
      const numbers = "0123456789";
      const symbles = "!@#$%^&*()_+{}[]";
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercase = "abcdefghijklmnopqrstuvwxyz";

      let characters = "";

      if (state.includeNumbers) characters += numbers;
      if (state.includeSymbles) characters += symbles;
      if (state.includeUppers) characters += uppercase;
      if (state.includeLowers) characters += lowercase;

      let password = "";

      for (let i = 0; i < state.length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }

      return { generatedPassword: password };
    }),
}));

export default usePasswordStore;

////////////////////////////////////////
//==== Axios and Zustand Practice ====//
////////////////////////////////////////

interface FoodFact {
  foods: any[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

export const useFoodFactStore = create<FoodFact>((set) => ({
  foods: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((foods) => set({ foods, loading: false }))
      .catch((err) => set({ error: err.message, loading: false }));
  },
}));



///////////////////////
//==== Todo Fact ====//
///////////////////////

interface TodoFact {
  foods: any[];
  loading: boolean;
  error: string | null;
  fetchData: () => void;
}

export const useTodoFact = create<TodoFact>((set) => ({
  foods: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((foods) => set({ foods, loading: false }))
      .catch((err) => set({ error: err.message, loading: false }));
  },
}));


/////////////////////////
//==== 2 interface ====//
/////////////////////////



interface Advice {
  id: number;
  advices: string;
}

interface Ideas {
  id: number;
  ideas: string;
}

interface Crud {
  advices: Advice[];
  ideas: Ideas[];
  addAdvice: (advice: Advice) => void;
  addIdeas: (idea: Ideas) => void;
  createDate: () => void;
}

export const useCrudStore = create<Crud>((set) => ({
  advices: [],
  ideas: [],
  addAdvice: (advice) => {},
  addIdeas: (idea) => {},
  createDate: () => {
    axios
      .post("http://127.0.0.1:3000/api/post")
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  },
}));


//////////////////////////
//==== Search Query ====//
//////////////////////////

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface MealStore {
  meals: Meal[];
  searchQuery: string;
  setMeals: (meals: Meal[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useMealStore = create<MealStore>((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals: Meal[]) => set({ meals }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
