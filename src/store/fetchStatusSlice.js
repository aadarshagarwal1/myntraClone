import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: "bagItemsSlice",
  initialState: {
    fetchDone: false,
  },
  reducers: {
    checkFetchDone: (state) => {
      state.fetchDone = true;
    },
  },
});
export default fetchStatusSlice;
export const fetchStatusActions = fetchStatusSlice.actions;
