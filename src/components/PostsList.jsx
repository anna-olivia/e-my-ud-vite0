import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

// state uplifting, damit alles in app.jsx verfügbar gemacht wird

const PostsList = ({ isPosting, onStopPosting }) => {
  const [currentPosts, setCurrentPosts] = useState([]);

  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts',{
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {'Content-Type': 'application/json'}
  });
    // mit der fetch funktion kann man daten bekommen aber auch senden
    // fetch API nimmt die url zu der die daten gesendet werden soll - hier halt irgendein port der in backend also in restapi festgelegt wurde und localhost weil es halt lokal aufm rechner nur läuft 
    // strukturpfad /posts wenn ich einen neuen eintrag speichern will dann hier bei posts, weil schon erstellte posts mitgenommen werden sollen
    // fetch sendet ein get request, deswegen muss man dann als zweites argument die methode auf post ändern und die gesendeten postData in json umändern mit JSON.stringify
    // und ein header wird gebraucht
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

      {currentPosts.length > 0 && (
        
      <ul className={styles.posts}>
       
{currentPosts.map((post) => (
            <Post key={post.message} author={post.author} message={post.message} />
          ))}
        
      </ul>
      )}
      {currentPosts.length === 0 && <div className={styles.platzhalter}>
        <h2>Bis jetzt wurden noch keine Einträge gemacht.</h2></div>}
    </>
  );
};

export default PostsList;
