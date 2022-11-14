import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  news: [],
  oneNews: {}
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
  }
});

export const getNews = createAsyncThunk("news/getNews", async (thunkAPI) => {
  try {
    return await newsService.getNews();
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export default newsSlice.reducer;