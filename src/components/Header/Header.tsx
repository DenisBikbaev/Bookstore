import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import Logo from "./logo/Bookstore.svg";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { usePersistedState } from "../../hooks/usePersistedState";
import Typography from "../Typography/Typography";
import { AppDispatch } from "../../store";

import styles from "./Header.module.css";
import { setSearch } from "../../store/books/books.reducers";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState("");
  const [themeName, setThemeName] = usePersistedState<"dark" | "light">({
    key: "theme",
    initialValue: "light",
  });

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = themeName;
  }, [themeName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(setSearch(searchValue));
    console.log(searchValue);
  };

  const handleBackClick = () => {
    dispatch(setSearch(""));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.header}>
      <NavLink to="/" onClick={handleBackClick}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </NavLink>
      <form onSubmit={handleFormChange} className={styles.search}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search_input}
          value={searchValue}
          onChange={handleChange}
        />
        <button
          className={styles.search_button}
          type="submit"
          onClick={handleClick}
        >
          <Icon type="search" />
        </button>
      </form>
      <div className={styles.link}>
        <Button type="button" variant="icon">
          <NavLink to={"/favorite"}>
            <Icon type={"heartHeder"} />
          </NavLink>
        </Button>
        <Button type="button" variant="icon">
          <NavLink to={"/cart"}>
            <Icon type={"cart"} />
          </NavLink>
        </Button>
        <Button type="button" variant="icon">
          <NavLink to={"/authorization"}>
            <Icon type={"account"} />
          </NavLink>
        </Button>
      </div>
      <div className={styles.theme}>
        <label htmlFor="theme">
          <Typography color="secondary" variant="span" font="Helios-Regular">
            {themeName}
          </Typography>
        </label>
        <input type="checkbox" name="theme" id="theme" onChange={changeTheme} />
      </div>
    </div>
  );
};

export default Header;
