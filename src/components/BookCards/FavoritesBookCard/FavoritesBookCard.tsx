import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Book } from "../../../api/books/getBook";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import {
  setFavorites,
  toggleBookIsFavorite,
} from "../../../store/books/books.reducers";

import styles from "./FavoritesBookCard.module.css";
import { getSlice } from "../../../store/books/books.selectors";

interface FavoritesBookCardProps {
  book: Book;
}

const FavoritesBookCard: React.FC<FavoritesBookCardProps> = ({ book }) => {
  const dispatch = useDispatch();
  const favoriteBook = useSelector(getSlice);

  const handleRemoveClick = () => {
    dispatch(toggleBookIsFavorite(book));
  };

  useEffect(() => {
    if (favoriteBook.favoriteBook.length > 0) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favoriteBook.favoriteBook)
      );
    }
  }, [favoriteBook.favoriteBook]);

  useEffect(() => {
    const favBookInLocalStorage = localStorage.getItem("favorites");
    if (favBookInLocalStorage) {
      dispatch(setFavorites(JSON.parse(favBookInLocalStorage)));
    }
  }, [dispatch]);

  return (
    <div className={styles.favorite}>
      <div className={styles.image}>
        <img src={book.image} alt={book.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.top_info}>
          <div className={styles.title}>
            <Typography>{book.title}</Typography>
          </div>
          <div className={styles.other}>
            <Typography>by</Typography>
            <Typography>{book.authors},</Typography>
            <Typography>{book.publisher}</Typography>
            <Typography>{book.year}</Typography>
          </div>
        </div>
        <div className={styles.bottom_info}>
          <div className={styles.price}>
            <Typography>{book.price}</Typography>
          </div>
          <div className={styles.rating}>{book.rating}</div>
        </div>
      </div>
      <div className={styles.remove}>
        <button
          type="button"
          className={styles.btn_remove}
          onClick={handleRemoveClick}
        >
          <Icon type={"heartFav"} />
        </button>
      </div>
    </div>
  );
};

export default FavoritesBookCard;
