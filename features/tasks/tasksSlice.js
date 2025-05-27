import { createSlice } from "@reduxjs/toolkit";
/*para los datos*/
const initialState = [
  {
    title: "Task 1",
    completed: false,
    description: "This is a task",
  },
  {
    title: "Task 2",
    completed: false,
    description: "This is a task",
  },
  /*{
    id: "3",
    title: "Task 3",
    completed: false,
    description: "This is a task",
  },
  {
    id: "3",
    title: "Task 3",
    completed: false,
    description: "This is a task",
  },
  {
    id: "4",
    title: "Task 4",
    completed: false,
    description: "This is a task",
  },
  {
    id: "5",
    title: "Task 5",
    completed: false,
    description: "This is a task",
  },*/
];

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;
/*x*/