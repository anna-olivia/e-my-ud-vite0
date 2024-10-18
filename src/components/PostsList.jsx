import styles from './PostsList.module.css'
import NewPost from './NewPost'
import Post from "./Post"
const names = ["Levi","Anna", "Rudi", "Yannick", "Golo", "Amelie", "Chris", "Nayla"];

const PostsList = () => {
    return(
        <>
        <NewPost />
        <ul className={styles.posts}>
             <Post author={names[0]} message="cool, cool"/>
             <Post author={names[1]} message="Jo"/>

        </ul>
        </>

    );
}

export default PostsList;