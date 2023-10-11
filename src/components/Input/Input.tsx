import React from "react";
import clsx from "clsx";

import styles from "./Input.module.css";
import Typography from "../Typography/Typography";

interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  id,
  type,
  disabled,
  placeholder,
  error,
  helperText,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={clsx(styles.input, { [styles.inputError]: error })}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      {!!helperText && (
        <Typography
          color="secondary"
          children={helperText}
          className={clsx(styles.helperText, {
            [styles.helperTextError]: error,
          })}
        />
      )}
    </div>
  );
};

export default Input;
