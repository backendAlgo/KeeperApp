import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [notes, setNotes] = useState([]);
    function addNote(value) {
        setNotes((prev) => {
            return [
                ...prev,value
            ]
        })
    }
    function deleteNote(index) {
        setNotes((prev) => {
            return prev.filter((element, i) => {
                return i !== index;
            })
        })
    }
  return (
    <div>
      <Header />
      <CreateArea  addNote={addNote}/>
        {notes.map(({title, content}, index) => {
            return (
                <Note key={index} id={index} title={title} content={content} deleteNote={deleteNote}/>
            )
        })}
      <Footer />
    </div>
  );
}

export default App;
