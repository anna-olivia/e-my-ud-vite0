import styles from './NewPost.module.css';

const NewPost = ({onAuthorChange, onMessageChange}) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onMessageChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={onAuthorChange} required />
      </p>
    </form>
  );
}

export default NewPost;