// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     try {
//       let response = await fetch("http://localhost:3333/products/all");
//       let data = await response.json();

//       return data;
//     } catch (error) {
//       // console.log('Data not received!');
//       throw Error("Data not received!");
//     }
//   }
// );

// const productsSlice = createSlice({
//   name: "products",

//   initState: {
//     products: [],
//     filteredProducts: [],
//     loading: false,
//     error: null,
//     currentCategoryId: null,
//   },

//   reducers: {
//     filterByPrice: (state, action) => {
//       const filteredProducts = state.products.filter(
//         (product) =>
//           product.price >= action.payload.min &&
//           product.price <= action.payload.max
//       );

//       state.filteredProducts = filteredProducts;
//     },

//     filterBySale: (state,action) => {

//     }
//   },

//   extraReducers: {
//     [fetchProducts.pending]: (state, action) => {
//       state.loading = true;
//     },

//     [fetchProducts.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     },

//     [fetchProducts.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     },
//   },
// });

// export default productsSlice.reducer;

// export const { filterByPrice } = productsSlice.actions;


// =================== GPT ===============

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

const productsSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
    error: null,
    currentCategoryId: null,
  },

  reducers: {
    filterByPrice: (state, action) => {
      const { min, max } = action.payload;
      const filteredProducts = state.products.filter(
        (product) => product.price >= min && product.price <= max
      );

      state.filteredProducts = filteredProducts;
    },

    filterBySale: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.discont_price !== null
      );
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
  },
});

export const { filterByPrice, filterBySale } = productsSlice.actions;
export default productsSlice.reducer;



