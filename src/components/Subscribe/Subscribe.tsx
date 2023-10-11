import React, { useState } from "react";

import styles from "./Subscribe.module.css";
import Typography from "../Typography/Typography";

const Subscribe = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.subscribe}>
        <div className={styles.title}>
          <Typography color="primary" variant="h2" font="BebasNeue-Bold">
            Subscribe to Newsletter
          </Typography>
          <Typography color="secondary" variant="h5" font="DINPro-Regular">
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </Typography>
        </div>
        <div className={styles.email}>
          <input
            type="email"
            placeholder="Your email"
            className={styles.input}
            value={searchValue}
            onChange={handleChange}
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
