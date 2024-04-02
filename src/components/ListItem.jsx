import React from "react";
import '../index.css';
import 'animate.css';
import 'bootstrap';

export default function ListItem({item, deleteListItem, index}){

  function handleDelete(){
    deleteListItem(index);
    
  }

  return (
    <div className="list-item">
      <li>{item}</li>
      <input className="delete-btn" type="button" value="X" onClick={handleDelete}/>
    </div>
  );
}