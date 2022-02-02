import React, { useState } from "react";
import { Clear, Done } from "@mui/icons-material";
import "./ListItem.css";

function ListItem({ title, handleDelete }) {
  const [isDone, setDone] = useState(false);
  return (
    <div className="listName">
      <div className="title">
        <h2>{title.title}</h2>
        {isDone && (
          <div className="completeTag">
            <p>Completed</p>
          </div>
        )}
      </div>
      <div className="btns">
        <button
          onClick={() => {
            setDone((prev) => !prev);
          }}
          className="btnR"
        >
          {" "}
          <Done />
        </button>
        <button
          onClick={() => {
            handleDelete(title.id);
          }}
          className="btnW"
        >
          {" "}
          <Clear />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
