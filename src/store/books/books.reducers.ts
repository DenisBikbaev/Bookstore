import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Book } from "../../api/books/getBook";
import { getBookThunk, getBooksThunk } from "./books.actions";

interface BooksState {
  isBooksLoading: boolean;
  books: Book[];

  isBookLoading: boolean;
  book: Book | null;

  favoriteBook: Book[];
  cartBooks: Book[];

  limit: number;
  offset: number;
}

const initialState: BooksState = {
  isBooksLoading: false,
  books: [],

  isBookLoading: false,
  book: null,

  favoriteBook: [],
  cartBooks: [],

  limit: 20,
  offset: 0,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    toggleBookIsFavorite: (state, action: PayloadAction<Book>) => {
      const favoriteBookIndex = state.favoriteBook.findIndex(
        (b) => b.isbn13 === action.payload.isbn13
      );

      if (favoriteBookIndex === -1) {
        state.favoriteBook.push(action.payload);
      } else {
        state.favoriteBook.splice(favoriteBookIndex, 1);
      }
    },
    setFavorites: (state, action: PayloadAction<Book[]>) => {
      state.favoriteBook = action.payload;
    },
    toggleBookIsCart: (state, action: PayloadAction<Book>) => {
      const cartBookIndex = state.cartBooks.findIndex(
        (b) => b.isbn13 === action.payload.isbn13
      );

      if (cartBookIndex === -1) {
        state.cartBooks.push(action.payload);
      } else {
        state.cartBooks.splice(cartBookIndex, 1);
      }
    },
    setCart: (state, action: PayloadAction<Book[]>) => {
      state.cartBooks = action.payload;
    },
    increaseInCart: (state, action: PayloadAction<Book["isbn13"]>) => {
      const book = state.books.find((b) => b.isbn13 === action.payload);

      if (book) {
        book.addItem += 1;
      }
    },
    reduceInCart: (state, action: PayloadAction<Book["isbn13"]>) => {
      const book = state.books.find((b) => b.isbn13 === action.payload);

      if (book) {
        book.deleteItem -= 1;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getBooksThunk.pending, (state) => {
      state.isBookLoading = true;
    });
    builder.addCase(getBooksThunk.fulfilled, (state, action) => {
      state.isBooksLoading = false;
      state.books = action.payload;
      // .map((book) => ({
      //   ...book,
      // }));
    });

    builder.addCase(getBookThunk.pending, (state) => {
      state.isBookLoading = true;
    });
    builder.addCase(getBookThunk.fulfilled, (state, action) => {
      state.isBookLoading = false;
      state.book = action.payload;
    });
  },
});

export const {
  toggleBookIsFavorite,
  setFavorites,
  toggleBookIsCart,
  setCart,
  increaseInCart,
  reduceInCart,
} = booksSlice.actions;

export default booksSlice.reducer;
