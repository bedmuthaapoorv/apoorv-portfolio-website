import utilityStyles from "@/app/resources/styles/Utility.module.scss";
import menuOptions from "../menuOptions";
import DesktopMenuButton from "../MobileMenu/DesktopMenuButton/DesktopMenuButton";
import IMenuOption from "@/app/interfaces/IMenuOption";
import styles from "./DesktopMenu.module.scss";
import RedirectLink from "@/app/components/utilities/RedirectLink/RedirectLink";
export default function DesktopMenu() {
  return (
    <div className={`${utilityStyles.centerContainer}`}>
      <div className={styles.DesktopMenu__OptionsAndMeetFlex}>
        <div className={styles.DesktopMenu__Flex}>
          {menuOptions.map((option: IMenuOption, index: number) => {
            return option.onDesktop ? (
              <div key={option.title}>
                <DesktopMenuButton
                  title={option.title}
                  action={option.action}
                />
              </div>
            ) : (
              <></>
            );
          })}
        </div>
        <RedirectLink
          title="Schedule a meet"
          link="https://calendly.com/bedmuthaapoorv/30min"
          underlineHeight="3pt"
        />
      </div>
    </div>
  );
}
