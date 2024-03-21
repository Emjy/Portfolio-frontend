import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: '' };

export const navigationSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    changeNavigation: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;