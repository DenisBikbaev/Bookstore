import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Book } from "./../../api/books/getBook";
import {
  getBookThunk,
  getBooksThunk,
  getSearchBooksThunk,
} from "./books.actions";

interface BooksState {
  isBooksLoading: boolean;
  books: Book[];

  isBookLoading: boolean;
  book: Book | null;

  favoriteBook: Book[];
  cartBooks: Book[];

  search: string;
  page: number;
  foundBooks: Book[];
  isSearchBooksLoading: boolean;

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

  search: "",
  page: 1,
  foundBooks: [],
  isSearchBooksLoading: false,

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
        state.cartBooks.push({ ...action.payload, count: 1 });
      } else {
        state.cartBooks.splice(cartBookIndex, 1);
      }
    },
    setCart: (state, action: PayloadAction<Book[]>) => {
      state.cartBooks = action.payload;
    },
    increaseInCart: (state, action: PayloadAction<Book>) => {
      const book = state.cartBooks.find(
        (b) => b.isbn13 === action.payload.isbn13
      );

      if (book) {
        book.count += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<Book>) => {
      const book = state.cartBooks.find(
        (b) => b.isbn13 === action.payload.isbn13
      );

      if (book) {
        if (book.count > 1) {
          book.count -= 1;
        }
      }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getBooksThunk.pending, (state) => {
      state.isBookLoading = true;
    });
    builder.addCase(getBooksThunk.fulfilled, (state, action) => {
      state.isBooksLoading = false;
      state.books = action.payload;
    });

    builder.addCase(getBookThunk.pending, (state) => {
      state.isBookLoading = true;
    });
    builder.addCase(getBookThunk.fulfilled, (state, action) => {
      state.isBookLoading = false;
      state.book = action.payload;
    });

    builder.addCase(getSearchBooksThunk.pending, (state) => {
      state.isSearchBooksLoading = true;
    });
    builder.addCase(getSearchBooksThunk.fulfilled, (state, action) => {
      state.isSearchBooksLoading = false;
      state.books = action.payload.books;
    });
  },
});

export const {
  toggleBookIsFavorite,
  setFavorites,
  toggleBookIsCart,
  setCart,
  increaseInCart,
  removeFromCart,
  setSearch,
} = booksSlice.actions;

export default booksSlice.reducer;
