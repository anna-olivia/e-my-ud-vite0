import styles from './NewPost.module.css';

const NewPost = ({onAuthorChange, onMessageChange, onCancel}) => {
  return (
    <form className={styles.form}>
      {/* p verschachteln aus semantischen Gründen - weil gruppierungen dann abgeschlossene informationseinheit ähnlich wie bei einem textabsatz - p darf aber nur inline elemente enthalten */}
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onMessageChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={onAuthorChange} required />
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