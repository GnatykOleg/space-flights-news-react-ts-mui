import { createSlice } from "@reduxjs/toolkit";
import { getArticles } from "./articlesOperations";
import { IArticlesState } from "../../Interfaces/Interfaces";

const initialState: IArticlesState = {
  data: [],
  loading: false,
  error: null,
  filter: "",
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getArticles.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { setFilter } = articlesSlice.actions;

export default articlesSlice.reducer;
