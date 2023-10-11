import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/books.reducers";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;