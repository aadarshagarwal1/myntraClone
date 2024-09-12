import { createSlice } from "@reduxjs/toolkit";
const bagItemsSlice = createSlice({
  name: "bagItemsSlice",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [action.payload, ...state];
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});
export default bagItemsSlice;
export const bagItemsAction = bagItemsSlice.actions;
