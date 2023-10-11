import Typography from "../../Typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import styles from "./AllCardsBook.module.css";
import { Book } from "../../../api/books/getBook";

interface BooksCardsProps {
  books: Book;
}

const BookCards: React.FC<BooksCardsProps> = ({ books }) => {
  return (
    <>
      <div className={styles.imgage}>
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
          <div className={styles.rating}>
            <button className={styles.btn_rating}>
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button className={styles.btn_rating}>
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button className={styles.btn_rating}>
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button className={styles.btn_rating}>
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button className={styles.btn_rating}>
              <FontAwesomeIcon icon={faStar} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCards;
