"use client";
import { useEffect, useState } from "react";
import RedirectLink from "../../utilities/RedirectLink/RedirectLink";
export default function ScheduleAMeet() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  useEffect(() => {
    if (window) {
      setIsDesktop(window.innerWidth > 678);
    }
  }, []);
  return (
    <>
      {isDesktop ? (
        <></>
      ) : (
        <RedirectLink
          title="Schedule a meet"
          link="https://calendly.com/bedmuthaapoorv/30min"
          underlineHeight="3pt"
        />
      )}
    </>
  );
}
