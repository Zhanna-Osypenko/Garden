import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      let response = await fetch("http://localhost:3333/products/all");
      let data = await response.json();

      return data;
    } catch (error) {
      throw Error("Data not received!");
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    try {
      let response = await fetch(`http://localhost:3333/products/${productId}`);
      let data = await response.json();
      console.log("data fetchProductById => ", data);
      return data[0];
      // return data;
    } catch (error) {
      throw Error("Product not found!");
    }
  }
);

const productsSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
    error: null,
    currentCategoryId: null,
    isSale: false,
  },

  reducers: {
  filterByPrice: (state, action) => {
    const { min, max, isSale } = action.payload;
    const filteredProducts = state.products.filter(
      (product) => product.price >= min && product.price <= max && (!isSale || product.discont_price !== null)
    );

    state.filteredProducts = filteredProducts;
  },

  filterBySale: (state) => {
    state.isSale = !state.isSale;
    const filteredProducts = state.products.filter(
      (product) => !state.isSale || product.discont_price !== null
    );

    state.filteredProducts = filteredProducts;
  },  
    
  },

  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [fetchProductById.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentProduct = action.payload;
    },
    [fetchProductById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { filterByPrice, filterBySale } = productsSlice.actions;
export default productsSlice.reducer;
