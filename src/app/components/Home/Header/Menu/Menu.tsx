"use client"
import MenuButton from "./MenuButton/MenuButton";
import menuOptions from "./menuOptions";
import styles from './Menu.module.css'
import { useState } from "react";
export default function Menu() {
    let[activeIndex, setActiveIndex]=useState<number>(0);
    return <div className={`${styles.Menu}`}>
        {menuOptions.map((option, index) => {
        return (
          <MenuButton
            key={index}
            title={option.title}
            action={option.action}
            setActiveIndex={setActiveIndex}
            isActive={index === activeIndex}
            index={index}
          ></MenuButton>
        );
      })}
    </div>
}