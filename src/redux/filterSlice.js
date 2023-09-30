const { createSlice } = require('@reduxjs/toolkit');

const initialFilterValue = '';

export const slice = createSlice({
  name: 'filter',
  initialState: initialFilterValue,
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
