import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Cart.module.css";

import Typography from "../../Typography/Typography";
import { getSlice } from "../../../store/books/books.selectors";
import { Book } from "../../../api/books/getBook";
import Icon from "../../Icon/Icon";
import {
  increaseInCart,
  reduceInCart,
} from "../../../store/books/books.reducers";

interface CartBookCardProps {
  book: Book;
}

const Cart: React.FC<CartBookCardProps> = ({ book }) => {
  const dispatch = useDispatch();
  const cartBook = useSelector(getSlice);

  const handlePlusClick = () => {
    dispatch(increaseInCart(book.isbn13));
  };

  const handleMinusClick = () => {
    dispatch(reduceInCart(book.isbn13));
  };

  return (
    <div className={styles.cart}>
      <div className={styles.image}>
        <img src={book.image} alt={book.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.book_info}>
          <div className={styles.title}>
            <Typography>{book.title}</Typography>
          </div>
          <div className={styles.other}>
            <Typography>by</Typography>
            <Typography>{book.authors}</Typography>
            <Typography>{book.publisher}</Typography>
            <Typography>{book.year}</Typography>
          </div>
        </div>
        <div className={styles.pagination}>
          <button className={styles.minus} onClick={handleMinusClick}>
            <Icon type={"minus"} />
          </button>
          <span className={styles.quantity}>{}</span>
          <button className={styles.plus} onClick={handlePlusClick}>
            <Icon type={"plus"} />
          </button>
        </div>
      </div>
      <div className={styles.price}>
        <Typography>{book.price}</Typography>
      </div>
      <div className={styles.remove}></div>
    </div>
  );
};

export default Cart;
