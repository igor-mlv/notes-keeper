import React from "react";
import Note from "./Note";

// Functional component to display a list of notes
function DisplayNotes(props) {
    return (
        <div className="notes-container">
            {
                props.listOfNotes.map(note =>
                    <Note key={note.id}
                        id={note.id}
                        title={note.title}
                        content={note.content}
                        onClickDelete={props.onClickDelete}
                    />)
            }
        </div>
    );
}

// Export the component as the default export
export default DisplayNotes;