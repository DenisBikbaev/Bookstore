import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getSlice } from "../../store/books/books.selectors";

import styles from "./BookDetail.module.css";

import BookCard from "../BookCards/BookCard/BookCard";
import { getBookThunk } from "../../store/books/books.actions";
import { AppDispatch } from "../../store";

const BookDetail: React.FC = () => {
  const { id: bookId } = useParams();
  const { book, isBookLoading: loading } = useSelector(getSlice);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!bookId) return;

    dispatch(getBookThunk(bookId));
  }, [dispatch, bookId]);

  if (loading) {
    return <h2 className={styles.loading}>Loading ...</h2>;
  }

  return (
    <div>
      {loading && "Loading"}

      {book && <BookCard book={book} />}
    </div>
  );
};

export default BookDetail;
