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
      .addCase(updateArchived.fulfilled, (state, action) => {
        const news = state.news.map((element) => {
          if (element._id === action.payload._id) {
            element = action.payload;
          }
          return element
      })
      state.news = news
      })
      .addCase(deleteOneNews.fulfilled, (state, action) => {
        state.news = state.news.filter(oneNews => oneNews._id !== action.payload._id)
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

export const updateArchived = createAsyncThunk("news/updateArchived", async (id_new, thunkAPI) => {
    try {
      return await newsService.updateArchived(id_new);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const deleteOneNews = createAsyncThunk("news/deleteOneNews", async (id_new, thunkAPI) => {
    try {
      return await newsService.deleteOneNews(id_new);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export default newsSlice.reducer;