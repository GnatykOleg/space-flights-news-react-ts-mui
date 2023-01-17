import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IDataFromBackend } from "../../Interfaces/Interfaces";

// Описать здесь тип данных

export const getArticles = createAsyncThunk(
  "articles",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      // console.log("getArticles async thunk data", data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
