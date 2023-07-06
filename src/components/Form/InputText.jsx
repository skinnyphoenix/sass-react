import React from "react";
import styles from "./InputText.module.scss";

const InputText = ({ id, name, placeholder, error, errorMessage, icon, handleChange, label, disabled }) => {
  return (
    <div className={`${styles.inputTextWrapper} ${error ? styles.error : ""}`}>
      <label htmlFor={id}>
        <span className={styles.label}>{label}</span>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          name="name"
          id={id}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.value)}
        />
        {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      </label>
    </div>
  );
};

export default InputText;
