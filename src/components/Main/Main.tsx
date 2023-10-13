import styles from "./Main.module.css";
import AllBooks from "../AllBooks/AllBooks";
import Subscribe from "../Subscribe/Subscribe";
import Typography from "../Typography/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { getBooksThunk } from "../../store/books/books.actions";
import { getSlice } from "../../store/books/books.selectors";
import { AsyncThunkAction, Dispatch, AnyAction } from "@reduxjs/toolkit";

const Main = () => {
  return (
    <div>
      <Typography
        className={styles.title}
        variant="h1"
        color="primary"
        font="BebasNeue-Bold"
      >
        New Releases Books
      </Typography>
      <AllBooks />
      <Subscribe />
    </div>
  );
};

export default Main;
