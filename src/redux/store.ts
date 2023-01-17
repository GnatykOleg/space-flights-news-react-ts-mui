import { configureStore } from "@reduxjs/toolkit";

import articlesSlice from "./ArticleCards/articlesSlice";

const store = configureStore({
  reducer: articlesSlice,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
