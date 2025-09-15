import resources from "@/app/resources/Resources";
import styles from "./RedirectLink.module.scss";
import Link from "next/link";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
interface IRedirectLinkProps {
  titleColor?: string;
  arrowHeight?: string;
  underlineHeight?: string;
  underlineColor?: string;
  title: string;
  link: string;
  arrowColor?: string;
}

export default function RedirectLink(props: Readonly<IRedirectLinkProps>) {
  let {
    titleColor = "black",
    arrowHeight = "9pt",
    underlineHeight,
    underlineColor = "#3074FE",
    title,
    link,
    arrowColor = "#3074FE",
  } = props;

  return (
    <div
      className={`${styles.RedirectLink} ${fontStyles.primary} ${fontStyles.semibold} ${fontStyles.paragraphL}`}
    >
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
            alt="redirect icon"
            className={`${styles.RedirectLink__Arrow}`}
            src={resources.images.redirectLinkArrowBlue.src}
            height={arrowHeight}
          />
        </div>
        <div
          className={`${styles.RedirectLink__underline}`}
          style={{
            height: underlineHeight,
            backgroundColor: underlineColor,
          }}
        />
      </Link>
    </div>
  );
}
