import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
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
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setFilter } = articlesSlice.actions;

export default articlesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
