import React from "react";

function NewNoteBlock(props) {
    return (
        <div className="new-note-container">
            <div className="new-note-input-block">
                <input id="inputTitle" onChange={props.onChange} type="text" className="title-input" value={props.title} placeholder="Title" />
                <textarea id="inputNote" className="note-input" onChange={props.onChange} value={props.note} placeholder="Type your note here"></textarea>
                <button onClick={props.addButton} className="add-button">Add</button>
            </div>
        </div>
    );
}

export default NewNoteBlock;