import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSlice } from "./books.selectors";
import { RootState } from "..";
import { Book, getBook } from "../../api/books/getBook";
import { getBooks } from "../../api/books/getBooks";

export const getBooksThunk = createAsyncThunk(
  "books/getBooksThunk",
  async (params, thunkApi) => {
    const { getState } = thunkApi;
    const { limit, offset } = getSlice(getState() as RootState);

    return getBooks();
  }
);

export const getBookThunk = createAsyncThunk(
  "books/getBookThunk",
  (id: Book["isbn13"]) => getBook({ id })
);
