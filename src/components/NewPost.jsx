import { useState } from 'react';
// hooks ändern etwas im component sind funktionen in react die mit use anfangen nennt man hooks und sind eigentlich normale js funktionen (müssen aber in einer react component ausgeführt werden - sonst gehts nicht) die vorgefertigt wurden und dann kann man sie nutzen oder man baut sie halt selbst...
// state muss dann im component rgistriert werden als ein stück vom state - also ein bestimmter zustand
import styles from './NewPost.module.css';

const NewPost = () => {
const [currentValue, setCurrentValue] = useState('');
// registrierung des states
// array destructuring mit namensgebung nach konvention
// const weil man kein neuen wert assignen will, sondern man ruft state updating function -> immer wieder eine neue konstante variable weil man über react immer wieder eine neue komponente mit aktualisierten werten baut und nichts überschreibt
  const changeMessageHandler = (e) => {
    setCurrentValue(e.target.value);
    // setter oder updater Funktion wird aufgerufen mit dem wert der über event beobachtet wird und dann aktualisiert werden kann (keine callbackfunktion)- besondere fkt bei react
    
  } 
  // name Handler weißt darauf hin, dass fkt sich auf eventlistener bezieht 

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeMessageHandler}/>
      </p>
      <p>{enteredMessage}</p>
      {/* jetzt kann über useState auch die der Wert eingesetzt werden weil dieser Teil der Komponente mit useState setterFkt aktualisiert wird */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;