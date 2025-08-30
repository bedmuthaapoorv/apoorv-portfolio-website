import styles from "./MenuButton.module.scss";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
// Menu button component which includes the UI element for an option in Menu
interface MenuButtonProps {
  title: string;
  isActive: boolean;
  action?: () => void;
  setActiveIndex: (index: number) => void;
  index: number;
}

export default function MenuButton({
  title,
  isActive,
  action,
  setActiveIndex,
  index,
}: Readonly<MenuButtonProps>) {
  return (
    <button
      style={{
        backgroundColor: isActive ? "white" : "",
        color: isActive ? "#3074FE" : "white",
      }}
      className={`${styles.MenuButton} ${fontStyles.primary} ${fontStyles.paragraphL} ${fontStyles.semibold}`}
      onClick={() => {
        action && action();
        setActiveIndex(index);
      }}
    >
      {title}
    </button>
  );
}
