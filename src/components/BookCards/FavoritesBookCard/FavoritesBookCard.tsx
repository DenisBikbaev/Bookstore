import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Book } from "../../../api/books/getBook";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import {
  setFavorites,
  toggleBookIsFavorite,
} from "../../../store/books/books.reducers";
import { getSlice } from "../../../store/books/books.selectors";
import { getRandomColor } from "../../../utils/RandomColor";
import { AppDispatch } from "../../../store";

import styles from "./FavoritesBookCard.module.css";
import StarsRating from "../../StarsRating/StarsRating";

interface FavoritesBookCardProps {
  book: Book;
}

const FavoritesBookCard: React.FC<FavoritesBookCardProps> = ({ book }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteBook = useSelector(getSlice);
  const bacgroundColor = useMemo(getRandomColor, []);

  const handleRemoveClick = () => {
    if (book) {
      dispatch(toggleBookIsFavorite(book));
    }
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
      <NavLink to={`/books/${book.isbn13}`} style={{ textDecoration: "none" }}>
        <div
          className={styles.image}
          style={{ backgroundColor: bacgroundColor }}
        >
          <img src={book.image} alt={book.title} />
        </div>
      </NavLink>
      <div className={styles.info}>
        <div className={styles.top_info}>
          <NavLink
            to={`/books/${book.isbn13}`}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.title}>
              <Typography variant="h3" color="primary" font="BebasNeue-Bold">
                {book.title}
              </Typography>
            </div>
          </NavLink>
          <div className={styles.subtitle}>
            <Typography variant="span" color="secondary" font="Helios-Regular">
              by
            </Typography>
            <Typography variant="span" color="secondary" font="Helios-Regular">
              {book.authors},
            </Typography>
            <Typography variant="span" color="secondary" font="Helios-Regular">
              {book.publisher}
            </Typography>
            <Typography variant="span" color="secondary" font="Helios-Regular">
              {book.year}
            </Typography>
          </div>
        </div>
        <div className={styles.bottom_info}>
          <div className={styles.price}>
            <Typography variant="h3" color="primary" font="BebasNeue-Bold">
              {book.price}
            </Typography>
          </div>
          <div className={styles.rating}>
            <StarsRating rating={book.rating} />
          </div>
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
