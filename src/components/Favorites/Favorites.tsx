import React from "react";
import { useSelector } from "react-redux";

import { getSlice } from "../../store/books/books.selectors";
import Typography from "../Typography/Typography";
import FavoritesBookCard from "../BookCards/FavoritesBookCard/FavoritesBookCard";

import styles from "./Favorites.module.css";

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  const favoriteBook = useSelector(getSlice);

  if (favoriteBook.favoriteBook.length === 0) {
    return (
      <Typography
        variant="h2"
        color="primary"
        font="BebasNeue-Bold"
        className={styles.empty}
      >
        Пусто
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h1" color="primary" font="BebasNeue-Bold">
        Favorites
      </Typography>
      <ul className={styles.favorite}>
        {favoriteBook.favoriteBook.map((book) => (
          <li className={styles.favorite_book} key={book.isbn13}>
            <FavoritesBookCard book={book} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
