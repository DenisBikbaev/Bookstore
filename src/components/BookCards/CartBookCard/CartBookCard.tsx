import { useDispatch, useSelector } from "react-redux";

import Typography from "../../Typography/Typography";
import { getSlice } from "../../../store/books/books.selectors";
import { Book } from "../../../api/books/getBook";
import Icon from "../../Icon/Icon";
import {
  increaseInCart,
  removeFromCart,
  setCart,
  toggleBookIsCart,
} from "../../../store/books/books.reducers";
import { useEffect, useMemo, useState } from "react";
import { getRandomColor } from "../../../utils/RandomColor";
import { AppDispatch } from "../../../store";

import styles from "./CartBookCard.module.css";

interface CartBookCardProps {
  book: Book;
}

const Cart: React.FC<CartBookCardProps> = ({ book }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartBook = useSelector(getSlice);
  const bacgroundColor = useMemo(getRandomColor, []);
  // const [quantity, setQuantity] = useState();
  const [active, setActive] = useState(false);

  const handlePlusClick = () => {
    dispatch(increaseInCart(book));
  };

  const handleMinusClick = () => {
    dispatch(removeFromCart(book));
  };

  const handleRemoveClick = () => {
    if (book) {
      dispatch(toggleBookIsCart(book));
      setActive(!active);
    }
  };

  useEffect(() => {
    if (cartBook.cartBooks.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartBook.cartBooks));
    }
  }, [cartBook.cartBooks]);

  useEffect(() => {
    const favBookInLocalStorage = localStorage.getItem("cart");
    if (favBookInLocalStorage) {
      dispatch(setCart(JSON.parse(favBookInLocalStorage)));
    }
  }, [dispatch]);

  return (
    <>
      <div className={styles.cart}>
        <div
          className={styles.image}
          style={{ backgroundColor: bacgroundColor }}
        >
          <img src={book.image} alt={book.title} />
        </div>
        <div className={styles.info}>
          <div className={styles.book_info}>
            <div className={styles.title}>
              <Typography variant="h3" color="primary" font="BebasNeue-Bold">
                {book.title}
              </Typography>
            </div>
            <div className={styles.other}>
              <Typography
                variant="span"
                color="secondary"
                font="Helios-Regular"
              >
                by
              </Typography>
              <Typography
                variant="span"
                color="secondary"
                font="Helios-Regular"
              >
                {book.subtitle},
              </Typography>
              <Typography
                variant="span"
                color="secondary"
                font="Helios-Regular"
              >
                {book.publisher}
              </Typography>
              <Typography
                variant="span"
                color="secondary"
                font="Helios-Regular"
              >
                {book.year}
              </Typography>
            </div>
          </div>
          <div className={styles.pagination}>
            <button className={styles.minus} onClick={handleMinusClick}>
              <Icon type={"minus"} />
            </button>
            <span className={styles.quantity}>
              <Typography variant="h3" color="primary" font="BebasNeue-Bold">
                {book.count}
              </Typography>
            </span>
            <button className={styles.plus} onClick={handlePlusClick}>
              <Icon type={"plus"} />
            </button>
          </div>
        </div>
        <div className={styles.price}>
          <Typography variant="h2" color="primary" font="BebasNeue-Bold">
            {`${(Number(book.price.slice(1)) * book.count).toFixed(2)}`}
          </Typography>
        </div>
        <div className={styles.remove}>
          <button
            type="button"
            className={styles.btn_renove}
            onClick={handleRemoveClick}
          >
            {!active ? (
              <Icon type={"cancel"} />
            ) : (
              <Icon type={"cancelActive"} />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
