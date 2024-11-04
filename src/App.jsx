import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModalHandler = () => {
    setModalVisible(false);
  };

  const showModalHandler = () => {
    setModalVisible(true);
  };
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalVisible} onStopPosting={closeModalHandler} />
      </main>
    </>
  );
};

export default App;
