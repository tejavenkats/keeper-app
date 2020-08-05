import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [postsArr, setPostsArr] = useState([]);

  function addItem(post) {
    setPostsArr((prevValue) => {
      return [...prevValue, post];
    });
  }

  function deletePost(id) {
    setPostsArr((prevValue) => {
      return prevValue.filter((post, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {postsArr.map((singlePost, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={singlePost.title}
            content={singlePost.content}
            onDelete={deletePost}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
