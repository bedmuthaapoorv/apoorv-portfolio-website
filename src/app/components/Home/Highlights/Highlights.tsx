"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Highlights.module.scss";
import utilityStyles from "@/app/resources/styles/Utility.module.scss";
import highlightsArray, { IHighlightData } from "./highlightsArray";
import Highlight from "./Highlight/Highlight";
import { useEffect, useState } from "react";

export default function Highlights() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  useEffect(() => {
    if (window) {
      setIsDesktop(window.innerWidth > 678);
    }
  }, []);
  return (
    <div className={`${utilityStyles.centerContainer}`}>
      <div className={`${styles.Highlights}`}>
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
            className={`${styles.HighlightsCarousel}`}
          >
            {highlightsArray.map((highlight: IHighlightData, index) => {
              return (
                <div key={highlight.title + index}>
                  <Highlight highlight={highlight} />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
}
