import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagItemsSlice from "./bagItemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
const store = configureStore({
  reducer: {
    itemsSlice: itemsSlice.reducer,
    bagItemsSlice: bagItemsSlice.reducer,
    fetchStatusSlice: fetchStatusSlice.reducer,
  },
});

export default store;
