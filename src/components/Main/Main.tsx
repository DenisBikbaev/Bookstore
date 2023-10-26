import styles from "./Main.module.css";
import AllBooks from "../AllBooks/AllBooks";
import Subscribe from "../Subscribe/Subscribe";

const Main = () => {
  return (
    <div className={styles.main}>
      <AllBooks />
      <Subscribe />
    </div>
  );
};

export default Main;
