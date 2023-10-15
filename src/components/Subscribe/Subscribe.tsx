import Button from "../Button/Button";
import Typography from "../Typography/Typography";

import styles from "./Subscribe.module.css";

const Subscribe = () => {
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
          />
          <Button className={styles.button}>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
