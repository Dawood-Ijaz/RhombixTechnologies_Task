import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoInput from "./components/todo-input";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const addList = (inputText) => {
    if (inputText.trim()) {
      setList([...list, inputText]);
    }
  };
  const deleteItem = (key) => {
    let newlist = [...list];
    newlist.splice(key, 1);
    setList([...newlist]);
  };
  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList} />
          <h1 className="app-heading">To-Do List</h1>
          <hr />
          {list.map((list, i) => {
            return <List index={i} key={i} item={list} deleteItem={deleteItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
