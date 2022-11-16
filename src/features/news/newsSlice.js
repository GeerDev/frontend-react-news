import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  news: [],
  oneNews: {},
  categories: []
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
      .addCase(getNewsById.fulfilled, (state, action) => {
        state.oneNews = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(getNewsByCategory.fulfilled, (state, action) => {
        state.news = action.payload
      })
      .addCase(searchByTitle.fulfilled, (state, action) => {
        state.news = action.payload
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.news = [action.payload, ...state.news]
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

export const getNewsById = createAsyncThunk("news/getNewsById", async (id_new, thunkAPI) => {
    try {
        return await newsService.getNewsById(id_new);
    } catch (error) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
    }
    });

export const getCategories = createAsyncThunk("news/getCategories", async (thunkAPI) => {
    try {
        return await newsService.getCategories();
    } catch (error) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
    }
    });

export const getNewsByCategory = createAsyncThunk("news/getNewsByCategory", async (name_category, thunkAPI) => {
      try {
          return await newsService.getNewsByCategory(name_category);
      } catch (error) {
          const message = error.response.data;
          return thunkAPI.rejectWithValue(message);
      }
      });

export const searchByTitle = createAsyncThunk("news/searchByTitle", async (dataSearch, thunkAPI) => {
    try {
        return await newsService.searchByTitle(dataSearch);
    } catch (error) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
    }
    });

export const createNews = createAsyncThunk("news/createNews", async (dataForm, thunkAPI) => {
    try {
        return await newsService.createNews(dataForm);
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