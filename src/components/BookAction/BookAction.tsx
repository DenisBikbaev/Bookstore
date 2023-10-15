import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Book } from "../../api/books/getBook";
import { toggleBookIsFavorite } from "../../store/books/books.reducers";
import Icon from "../Icon/Icon";
import { getSlice } from "../../store/books/books.selectors";
import { AppDispatch } from "../../store";

import styles from "./BookAction.module.css";

interface BookActionsProps {
  book: Book;
}

const BookAction: React.FC<BookActionsProps> = ({ book }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteBook = useSelector(getSlice);
  const [active, setActive] = useState(false);

  const handleAddFavoriteClick = () => {
    if (book) {
      dispatch(toggleBookIsFavorite(book));
    }
    setActive(!active);
  };

  useEffect(() => {
    if (favoriteBook.favoriteBook.length > 0) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favoriteBook.favoriteBook)
      );
    }
  }, [favoriteBook.favoriteBook]);

  return (
    <div className={styles.action}>
      <button type="button" onClick={handleAddFavoriteClick}>
        {!active ? <Icon type={"heart"} /> : <Icon type={"heartActive"} />}
      </button>
    </div>
  );
};

export default BookAction;
