"use client";
// desc: UI component that displays the first name & last name of the user
import { useEffect, useState } from "react";
import styles from "./Name.module.scss";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
export default function Name() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  useEffect(() => {
    if (window) {
      setIsDesktop(window.innerWidth > 678);
    }
  }, []);
  return (
    <div className={`${styles.Name} ${fontStyles.primary}`}>
      <div className={`${fontStyles.italic} ${fontStyles.bannerL}`}>Apoorv</div>{" "}
      <div
        className={`${isDesktop ? fontStyles.bannerL : fontStyles.bannerM} ${
          isDesktop ? fontStyles.semibold : ""
        }`}
      >
        Bedmutha
      </div>
    </div>
  );
}
