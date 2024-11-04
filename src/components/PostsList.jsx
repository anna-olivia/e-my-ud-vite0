import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:8080/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resData = await response.json();
        setCurrentPosts(resData.posts);
      } catch (e) {
        setError(e.message || "Irgendwas stimmt nicht!");
      } finally {
        setIsFetching(false);
      }
    }
    fetchPosts();
  }, []);
  const reload = () => {
    window.location.reload(true);
  };
  // auch hier Error handling editieren

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });
    setCurrentPosts((posts) => [postData, ...posts]);
  };

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )}
      {error && (
        <div className={styles.error}>
          <p>Error: {error} </p>
          <button onClick={() => reload()}>reload</button>
          <p>Falls du die App über einen öffentlichen Link besuchst, dann kannst du die Fehlermeldung ignorieren, weil es noch kein Backend mit Datenbank Support gibt. Hier kannst du eigentlich nur Einträge machen und sehen, aber sobald du die Website aktualisierst verschwinden die Einträge</p>
        </div>
      )}

      {!isFetching && currentPosts.length > 0 && (
        <ul className={styles.posts}>
          {currentPosts.map((post) => (
            <Post
              key={post.message}
              author={post.author}
              message={post.message}
            />
          ))}
        </ul>
      )}
      {!error && !isFetching && currentPosts.length === 0 && (
        <div className={styles.platzhalter}>
          <h2>Bis jetzt wurden noch keine Einträge gemacht.</h2>
        </div>
      )}
      {isFetching && (
        <div className={styles.platzhalter}>
          <p> Loading ...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
