import { MdPostAdd, MdMessage, MdBeachAccess } from "react-icons/md";
import styles from "./MainHeader.module.css";
const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <span className={styles.icon}>
          <MdBeachAccess />
        </span>
        <span className={styles.heading}> Annas Pinnwand</span>
      </h1>
      <div>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={24} />
          Neuer Eintrag
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
