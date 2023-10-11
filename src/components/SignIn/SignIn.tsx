import React from "react";

import styles from "./SignIn.module.css";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SignIn = () => {
  return (
    <div>
      <form className={styles.form}>
        <Typography
          variant="h6"
          color="primary"
          font="BebasNeue-Bold"
          className={styles.title}
        >
          Sign In
        </Typography>
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
