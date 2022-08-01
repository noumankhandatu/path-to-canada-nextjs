import { configureStore } from "@reduxjs/toolkit";
import BlogSlicer from "./blogSlicer";

const store = configureStore({
  reducer: {
    BlogSlicer: BlogSlicer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const selectTodo = (state: RootState) => state.BlogSlicer.data;
// this rootstate share the entire reducer

export type AppDispatch = typeof store.dispatch;
// useDispatch
