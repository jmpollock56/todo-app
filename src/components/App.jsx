import React, { useState } from 'react'
import ListItem from './ListItem';


function App() {

  const [todoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState("");


  function handleChange(event) {
    let item = event.target.value;
    setNewToDo(item);

  }

  function handleAdd() {
    let input = document.getElementById("input-bar");
    if (input.value === "") {
      alert("Please enter an Item");
    } else {
      setToDoList([...todoList, newToDo]);
      setNewToDo("");
      input.value = "";
    }


  }

  function deleteFromList(sentIndex) {
    const newList = todoList.filter((item, index) => index !== sentIndex);
    setToDoList(newList);
  }


  return (
    <div className="container">
      <div className="add-container">
        <input id='input-bar' type="text" placeholder='What is there to do?' onChange={handleChange} />
        <input className='add-btn' type="button" value="+" onClick={handleAdd} />
      </div>
      <div className="list-container">
        <ul>
          {todoList.map((i, index) => {
            return <ListItem key={Math.random() * 1000} index={index} item={i} deleteListItem={deleteFromList} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App
