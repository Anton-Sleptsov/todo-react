import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ToDo from "../models/ToDoItem";
import { getAllToDosFromServer, createToDoInServer, deleteToDoInServer, updateStatusToDoInServer } from "../repository";

export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

// Асинхронные экшены для работы с сервером
export const fetchAllToDos = createAsyncThunk("todoList/fetchAll", async () => {
  const response = await getAllToDosFromServer();
  return response;
});

export const createToDoAsync = createAsyncThunk("todoList/create", async (text: string) => {
  const response = await createToDoInServer(text);
  return response;
});

export const deleteToDoAsync = createAsyncThunk("todoList/delete", async (id: number) => {
  await deleteToDoInServer(id);
  return id;
});

// Асинхронный экшен для обновления статуса задачи через сервер
export const updateStatusToDoAsync = createAsyncThunk("todoList/updateStatus", async (id: number) => {
  const response = await updateStatusToDoInServer(id);
  return response; // Возвращаем обновленную задачу с сервера
});

// Создаем слайс
export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllToDos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(createToDoAsync.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload];
      })
      .addCase(deleteToDoAsync.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(updateStatusToDoAsync.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        const todoIndex = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
        if (todoIndex !== -1) {
          state.todos[todoIndex] = updatedTodo; // Обновляем задачу в стейте после ответа сервера
        }
      });
  },
});

export default todoSlice.reducer;
