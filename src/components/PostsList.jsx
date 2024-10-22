import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

// state uplifting, damit alles in app.jsx verfügbar gemacht wird

const PostsList = ({ isPosting, onStopPosting }) => {
  const [currentPosts, setCurrentPosts] = useState([]);

  const addPostHandler = (postData) => {
    setCurrentPosts((posts) => [postData, ...posts]);
    // postData ist dann neuer Post und ...posts also mit spread operator sind die schon gegebenen Posts
    // wenn neuer State auf alten State basiert dann fkt state benutzen und nicht etwas setCurrentPosts([postData,...posts])
    // new State ist dann eein wert

    // const postsWithId = currentPosts.map(post => ({
    //     ...post,
    //     id: uuidv4()
    //   }));
  };

  return (
    <>
      {/* value name geändert damit es leichter weitergegeben werden kann, übersichtlciher wird und nicht verwechselt wird mit handlerfkt - hier soll onStopPosting auch nur ein Pointer auf closeModalHandler werden - isPosting is dann modalVisible Wert*/}
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )}
      {/* kann auch null schreiben beides in dem fall das gleiche weil modal ja nicht gezeigt werden soll also wird useState auf false gesetzt oder null was dann das gleiche bedeuten würde */}

      <ul className={styles.posts}>
        {/* Post und zugehöriger state rausgenommen weil dynamisch mit eintrag bzw. form submission erstellt werden soll */}

        {currentPosts
          .map((post) => ({
            ...post,
            id: uuidv4(),
          }))
          .map((post) => (
            <Post key={post.id} author={post.author} message={post.message} />
          ))}
        {/* solange es kein backend gibt gehts auch so- aber nicht sehr elegant */}
      </ul>
    </>
  );
};

export default PostsList;
