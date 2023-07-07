import React from "react";
import { useState } from "react";

import { FaChevronDown } from "react-icons/fa6";
import styles from "./Header.module.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState();

  const menuItems = [
    {
      id: 1,
      label: "A",
      item: [
        {
          id: 1,
          label: "A.1",
        },
        {
          id: 2,
          label: "A.2",
        },
        {
          id: 3,
          label: "A.3",
        },
      ],
    },
    {
      id: 2,
      label: "b",
      item: [
        {
          id: 3,
          label: "B.1",
        },
        {
          id: 4,
          label: "B.2",
        },
        {
          id: 5,
          label: "B.3",
        },
      ],
    },
  ];

  const handleOpenMenu = (item) => {
    if (item === openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(item);
    }
    console.log(item);
    setOpenMenu(item);
  };

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.containerHeader}>
          <div className={styles.Logo}>Logo</div>
          <div className={styles.Menu}>
            <ul key={menuItems?.id} className={styles.menuItem}>
              {menuItems?.map((item) => (
                <li onClick={() => handleOpenMenu(item)}>
                  <div className={styles.MenuItem_label}>
                    <span>{item?.label}</span>{" "}
                    <span>
                      {" "}
                      <FaChevronDown />{" "}
                    </span>
                  </div>
                  <div className={`${styles.MenuItem_dropdown} ${openMenu && openMenu === item?.id ? styles.open : ""}`}>
                    <ul>
                      {item?.item?.map((subItem) => (
                        <li key={subItem?.id}>{subItem?.label}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.Actions}>Actions</div>
        </div>
      </header>
    </>
  );
};

export default Header;
