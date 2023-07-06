import React from "react";

import { useState } from "react";

import styles from "./Select.module.scss";

const Select = () => {
  return (
    <>
      <div className={styles.selectWrapper}>
        <select className={styles.select} name="products" id="products">
          <option value="">Select your category here</option>
          <option value="Basket">Basket</option>
          <option value="Soccer">Soccer</option>
          <option value="Rugby">Run</option>
        </select>
      </div>
    </>
  );
};

export default Select;
