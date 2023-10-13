import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import { Book } from "../../../api/books/getBook";
import Tabs, { Tab } from "../../Tabs/Tabs";
import Typography from "../../Typography/Typography";
import BookAction from "../../BookAction/BookAction";
import Button from "../../Button/Button";
import Social from "../../Social/Social";
import Subscribe from "../../Subscribe/Subscribe";
import Icon from "../../Icon/Icon";
import { RandomColor } from "../../../utils/RandomColor";

import styles from "./BookCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookIsCart } from "../../../store/books/books.reducers";
import { getSlice } from "../../../store/books/books.selectors";

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
  const bacgroundColor = useMemo(RandomColor, []);

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
        <Typography variant="h1" color="primary" font="BebasNeue-Bold">
          {book.title}
        </Typography>
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
          <div className={styles.book_info}>
            <div className={styles.info}>
              <Typography
                variant="h2"
                color="primary"
                font="BebasNeue-Bold"
                className={styles.Typography}
              >
                {book.price}
                {book.rating}
              </Typography>
            </div>
            <div className={styles.info}>
              <Typography
                variant="span"
                color="secondary"
                font="Helios-Regular"
                className={styles.Typography}
              >
                <span>Authors</span>
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
                <span>{book.year}</span>
              </Typography>
            </div>
            <Button onClick={addToCart}>add to cart</Button>
            <button className={styles.preview}>Preview book</button>
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
                  {book.rating}
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
