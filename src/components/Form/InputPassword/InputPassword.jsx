import React from "react";
import { useState } from "react";

import styles from "./InputPassword.module.scss";

import { FaEyeSlash, FaEye } from "react-icons/fa";

const InputPassword = ({ id, name, placeholder, error, errorMessage, icon, handleChange, label, disabled }) => {
  const [isShow, setIsShow] = useState(true);
  const toggleShowPassword = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div className={`${styles.inputPasswordWrapper} ${error ? styles.error : ""}`}>
        <label htmlFor={id}>
          <span className={styles.label}>{label}</span>
          <input
            className={styles.input}
            type={isShow ? "password" : "text"}
            placeholder={placeholder}
            name="name"
            id={id}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className={styles.iconEyePsw} onClick={() => toggleShowPassword()}>
            {isShow ? <FaEyeSlash /> : <FaEye />}
          </div>
          {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </label>
      </div>
    </>
  );
};

export default InputPassword;
