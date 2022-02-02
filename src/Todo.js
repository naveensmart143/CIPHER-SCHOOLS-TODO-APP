import React, { useState } from "react";
import AddBox from "./AddBox";
import ListItem from "./ListItem";

function Todo() {
  const [list, setList] = useState([{ id: 0, title: "ADD ITEMS TO DO LIST" }]);
  const [count, setCount] = useState(1);
  const handleChange = (title) => {
    if (
      !title ||
      /^\s*$/.test(title) ||
      list.find((item) => {
        return item.title === title;
      })
    ) {
      alert("provide the name of the title or Provide a Unique title");
    } else {
      const lists = [{ id: count, title }, ...list];
      setCount(count + 1);
      setList(lists);
    }
  };
  const handleDelete = (id) => {
    const lists = list.filter((item) => {
      return item.id !== id;
    });
    // console.log(lists);
    setList(lists);
  };
  return (
    <>
      <AddBox handleChange={handleChange} />
      <div
        className="listItems"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {list.map((item) => {
          return (
            <ListItem key={item.id} title={item} handleDelete={handleDelete} />
          );
        })}
      </div>
    </>
  );
}

export default Todo;
