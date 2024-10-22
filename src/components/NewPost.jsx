import { useState } from 'react';
import styles from './NewPost.module.css';

const NewPost = ({onCancel, onAddPost}) => {
  const [currentMessage,setCurrentMessage] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');


  const changeMessageHandler = (e) => {
    setCurrentMessage(e.target.value);
}

const changeAuthorHandler = (e) => {
    setCurrentAuthor(e.target.value);
}
const submitHandler = (e) => {
  e.preventDefault();
  // damit kein http request gesendet wird also dass es nicht zu einer kompleten neuladen der seite kommt sondern nur einer komponente aktualisiert wird und kein server side code benötigt wird- weil frontend also im browser läuft und damit react nicht umgehen könnte
  const postData = {
    message: currentMessage,
    author: currentAuthor,
  }
  // object sammelt und gruppiert dann werte aus state also currentMessage und currentAuthor
  // object fängt dann daten aus form ab ohne validierung (eigentlich müsste man noch client side validieren, ob richtiges eingegeben)
  // hier ohne validierung aber wenigstens mit require attribut
  onAddPost(postData);
  onCancel();
  // hier wird dann die onCancel function aufgerufen, damit beim klicken des senden buttons auch das modal wieder schließt
  // hier halt unabhängig aufgerufen also sonst wär 

}

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {/* eventListener onSubmit default event - hier sollen die Werte gesammelt werden die vorher in PostLists unter den Props von post lagen - jetzt sollen da aber halt aus ner Schleife dann Post entstehen - also kann auch State dort rausgenommen werden*/}
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeMessageHandler}/>
      </p>
      {/* p verschachteln aus semantischen Gründen - weil gruppierungen dann abgeschlossene informationseinheit ähnlich wie bei einem textabsatz - p darf aber nur inline elemente enthalten */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={changeAuthorHandler} required />
      </p>
      {/* hier sollte man besser div oder section statt p zur verschachtelung verwenden weil button blockelemente */}
      <section className={styles.actions}>
        <button type="button" onClick={onCancel}>Abbrechen</button>
        {/* type button weil halt nicht neu laden soll - wegen http request bei formular buttons ist default type="submit" -also form soll nicht gesendet werden*/}
        {/* aber es soll modal also form schließen */}
        {/* onCancel muss also auf PostLits bei NewPost weitergegeben werden, damit Funktion die Modal schließen soll, getriggert wird */}
        <button>Senden</button>
      </section>
    </form>
  );
}

export default NewPost;