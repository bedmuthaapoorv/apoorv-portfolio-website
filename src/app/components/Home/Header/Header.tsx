import styles from './Header.module.css'
import Menu from './Menu/Menu';
// Header of the Home Screen which includes the menu
export default function Header() {
  return (
    <div className={`${styles.Header}`}>
      <Menu></Menu>
    </div>
  );
}
