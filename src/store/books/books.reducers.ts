import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Book } from "../../api/books/getBook";

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
    setIsBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isBooksLoading = action.payload;
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    setIsBookLoading: (state, action: PayloadAction<boolean>) => {
      state.isBookLoading = action.payload;
    },
    setBook: (state, action: PayloadAction<Book>) => {
      state.book = action.payload;
    },
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
});

export const {
  setIsBooksLoading,
  setIsBookLoading,
  setBooks,
  setBook,
  toggleBookIsFavorite,
  setFavorites,
  toggleBookIsCart,
  setCart,
  increaseInCart,
  reduceInCart,
} = booksSlice.actions;

export default booksSlice.reducer;
