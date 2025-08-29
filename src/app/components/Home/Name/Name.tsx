// desc: UI component that displays the first name & last name of the user
import styles from "./Name.module.scss";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
export default function Name() {
  return (
    <div className={`${styles.Name} ${fontStyles.primary}`}>
      <div className={`${fontStyles.italic} ${fontStyles.bannerL}`}>Apoorv</div>{" "}
      <div className={`${fontStyles.bannerM}`}>Bedmutha</div>
    </div>
  );
}
