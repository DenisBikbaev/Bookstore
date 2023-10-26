import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getSlice } from "../../store/books/books.selectors";

import styles from "./AllBooks.module.css";
import {
  getBooksThunk,
  getSearchBooksThunk,
} from "../../store/books/books.actions";
import { AppDispatch } from "../../store";
import Typography from "../Typography/Typography";
import AllCardsBook from "../BookCards/AllCardsBook/AllCardsBook";

interface AllBooksProps {}

const AllBooks: React.FC<AllBooksProps> = () => {
  const {
    books,
    isBooksLoading: loading,
    search,
    page,
  } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (search.length > 0) {
      dispatch(getSearchBooksThunk());
    } else {
      dispatch(getBooksThunk());
    }
  }, [dispatch, search]);

  if (loading) {
    return <h2 className={styles.loading}>Loading ...</h2>;
  }
  return (
    <div>
      {!search ? (
        <>
          <Typography
            className={styles.title_page}
            variant="h1"
            color="primary"
            font="BebasNeue-Bold"
          >
            New Releases Books
          </Typography>
          <ul className={styles.page}>
            {books.map((book) => (
              <li className={styles.card} key={book.isbn13}>
                <NavLink
                  to={`/books/${book.isbn13}`}
                  style={{ textDecoration: "none" }}
                >
                  <AllCardsBook book={book} />
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <Typography
            className={styles.title_page}
            variant="h1"
            color="primary"
            font="BebasNeue-Bold"
          >
            ‘{search}’ Search results
          </Typography>
          <ul className={styles.page}>
            {books.map((book) => (
              <li className={styles.card} key={book.isbn13}>
                <NavLink
                  to={`/books/${book.isbn13}`}
                  style={{ textDecoration: "none" }}
                >
                  <AllCardsBook book={book} />
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AllBooks;
