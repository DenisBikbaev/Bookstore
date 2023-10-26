import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div>
      <form className={styles.form}>
        <Input label="Email" placeholder="Your email" type="email" />
        <Input label="Password" placeholder="Your password" type="password" />
        <p className={styles.paragraph}>
          <a href="" className={styles.link}>
            Forgot password ?
          </a>
        </p>
        <Button>Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
