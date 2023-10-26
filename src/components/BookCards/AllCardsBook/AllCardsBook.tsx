import { useMemo } from "react";

import Typography from "../../Typography/Typography";
import { Book } from "../../../api/books/getBook";

import styles from "./AllCardsBook.module.css";
import { getRandomColor } from "../../../utils/RandomColor";
import StarsRating from "../../StarsRating/StarsRating";

interface BooksCardsProps {
  book: Book;
}

const AllCardsBook: React.FC<BooksCardsProps> = ({ book }) => {
  const bacgroundColor = useMemo(getRandomColor, []);

  return (
    <>
      <div
        className={styles.imgage}
        style={{ backgroundColor: bacgroundColor }}
      >
        <img className={styles.img} src={book.image} alt={book.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <div className={styles.title}>
            <Typography variant="h3" color="primary" font="BebasNeue-Bold">
              {book.title}
            </Typography>
          </div>
          <div className={styles.text}>
            <div>
              <Typography
                variant="span"
                color="secondary"
                font="Helios-Regular"
              >
                {book.subtitle}
              </Typography>
            </div>
            <div></div>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.price}>
            <Typography variant="h3" color="primary" font="BebasNeue-Bold">
              {book.price}
            </Typography>
          </div>
          <div className={styles.rating}>
            <Typography variant="h3" color="primary" font="BebasNeue-Bold">
              <StarsRating rating={4} />
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCardsBook;
