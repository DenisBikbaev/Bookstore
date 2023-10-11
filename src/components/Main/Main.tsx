import styles from "./Main.module.css";
import AllBooks from "../AllBooks/AllBooks";
import Subscribe from "../Subscribe/Subscribe";
import Typography from "../Typography/Typography";

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
