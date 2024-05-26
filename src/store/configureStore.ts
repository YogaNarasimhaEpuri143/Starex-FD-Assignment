import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies";

const appStore = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
