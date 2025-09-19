"use client";
import { useEffect, useState } from "react";
import utilityStyles from "@/app/resources/styles/Utility.module.scss";
import styles from "./Impact.module.scss";
import { Carousel } from "react-responsive-carousel";
import impactsArray, { IImpactData } from "./impactsData";
import Impact from "../Impact/Impact";
export default function Impacts() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  useEffect(() => {
    if (window) {
      setIsDesktop(window.innerWidth > 678);
    }
  }, []);
  return (
    <div className={`${utilityStyles.centerContainer}`}>
      <div className={`${styles.Impacts}`}>
        {isDesktop ? (
          <></>
        ) : (
          <Carousel
            showThumbs={false}
            showArrows={false}
            autoPlay
            infiniteLoop
            swipeable={true}
            showStatus={false}
            interval={5000}
            transitionTime={1000}
            className={`${styles.ImpactsCarousel}`}
          >
            {impactsArray.map((impact: IImpactData, index) => {
              return (
                <div key={impact.title + index}>
                  <Impact impact={impact} />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
}
