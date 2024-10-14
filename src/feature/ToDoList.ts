import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ToDo from "../models/ToDoItem";

export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: state.todos.length,
        text: action.payload,
        isDone: false,
      };
  
      state.todos = [...state.todos, newToDo];
    },
    updateStatusAction: (state, action: PayloadAction<number>) => {
      const newTodos: ToDo[] = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
  
      state.todos = newTodos;
    },
    deleteAction: (state, action: PayloadAction<number>) => {
      const newTodos: ToDo[] = state.todos.filter((todo) => todo.id !== action.payload);

      state.todos = newTodos;
    },
  },
});

export const { createAction, updateStatusAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
