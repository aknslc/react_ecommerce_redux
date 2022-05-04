import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/handleCart';
export default configureStore({
  
  reducer: {

      handleCart: cartReducer,
      
  },

})