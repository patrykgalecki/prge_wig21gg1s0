import React from "react";

function TodoItem({ id, zadanie, lisItemRemover }) {
  console.log(id, zadanie);
  return (
    <div key={id}>
      Nr {id}. opis zadania: {zadanie}
      <button onClick={(e) => lisItemRemover(id)}>REMOVE</button>
    </div>
  );
}

export default TodoItem;
