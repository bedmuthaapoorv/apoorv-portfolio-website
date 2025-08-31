"use client";
import MenuButton from "../MenuButton/MenuButton";
import menuOptions from "../menuOptions";
import styles from "./MobileMenu.module.scss";
import { useState } from "react";
export default function MobileMenu() {
  let [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className={`${styles.Menu}`}>
      {menuOptions.map((option, index) => {
        return (
          <MenuButton
            key={"menu_option_" + index}
            title={option.title}
            action={option.action}
            setActiveIndex={setActiveIndex}
            isActive={index === activeIndex}
            index={index}
          />
        );
      })}
    </div>
  );
}
