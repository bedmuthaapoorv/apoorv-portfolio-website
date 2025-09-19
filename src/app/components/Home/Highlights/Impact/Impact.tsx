import fontStyles from "@/app/resources/styles/Fonts.module.scss";
import Image from "next/image";
import RedirectLink from "@/app/components/utilities/RedirectLink/RedirectLink";
import styles from "./Impact.module.scss";
import { IImpactData } from "../Impacts/impactsData";
import utilityStyles from "@/app/resources/styles/Utility.module.scss";
interface ImpactProps {
  impact: IImpactData;
}
export default function Impact({ impact }: Readonly<ImpactProps>) {
  return (
    <div className={`${styles.Impact}`}>
      <Image
        className={`${styles.ImpactImage}`}
        src={impact.image}
        alt={impact.title}
      />
      <div className={`${styles.ImpactText}`}>
        <div
          className={`${fontStyles.primary} ${fontStyles.italic} ${fontStyles.paragraphL}`}
        >
          {impact.title}
        </div>
        <div className={`${fontStyles.primary} ${fontStyles.paragraphL}`}>
          <strong>{impact.subTitle}</strong>
        </div>
        <p className={`${fontStyles.primary} ${fontStyles.paragraphL}`}>
          {impact.impact}
        </p>
        <div className={`${utilityStyles.row}`}>
          <RedirectLink
            titleColor="white"
            arrowHeight="0pt"
            underlineHeight="2px"
            underlineColor="white"
            title="Impact"
            link={impact.link}
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
