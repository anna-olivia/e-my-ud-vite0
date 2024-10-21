import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from "./Post";
import styles from './PostsList.module.css';

// state uplifting, damit alles in app.jsx verfügbar gemacht wird

const PostsList = ({isPosting, onStopPosting}) => {
    const [currentMessage,setCurrentMessage] = useState('');
    const [currentAuthor, setCurrentAuthor] = useState('');
  

    const changeMessageHandler = (e) => {
        setCurrentMessage(e.target.value);
    }
    
    const changeAuthorHandler = (e) => {
        setCurrentAuthor(e.target.value);
    }


    return(
        <>
{/* value name geändert damit es leichter weitergegeben werden kann, übersichtlciher wird und nicht verwechselt wird mit handlerfkt - hier soll onStopPosting auch nur ein Pointer auf closeModalHandler werden - isPosting is dann modalVisible Wert*/}
        {isPosting ?  <Modal onClose={onStopPosting}>
        <NewPost
        onMessageChange={changeMessageHandler} onAuthorChange={changeAuthorHandler} onCancel={onStopPosting}/>
        </Modal> : false }
         {/* kann auch null schreiben beides in dem fall das gleiche weil modal ja nicht gezeigt werden soll also wird useState auf false gesetzt oder null was dann das gleiche bedeuten würde */}

       
        <ul className={styles.posts}>
             <Post author={currentAuthor}  message={currentMessage}/>
             <Post author="anna" message="hallo"/>

        </ul>
        </>

    );
}

export default PostsList;