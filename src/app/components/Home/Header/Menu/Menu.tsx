"use client";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import styles from "./Menu.module.scss";
export default function Menu() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  useEffect(() => {
    if (window) {
      setIsDesktop(window.innerWidth > 678);
    }
  }, []);
  return <div className={`${styles.Header}`}>{isDesktop ? <DesktopMenu /> : <MobileMenu />}</div>;
}
