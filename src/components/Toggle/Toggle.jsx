import React from "react";
import { useState } from "react";

import styles from "../Toggle/Toggle.module.scss";

const Toggle = ({ toggled }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const onHandleClick = () => {
    setIsToggled(!isToggled);
    console.log("click");
  };
  return (
    <>
      <div className="">Input Toggle</div>
      <label htmlFor="" className={styles.InputToggle}>
        <input className={styles.input} type="checkbox" onClick={() => onHandleClick()} defaultChecked={true} />
        <span className={styles.toggle}></span>
      </label>
    </>
  );
};

export default Toggle;
