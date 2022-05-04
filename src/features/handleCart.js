import { createSlice } from "@reduxjs/toolkit";

export const handleCart = createSlice({

    name: 'handleCart',
    initialState: {
        amount: 0,
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
        total: 0
    },

    reducers: {
        addToCart: (state, action) => {
            const cartControl = state.cart.find((item) => item.id === action.payload.id);

            if (cartControl) {
                alert("Product already added");

            } else {
                state.cart.push(action.payload);

            }
            localStorage.setItem("cart", JSON.stringify(state.cart));

        },
        removeFromCart(state, action){
            const nextCartItems = state.cart.filter((item) => item.id !== action.payload.id);

            state.cart = nextCartItems;
        }

    }

});


export const { addToCart, removeFromCart } = handleCart.actions

export default handleCart.reducer