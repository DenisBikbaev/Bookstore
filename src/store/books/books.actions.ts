import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSlice } from "./books.selectors";
import { RootState } from "..";
import { Book, getBook } from "../../api/books/getBook";
import { getBooks } from "../../api/books/getBooks";
import { getBooksSearch } from "../../api/books/getBooksSearch";

export const getBooksThunk = createAsyncThunk(
  "books/getBooksThunk",
  async () => {
    return getBooks();
  }
);

export const getBookThunk = createAsyncThunk(
  "books/getBookThunk",
  async (id: Book["isbn13"]) => {
    return getBook({ id });
  }
);

export const getSearchBooksThunk = createAsyncThunk(
  "books/getSearchBookThunk",
  async (param, thunkApi) => {
    const { getState } = thunkApi;
    const { page, search } = getSlice(getState() as RootState);

    return getBooksSearch({ page, search });
  }
);
