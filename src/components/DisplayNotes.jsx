import React from "react";
import Note from "./Note";

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

export default DisplayNotes;