import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // [tasksSlice.name]: tasksReducer,
        // [todolistsSlice.name]: todolistsReducer,
        // [appSlice.name]: appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch