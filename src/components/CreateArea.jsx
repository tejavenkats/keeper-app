import React, { useState } from "react";

function CreateArea(props) {
  const [postCont, setPostCont] = useState({
    title: "",
    content: "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setPostCont((prevValue) => {
      if (name === "title") {
        return { ...prevValue, title: value };
      } else if (name === "content") {
        return { ...prevValue, content: value };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={postCont.title}
        />
        <textarea
          onChange={handleOnChange}
          name="content"
          value={postCont.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(postCont);
            setPostCont({
              title: "",
              content: "",
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
