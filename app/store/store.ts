import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer, tasksSlice} from "@/app/store/tasks-slice";
import {todolistsReducer, todolistsSlice} from "@/app/store/todolist-slice";
import {appReducer, appSlice} from "@/app/store/app-slice";

export const store = configureStore({
    reducer: {
        [tasksSlice.name]: tasksReducer,
        [todolistsSlice.name]: todolistsReducer,
        [appSlice.name]: appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch