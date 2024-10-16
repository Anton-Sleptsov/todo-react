import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./feature/todoList";
import toggleReduser from "./feature/themeList";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";

export const store = configureStore({
  reducer: {
    todoList: todoReduser,
    themeList: toggleReduser,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
