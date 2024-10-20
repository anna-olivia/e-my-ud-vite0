import { useState } from 'react';
import Modal from './Modal'
import NewPost from './NewPost'
import Post from "./Post"
import styles from './PostsList.module.css'

const PostsList = () => {
    const [currentMessage,setCurrentMessage] = useState('');
    const [currentAuthor, setCurrentAuthor] = useState('');

    const changeMessageHandler = (e) => {
        setCurrentMessage(e.target.value);
    }
    
    const changeAuthorHandler = (e) => {
        setCurrentAuthor(e.target.value);
    }

    const [modalVisible, setModalVisible] = useState(true);
    // modal ist sichtbar deswegen auf true
    // state wurde gesetzt aber currentValue ist noch nicht klar deswegen 3. schritt bedingung - also true -> 

const closeModalHandler = () => {
setModalVisible(false);
}
    return(
        <>
        {modalVisible ?  <Modal onClose={closeModalHandler}>
        <NewPost
        onMessageChange={changeMessageHandler} onAuthorChange={changeAuthorHandler}/>
        </Modal> : false }
        {/* hier könnte ich auch : null schreiben weil auch nichts zeigt  */}
       
        <ul className={styles.posts}>
             <Post author={currentAuthor}  message={currentMessage}/>
             <Post author="anna" message="hallo"/>

        </ul>
        </>

    );
}

export default PostsList;