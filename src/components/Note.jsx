import React from "react";

// Define the Note component, which represents a single note
function Note(props) {
    // Render the note's title, content, and a delete button
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => { props.onClickDelete(props.id) }} className="delete-button">Delete</button>
        </div>
    );
}

// Export the Note component to make it available for use in other components
export default Note;