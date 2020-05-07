import React from "react";

function Note() {
  return (
    <div className="note">
      <h1 contenteditable="true">Title</h1>
      <p contenteditable="true">content</p>
    </div>
  );
}

export default Note;
