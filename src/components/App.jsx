import React, { useState, useEffect } from "react";
import notesFile from "../notes"
import Header from "./Header";
import Footer from "./Footer";
import NewNoteBlock from "./NewNoteBlock";
import DisplayNotes from "./DisplayNotes";

function App() {

    const [inputTitle, setInputTitle] = useState("");
    const [inputNote, setInputNote] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Assuming notesFile is available in the component scope
        setNotes(notesFile);
    }, [notesFile]);

    function handleChange(event) {
        if (event.target.id === "inputTitle") {
            setInputTitle(event.target.value);
        } else {
            setInputNote(event.target.value)
        }
    }

    function addNote() {
        setNotes((prevItems) => {
            const lastItem = prevItems[prevItems.length - 1];
            const nextId = lastItem ? lastItem.id + 1 : 1;

            return [...prevItems, { id: nextId, title: inputTitle, content: inputNote }];
        });
        console.log(notes.map((note, index) => (
            `Note ${note.id}: Title - ${note.title}, Content - ${note.content}`
        )));
        setInputTitle("");
        setInputNote("");
    }

    function deleteNote(id) {
        console.log(id);
        setNotes((prevItems) => {
            return (
                prevItems.filter((item) => {
                    return item.id !== id
                })
            );
        })
        console.log("button is clicked");
        console.log(notes);
    }
    return (
        <div className="root-div">
            <Header />
            <NewNoteBlock
                onChange={handleChange}
                title={inputTitle}
                note={inputNote}
                addButton={addNote}
            />
            <DisplayNotes listOfNotes={notes} onClickDelete={deleteNote} />
            <Footer />
        </div>
    );
}

export default App;