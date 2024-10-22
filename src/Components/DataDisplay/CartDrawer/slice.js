import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const drawerState = createSlice({
  name: 'drawerStatus',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleDrawer } = drawerState.actions;
export default drawerState.reducer;
