import { useState } from 'react';
import PostsList from "./components/PostsList";
import MainHeader from './components/MainHeader';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // default also standard wenn man auf seite kommt soll modal nicht gezeigt werden dswg auf false

  const closeModalHandler = () => {
    setModalVisible(false);
    }

  const showModalHandler = () => {
    setModalVisible(true);
  }  
  return (
    <>
    <MainHeader onCreatePost={showModalHandler} />
    <main>
    <PostsList isPosting={modalVisible} onStopPosting={closeModalHandler}/>
    {/* hier wird auf die Variabel modalVisible verwiesen, dass Modal sichtbar is */}
    </main>
    </>
  )
}

export default App
