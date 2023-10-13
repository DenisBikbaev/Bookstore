import { Middleware, configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books/books.reducers";

const logger: Middleware = (store) => (next) => (action) => {
  next(action);
};

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
