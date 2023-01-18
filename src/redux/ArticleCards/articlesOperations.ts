import { createAsyncThunk } from "@reduxjs/toolkit";

import { getArticlesApi } from "../../services/api/articles";

import { IDataFromBackend } from "../../Interfaces/Interfaces";





export const getArticles = createAsyncThunk<
  IDataFromBackend[],
  undefined,
  { rejectValue: string }
>("articles", async (_, { rejectWithValue }) => {
  try {
    const data = await getArticlesApi();

    return data;
  } catch (error: any) {
    alert(error.message);
    return rejectWithValue(error.message);
  }
});
