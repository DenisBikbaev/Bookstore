import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { getBooks } from "../../api/books/getBooks";
import BookCards from "../BookCards/AllCardsBook/AllCardsBook";
import { getSlice } from "../../store/books/books.selectors";
import { setIsBooksLoading, setBooks } from "../../store/books/books.reducers";

import styles from "./AllBooks.module.css";

const AllBooks: React.FC = () => {
  const { books, isBooksLoading: loading } = useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsBooksLoading(true));

    getBooks()
      .then((data) => {
        dispatch(setBooks(data));
      })
      .finally(() => dispatch(setIsBooksLoading(false)));
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
