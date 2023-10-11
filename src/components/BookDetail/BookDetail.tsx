import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getSlice } from "../../store/books/books.selectors";
import { setBook, setIsBookLoading } from "../../store/books/books.reducers";

import styles from "./BookDetail.module.css";
import { getBook } from "../../api/books/getBook";
import BookCard from "../BookCards/BookCard/BookCard";

const BookDetail: React.FC = () => {
  const { id: bookId } = useParams();
  const { book, isBookLoading: loading } = useSelector(getSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!bookId) return;

    dispatch(setIsBookLoading(true));
    getBook({ id: bookId })
      .then((data) => dispatch(setBook(data)))
      .finally(() => dispatch(setIsBookLoading(false)));
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
