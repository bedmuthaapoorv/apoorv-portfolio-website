import fontStyles from "@/app/resources/styles/Fonts.module.scss";
import Image from "next/image";
import RedirectLink from "@/app/components/utilities/RedirectLink/RedirectLink";
import styles from "./Highlight.module.scss";
import { IHighlightData } from "../highlightsArray";
import utilityStyles from "@/app/resources/styles/Utility.module.scss";
interface HighlightProps {
  highlight: IHighlightData;
}
export default function Highlight({ highlight }: Readonly<HighlightProps>) {
  return (
    <div className={`${styles.Highlight}`}>
      <Image
        className={`${styles.HighlightImage}`}
        src={highlight.image}
        alt={highlight.title}
      />
      <div className={`${styles.HighlightText}`}>
        <div
          className={`${fontStyles.primary} ${fontStyles.italic} ${fontStyles.paragraphL}`}
        >
          {highlight.title}
        </div>
        <div className={`${fontStyles.primary} ${fontStyles.paragraphL}`}>
          <strong>{highlight.subTitle}</strong>
        </div>
        <p className={`${fontStyles.primary} ${fontStyles.paragraphL}`}>
          {highlight.impact}
        </p>
        <div className={`${utilityStyles.row}`}>
          <RedirectLink
            titleColor="white"
            arrowHeight="0pt"
            underlineHeight="2px"
            underlineColor="white"
            title="Impact"
            link={highlight.link}
            arrowColor="white"
          />
          <div
            style={{
              flexGrow: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}
