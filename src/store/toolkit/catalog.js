import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    try {
      let response = await fetch("https://garden-kcwi.onrender.com/categories/all");
      let data = await response.json();

      return data;
    } catch (error) {
      throw Error("Catalog not found!");
    }
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalog: [],
    loading: false,
    error: null,
    currentCategoryId: null,
  },

  reducers: {},
  
  extraReducers: {
    [fetchCatalog.pending]: (state) => {
      state.loading = true;
    },
    [fetchCatalog.fulfilled]: (state, action) => {
      state.loading = false;
      state.catalog = action.payload;
    },
    [fetchCatalog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const {
  fetchCatalogRequest,
  fetchCatalogSuccess,
  fetchCatalogFailure,
} = catalogSlice.actions;

export default catalogSlice.reducer;


