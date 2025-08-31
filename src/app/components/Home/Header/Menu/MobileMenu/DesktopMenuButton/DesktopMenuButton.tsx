import styles from "./DesktopMenuButton.module.scss";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
interface DesktopMenuButtonProps {
  title: string;
  action: () => void;
}
export default function DesktopMenuButton({
  title,
  action,
}: Readonly<DesktopMenuButtonProps>) {
  return (
    <button onClick={action}>
      <div
        className={`${styles.DesktopMenuButton} ${fontStyles.primary} ${fontStyles.semibold}`}
      >
        {title}
      </div>
    </button>
  );
}
