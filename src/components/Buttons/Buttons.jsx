import React from "react";
import styles from "../Buttons/Buttons.module.scss";
import { FaArrowRight } from "react-icons/fa6";

const Buttons = ({ label, icon, iconLeft, outline, fill, size, square }) => {
  //Props da App.jsx:
  //Icon
  //Icon positizion (se left o right)
  //fill or outline
  //size
  //disabled
  //rounded
  return (
    <div className={styles.container}>
      <div
        className={`
        ${styles.Buttons} 
        ${iconLeft ? styles.iconLeft : ""} 
        ${fill ? styles.fill : styles.outline}
        ${size ? styles[size] : styles.md} 
        ${square ? styles.square : styles.default}
        `}
      >
        {label && !square && label}
        {icon && <FaArrowRight />}
      </div>
    </div>
  );
};

export default Buttons;
