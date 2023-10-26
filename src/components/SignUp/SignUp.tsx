import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div>
      <form className={styles.form}>
        <Input label="Name" placeholder="Your name" type="text" />
        <Input label="Email" placeholder="Your email" type="email" />
        <Input label="Password" placeholder="Your password" type="password" />
        <Input
          label="Confirm password"
          placeholder="Confirm your password"
          type="password"
        />
        <Button>Sign UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
