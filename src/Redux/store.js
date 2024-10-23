import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from '../Components/DataDisplay/CartDrawer/slice';
import productStateReducer from '../Pages/POS/slice';

export default configureStore({
  reducer: {
    drawer: drawerReducer,
    cart: productStateReducer,
  },
});
