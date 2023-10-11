import React, { useLayoutEffect } from "react";

import styles from "./Footer.module.css";
import Typography from "../Typography/Typography";
import { usePersistedState } from "../../hooks/usePersistedState";

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
