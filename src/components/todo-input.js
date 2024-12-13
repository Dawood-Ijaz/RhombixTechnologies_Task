import React, { useState } from "react";

function TodoInput(props) {
  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.addList(input); 
      setInput("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(input);
          setInput("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
