import { useState } from "react";
import styles from "./NewPost.module.css";

const NewPost = ({ onCancel, onAddPost }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");

  const changeMessageHandler = (e) => {
    setCurrentMessage(e.target.value);
  };

  const changeAuthorHandler = (e) => {
    setCurrentAuthor(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      message: currentMessage,
      author: currentAuthor,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeMessageHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={changeAuthorHandler} required />
      </p>

      <section className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Abbrechen
        </button>
        <button>Senden</button>
      </section>
    </form>
  );
};

export default NewPost;
