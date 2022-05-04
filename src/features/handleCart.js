import { createSlice } from "@reduxjs/toolkit";

export const handleCart = createSlice({
    
    name: 'handleCart',
    initialState: {
        amount: 0,
        cart: [],
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

        },
        
    }

});


export const { addToCart } = handleCart.actions

export default handleCart.reducer