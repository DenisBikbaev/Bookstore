import React from "react";

import Typography from "../Typography/Typography";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Typography color="secondary" variant="span" font="Helios-Regular">
        ©2022 Bookstore
      </Typography>

      <Typography color="secondary" variant="span" font="Helios-Regular">
        All rights reserved
      </Typography>
    </div>
  );
};

export default Footer;
