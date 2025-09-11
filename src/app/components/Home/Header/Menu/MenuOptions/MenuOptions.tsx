import menuOptions from "../menuOptions";
import IMenuOption from "@/app/interfaces/IMenuOption";
import DesktopMenuButton from "../MobileMenu/DesktopMenuButton/DesktopMenuButton";
import styles from "./MenuOptions.module.scss";
export default function MenuOptions() {
  const renderedOptions = menuOptions.map(
    (option: IMenuOption, index: number) => {
      return (
        option.onDesktop && (
          <div key={option.title}>
            <DesktopMenuButton title={option.title} action={option.action} />
          </div>
        )
      );
    }
  );
  return <div className={styles.DesktopMenu__Flex}>{renderedOptions}</div>;
}
