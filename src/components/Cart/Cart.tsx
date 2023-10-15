import React from "react";
import { useSelector } from "react-redux";

import { getSlice } from "../../store/books/books.selectors";
import Typography from "../Typography/Typography";

import styles from "./Cart.module.css";
import CartBookCard from "../BookCards/CartBookCard/CartBookCard";
import TotalPrice from "../TotalPrice/TotalPrice";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const cartBook = useSelector(getSlice);

  const totalPrice = cartBook.cartBooks.reduce((acc, book) => {
    const bookOnePrice = +book.price.slice(1);
    return acc + bookOnePrice * book.count;
  }, 0);

  if (cartBook.cartBooks.length === 0) {
    return (
      <>
        <Typography
          variant="h1"
          color="primary"
          font="BebasNeue-Bold"
          className={styles.title}
        >
          Your cart
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          font="BebasNeue-Bold"
          className={styles.empty}
        >
          Пусто
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        font="BebasNeue-Bold"
        className={styles.title}
      >
        Cart
      </Typography>
      <ul className={styles.cart}>
        {cartBook.cartBooks.map((book) => (
          <li className={styles.cart_book} key={book.isbn13}>
            <CartBookCard book={book} />
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <TotalPrice sumTotalPrice={+totalPrice} />
      </div>
    </>
  );
};

export default Cart;
