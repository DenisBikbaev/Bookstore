import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import BookCards from "../BookCards/AllCardsBook/AllCardsBook";
import { getSlice } from "../../store/books/books.selectors";

import styles from "./AllBooks.module.css";
import { getBooksThunk } from "../../store/books/books.actions";
import { AppDispatch } from "../../store";

interface AllBooksProps {}

const AllBooks: React.FC<AllBooksProps> = () => {
  const { books, isBooksLoading: loading } = useSelector(getSlice);
  const { limit, offset } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBooksThunk());
  }, [dispatch]);

  if (loading) {
    return <h2 className={styles.loading}>Loading ...</h2>;
  }
  return (
    <div>
      <ul className={styles.page}>
        {books.map((book) => (
          <li className={styles.card} key={book.isbn13}>
            <NavLink to={`/books/${book.isbn13}`}>
              <BookCards books={book} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBooks;
