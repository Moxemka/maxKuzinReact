import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {}
    },
    reducers: {
        addToCart(state, action) {
            state.cart[action.payload.id] = action.payload;
        },
        removeFromCartById(state, action) {
            // remove the item from the cart
            delete state.cart[action.payload];
        },
        clearCart(state) {
            state.cart = {};
        }
    }
})

export const {addToCart, removeFromCartById, clearCart} = cartSlice.actions;

export default cartSlice.reducer;