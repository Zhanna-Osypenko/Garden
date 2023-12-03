import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        value: []
    },

    reducers: {
        increment: (state,action) => {
            console.log('increment action => ',action);
            let productId = action.payload;
            if (state.value[productId] === undefined) {
                state.value[productId] = 0;
                state.value[productId]++;
                console.log('state.value', state.value);
            }
        }
    }
});

export const {increment} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;