"use client";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
export default function Menu() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  useEffect(() => {
    if (window) {
      setIsDesktop(window.innerWidth > 678);
    }
  }, []);
  return <>{isDesktop ? <DesktopMenu /> : <MobileMenu />}</>;
}
