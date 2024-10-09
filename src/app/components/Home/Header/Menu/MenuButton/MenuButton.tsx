'use client'
import styles from './MenuButton.module.css'
// Menu button component which includes the UI element for an option in Menu
export default function MenuButton(props: any) {
  return (
    <div
      style={{
        backgroundColor: props.isActive? "white": "",
        color: props.isActive? "#3074FE": "white",
      }}
      className={`${styles.MenuButton} inter-semibold`}
      onClick={() => {
        props.action != null ? props.action() : "";
        props.setActiveIndex(props.index);
      }}
    >
      {props.title}
    </div>
  );
}
