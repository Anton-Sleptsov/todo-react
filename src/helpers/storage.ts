import { RootState } from "../store";

export const saveToLocalStorage = (store: RootState) => {
  const appState = JSON.stringify(store);
  localStorage.setItem("appState", appState);
};

export const loadFromLocalStorage = () => {
  const appState = localStorage.getItem("appState");
  if (!appState) return undefined;
  return JSON.parse(appState);
};
