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
    } catch (error) {
      throw Error("Product not found!");
    }
  }
);

const productsSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    cart: [],
    filteredProducts: [],
    loading: false,
    error: null,
    currentCategoryId: null,
    isSale: false,
    // currentProduct: null,
  },

  reducers: {
    // ========= Products/Sale reducer ========

    filterByPrice: (state, action) => {
      const { min, max, isSale } = action.payload;
      const filteredProducts = state.products.filter(
        (product) =>
          product.price >= min &&
          product.price <= max &&
          (!isSale || product.discont_price !== null)
      );

      state.filteredProducts = filteredProducts;
    },

    filterBySale: (state, action) => {
      const { isSale, priceValue } = action.payload || {};
      state.isSale = isSale;

      const { min, max } = priceValue || {};
      const filteredProducts = state.products.filter(
        (product) =>
          (!state.isSale || product.discont_price !== null) &&
          (min === "" || product.price >= min) &&
          (max === "" || product.price <= max)
      );

      state.filteredProducts = filteredProducts;
    },


    // ========= Cart reducer ==========

    // addToCart: (state, action) => {
    //   let cartProducts = localStorage.getItem('cart')
    //   state.currentProduct = action.payload;

    //   if (cartProducts){

    //   }else{
    //     localStorage.setItem('cart',JSON.stringify([state.currentProduct]))
    //   }

    //   state.cart.push(state.currentProduct);
    // },

    addToCart: (state, action) => {
      const product = action.payload;
    
      console.log('product:', product);
    
      if (!product || !product.id) {
        console.error('Error: Invalid product data.');
        return;
      }
    
      // Получаем текущую корзину из LocalStorage
      let cartProducts = JSON.parse(localStorage.getItem('cart'));
    
      console.log('00 = localStorage (before):', localStorage.getItem('cart'));
    
      // Добавим проверку на null
      if (!cartProducts) {
        cartProducts = [];
      }
    
      // Добавим новый товар в корзину
      cartProducts.push({ ...product, quantity: 1 });
    
      // Обновляем состояние корзины
      state.cart = cartProducts;
    
      // Сохраняем состояние корзины в LocalStorage
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    
      // Выводим в консоль текущее состояние корзины
      console.log('state.cart:', state.cart);
      console.log('00 = localStorage (after):', localStorage.getItem('cart'));
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

// export const selectProducts = state => state.products.products;
export const { filterByPrice, filterBySale, addToCart } = productsSlice.actions;
export default productsSlice.reducer;
