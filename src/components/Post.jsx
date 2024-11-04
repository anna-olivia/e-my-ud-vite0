import styles from "./Post.module.css";

const Post = ({ author, message }) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{message}</p>
    </li>
  );
};
export default Post;
