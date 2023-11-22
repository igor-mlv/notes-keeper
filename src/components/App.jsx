import React, { useState, useEffect } from "react";
import notesFile from "../notes"
import Header from "./Header";
import Footer from "./Footer";
import NewNoteBlock from "./NewNoteBlock";
import DisplayNotes from "./DisplayNotes";

function App() {

    // State to manage input title
    const [inputTitle, setInputTitle] = useState("");

    // State to manage input note
    const [inputNote, setInputNote] = useState("");

    // State to manage the list of notes
    const [notes, setNotes] = useState([]);

    // Effect to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch data asynchronously
        const fetchData = async () => {
            // add notes from default file
            setNotes(notesFile);
        };

        fetchData();
    }, []);// Dependency array is empty since notesFile is only fetched once when the component mounts

    // Function to handle changes in the input fields
    function handleChange(event) {
        if (event.target.id === "inputTitle") {
            setInputTitle(event.target.value);
        } else {
            setInputNote(event.target.value)
        }
    }

    // Function to add a new note
    function addNote() {
        setNotes((prevItems) => {
            // Get the last item in the list
            const lastItem = prevItems[prevItems.length - 1];
            // Calculate the next ID
            const nextId = lastItem ? lastItem.id + 1 : 1;

            // Return a new array with the updated list of notes
            return [...prevItems, { id: nextId, title: inputTitle, content: inputNote }];
        });
        // Clear input fields after adding a note
        setInputTitle("");
        setInputNote("");
    }

    // Function to delete a note by ID
    function deleteNote(id) {
        console.log(id);
        setNotes((prevItems) => {
            return (
                prevItems.filter((item) => {
                    return item.id !== id
                })
            );
        })
    }

    // Render the component
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

// Export the component as the default export
export default App;