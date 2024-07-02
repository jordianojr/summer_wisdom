import React, { useState } from "react";
import styles from './CreateArea.module.css'
import PlusIcon from '@mui/icons-material/Add';

<script src="https://unpkg.com/react/umd/react.production.min.js"></script>

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: new Date().toLocaleDateString()
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      date: new Date().toLocaleDateString()
    });
    event.preventDefault();
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{position: "relative", width: "560px", margin: "30px auto 20px auto"}}> Never forget anything important again! </h2>
      </div>
      <form className={styles.formContainer}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>
          <PlusIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
