import { MdPostAdd, MdMessage, MdBeachAccess } from 'react-icons/md';
// muss man erstmal runterladen weil nicht in react direkt als paket enthalten also npm install react-icons

import styles from './MainHeader.module.css';
// onCreatePost weitergeben, damit es als Pointer auf die showModalHandler in App.jsx zzeigen kann
const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        {/* <MdMessage /> */}
        <span className={styles.icon}> 
        <MdBeachAccess />
        </span>
        <span className={styles.heading}> Annas Pinnwand</span>
      </h1>
      <div>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={24}/>
          {/* größe hier über prop geändert */}
          Neuer Eintrag
        </button>
      </div>
    </header>
  );
}

export default MainHeader;