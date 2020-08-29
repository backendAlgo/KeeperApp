import React, {useState} from "react";

function CreateArea({addNote}) {
    const [value, setValue] = useState({title: "", content: ""});
    function handleChange(e) {
        const newValue = e.target.value;
        const name = e.target.name;
        setValue((prev) => {
            return {
                ...prev,
                [name]: newValue
            }
        })
    }
    return (
    <div>
      <form onSubmit={(e) => {
          e.preventDefault();
          addNote(value);
          setValue({title: "", content: ""});
      }}>
        <input onChange={handleChange} name="title" placeholder="Title" value={value.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={value.content}/>
        <button>Add</button>
      </form>
    </div>
    );
}

export default CreateArea;
