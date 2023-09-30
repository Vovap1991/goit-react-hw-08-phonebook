import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
