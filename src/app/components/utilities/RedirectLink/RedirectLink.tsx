import resources from "@/app/resources/Resources";
import styles from "./RedirectLink.module.css";
import Link from "next/link";
export default function RedirectLink(props: any) {
  let {
    titleColor = "black",
    arrowHeight = "9pt",
    underlineWidth,
    underlineHeight,
    underlineColor = "#3074FE",
    title,
    link,
  } = props;
  return (
    <div className={`${styles.RedirectLink} inter-semibold`}>
      <Link href={link}>
        <div className={`${styles.RedirectLink__Link}`}>
          <div
            className={`${styles.RedirectLink__Title}`}
            style={{
              color: titleColor,
            }}
          >
            {title}
          </div>

          <img
            className={`${styles.RedirectLink__Arrow}`}
            src={resources.images.redirectLinkArrowBlue.src}
            height={arrowHeight}
          ></img>
        </div>
        <div
          className={`${styles.RedirectLink__underline}`}
          style={{
            width: underlineWidth,
            height: underlineHeight,
            backgroundColor: underlineColor,
          }}
        ></div>
      </Link>
    </div>
  );
}
