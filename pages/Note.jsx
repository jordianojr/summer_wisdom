import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.date}</h1>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
