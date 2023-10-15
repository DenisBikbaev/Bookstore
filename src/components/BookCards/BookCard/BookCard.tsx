import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Book } from "../../../api/books/getBook";
import Tabs, { Tab } from "../../Tabs/Tabs";
import Typography from "../../Typography/Typography";
import BookAction from "../../BookAction/BookAction";
import Button from "../../Button/Button";
import Social from "../../Social/Social";
import Subscribe from "../../Subscribe/Subscribe";
import Icon from "../../Icon/Icon";
import { getRandomColor } from "../../../utils/RandomColor";
import { toggleBookIsCart } from "../../../store/books/books.reducers";
import { getSlice } from "../../../store/books/books.selectors";

import styles from "./BookCard.module.css";
import StarsRating from "../../StarsRating/StarsRating";

interface BookCardProps {
  book: Book;
}

const tabs: Tab[] = [
  {
    label: "Description",
    value: "Description",
  },
  {
    label: "Authors",
    value: "Authors",
  },
  {
    label: "Reviews",
    value: "Reviews",
  },
];

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const dispatch = useDispatch();
  const cartBook = useSelector(getSlice);
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const bacgroundColor = useMemo(getRandomColor, []);

  useEffect(() => {
    if (cartBook.cartBooks.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartBook.cartBooks));
    }
  }, [cartBook.cartBooks]);

  const handleChangeTab = (tab: Tab) => setActiveTab(tab.value);

  const addToCart = () => {
    if (book) {
      dispatch(toggleBookIsCart(book));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.BookPage}>
        <NavLink to="/" className={styles.BackLink}>
          <Typography
            variant="h4"
            color="primary"
            font="Helios-Regular"
            className={styles.Back}
          >
            <Icon type={"arrowLeft"} />
          </Typography>
        </NavLink>
        <div className={styles.title}>
          <Typography variant="h1" color="primary" font="BebasNeue-Bold">
            {book.title}
          </Typography>
        </div>

        <div className={styles.top_container}>
          <div
            className={styles.image_container}
            style={{ backgroundColor: bacgroundColor }}
          >
            <img src={book.image} alt={book.title} className={styles.image} />
            <div className={styles.heart_container}>
              <BookAction book={book} />
            </div>
          </div>
          <div className={styles.info_container}>
            <div className={styles.price}>
              <div className={styles.info}>
                <Typography
                  variant="h2"
                  color="primary"
                  font="BebasNeue-Bold"
                  className={styles.Typography}
                >
                  {book.price}
                </Typography>
                <Typography
                  variant="h2"
                  color="primary"
                  font="BebasNeue-Bold"
                  className={styles.Typography}
                >
                  <StarsRating rating={book.rating} />
                </Typography>
              </div>
            </div>
            <div className={styles.book_info}>
              <div className={styles.info}>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>Authors</span>
                </Typography>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>{book.authors}</span>
                </Typography>
              </div>
              <div className={styles.info}>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>Publisher</span>
                </Typography>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>{book.publisher}</span>
                </Typography>
              </div>
              <div className={styles.info}>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>Language</span>
                </Typography>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>English</span>
                </Typography>
              </div>
              <div className={styles.info}>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>Format</span>
                </Typography>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                  className={styles.Typography}
                >
                  <span>Paper book / ebook (PDF)</span>
                </Typography>
              </div>
              <div className={styles.info}>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                >
                  <span>Pages</span>
                </Typography>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                >
                  <span>{book.pages}</span>
                </Typography>
              </div>
              <div className={styles.info}>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                >
                  <span>Year</span>
                </Typography>
                <Typography
                  variant="span"
                  color="secondary"
                  font="Helios-Regular"
                >
                  <span>{book.year}</span>
                </Typography>
              </div>
            </div>
            <div className={styles.cart}>
              <Button onClick={addToCart}>add to cart</Button>
            </div>
            <div className={styles.preview}>
              <button className={styles.preview}>
                <Typography variant="p" color="primary" font="Helios-Regular">
                  Preview book
                </Typography>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom_container}>
          <Tabs
            className={styles.tabs}
            activeTab={activeTab}
            tabs={tabs}
            onTabClick={handleChangeTab}
          />
          <div className={styles.tabs_container}>
            {activeTab === "Description" && (
              <div className={styles.tabs_element}>
                <Typography
                  variant="p"
                  color="primary"
                  font="Helios-Regular"
                  className={styles.tabs_element}
                >
                  {book.desc}
                </Typography>
              </div>
            )}
            {activeTab === "Authors" && (
              <div className={styles.tabs_element}>
                <Typography
                  variant="p"
                  color="primary"
                  font="Helios-Regular"
                  className={styles.tabs_element}
                >
                  {book.authors}
                </Typography>
              </div>
            )}
            {activeTab === "Reviews" && (
              <div className={styles.tabs_element}>
                <Typography
                  variant="p"
                  color="primary"
                  font="Helios-Regular"
                  className={styles.tabs_element}
                >
                  <StarsRating rating={book.rating} />
                </Typography>
              </div>
            )}
          </div>
        </div>
        <Social />
      </div>
      <Subscribe />
    </div>
  );
};

export default BookCard;
