import { useMemo } from "react";

import Typography from "../../Typography/Typography";
import { Book } from "../../../api/books/getBook";

import styles from "./AllCardsBook.module.css";
import { RandomColor } from "../../../utils/RandomColor";

interface BooksCardsProps {
  books: Book;
}

const BookCards: React.FC<BooksCardsProps> = ({ books }) => {
  const bacgroundColor = useMemo(RandomColor, []);
  return (
    <>
      <div
        className={styles.imgage}
        style={{ backgroundColor: bacgroundColor }}
      >
        <img className={styles.img} src={books.image} alt={books.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <div className={styles.title}>
            <Typography>{books.title}</Typography>
          </div>
          <div className={styles.text}>
            <div>by</div>
            <div>
              <Typography>{books.authors}</Typography>
            </div>
            <div>
              <Typography>{books.publisher}</Typography>
            </div>
            <div>
              <Typography>{books.year}</Typography>
            </div>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.price}>
            <Typography>{books.price}</Typography>
          </div>
          <div className={styles.rating}></div>
        </div>
      </div>
    </>
  );
};

export default BookCards;
