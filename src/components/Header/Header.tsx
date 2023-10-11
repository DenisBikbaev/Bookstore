import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./logo/Bookstore.svg";

import styles from "./Header.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { usePersistedState } from "../../hooks/usePersistedState";
import Typography from "../Typography/Typography";

const Header: React.FC = () => {
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
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.header}>
      <NavLink to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </NavLink>
      <form className={styles.search}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search_input}
          value={searchValue}
          onChange={handleChange}
        />
        <button className={styles.search_button}>
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
          <NavLink to={"/"}>
            <Icon type={"cart"} />
          </NavLink>
        </Button>
        <Button type="button" variant="icon">
          <NavLink to={"/"}>
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
