import resources from "@/app/resources/Resources";
import styles from "./RedirectLink.module.css";
import Link from "next/link";
export default function RedirectLink(props: any) {
  let {titleColor='black', arrowHeight, underlineWidth, underlineHeight, underlineColor, title, link} = props;
  return (
    <div className={`${styles.RedirectLink}`}>
      <div className={`${styles.RedirectLink__Link}`}>
        <div
          className={`${styles.RedirectLink__Title}`}
          style={{
            color: titleColor,
          }}
        >
          {title}
        </div>
          <Link href={link}>
        <img
          className={`${styles.RedirectLink__Arrow}`}
          src={resources.images.redirectLinkArrowBlue.src}
          height={arrowHeight}
        ></img>
        </Link>
      </div>
      <div
        className={`${styles.RedirectLink__underline}`}
        style={{
          width: underlineWidth,
          height: underlineHeight,
          backgroundColor: underlineColor,
        }}
      ></div>
    </div>
  );
}
