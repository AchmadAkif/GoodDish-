import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from '../Components/DataDisplay/CartDrawer/slice';

export default configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});
