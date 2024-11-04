import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

// state uplifting, damit alles in app.jsx verfügbar gemacht wird

const PostsList = ({ isPosting, onStopPosting }) => {
  //fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {setCurrentPosts(data.posts)});
  // woher data.posts ? backend? nochmal checken
  // deafult ist ja GET request also hier wollen wir ja die Daten von dem Port holen

  const [currentPosts, setCurrentPosts] = useState([]);

// neuer State für buffering

const [isFetching, setIsFetching] = useState(false);
// sollte anfangs nicht bufferen wenn noch keine Einträge da sind
// bei isFetching kann man jetzt also eine alternative oberfläche für user zeigen während aus backend daten gezogen werden

useEffect(()=> {
  async function fetchPosts() {
    setIsFetching(true);
    // soll ja erstmal für user buffern bevor einträge geliefert werden
    const response = await fetch('http://localhost:8080/posts');
    const resData = await response.json();
// Errorhandling bearbeiten
//if(!response.ok){}

  setCurrentPosts(resData.posts); 
  setIsFetching(false);

  }
  fetchPosts();
  

}, []);
  
  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts',{
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {'Content-Type': 'application/json'}
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

      {!isFetching && currentPosts.length > 0 && (
        // !isFetching also nur wenn gerade nicht Einträge vom backend gefetched werden
      <ul className={styles.posts}>
       
{currentPosts.map((post) => (
            <Post key={post.message} author={post.author} message={post.message} />
          ))}
        
      </ul>
      )}
      {!isFetching && currentPosts.length === 0 && (
        <div className={styles.platzhalter}>
        {/* !isFetching wenn keine Einträge da sind soll auch nichts gefetched werden also keine Buffering Komponente nötig */}
        <h2>Bis jetzt wurden noch keine Einträge gemacht.</h2>
        </div>
      )}
        {isFetching && (
          <div className={styles.platzhalter}>
            <p> Loading ...</p>
          </div> )
          }
        {/* hier kannste ja später nette ani machen */}
    </>
  );
};

export default PostsList;
