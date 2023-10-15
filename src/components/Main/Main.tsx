import styles from "./Main.module.css";
import AllBooks from "../AllBooks/AllBooks";
import Subscribe from "../Subscribe/Subscribe";
import Typography from "../Typography/Typography";

const Main = () => {
  return (
    <div className={styles.main}>
      <AllBooks />
      <Subscribe />
    </div>
  );
};

export default Main;
