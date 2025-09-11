import utilityStyles from "@/app/resources/styles/Utility.module.scss";
import MenuOptions from "../MenuOptions/MenuOptions";
import styles from "./DesktopMenu.module.scss";
import RedirectLink from "@/app/components/utilities/RedirectLink/RedirectLink";
export default function DesktopMenu() {
  return (
    <div className={`${utilityStyles.centerContainer}`}>
      <div className={styles.DesktopMenu__OptionsAndMeetFlex}>
        <MenuOptions />
        <RedirectLink
          title="Schedule a meet"
          link="https://calendly.com/bedmuthaapoorv/30min"
          underlineHeight="3pt"
        />
      </div>
    </div>
  );
}
