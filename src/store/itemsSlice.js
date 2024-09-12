import { createSlice } from "@reduxjs/toolkit";
const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState: [],
  reducers: {
    addInitialItem: (state, action) => {
      return action.payload.items;
    },
  },
});

export default itemsSlice;
export const itemsSliceActions = itemsSlice.actions;
