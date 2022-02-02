import { Button } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
function AddBox({ handleChange }) {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        console.log(e.target);
        e.preventDefault();
        handleChange(title);
      }}
    >
      <div
        className="SearchBox"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1em",
        }}
      >
        <input
          type="text"
          placeholder="Add To Do List"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{
            width: "700px",
            height: "50px",
            paddingLeft: "20px",
            borderRadius: "0.2rem",
            fontSize: "1.8rem",
            margin: "6px",
            border: "none",
            outline: "none",
            caretColor: "cyan",
            marginRight: "20px",
          }}
        />
        <Button variant="contained" className="btn" type="submit">
          ADD TO LISt
        </Button>
      </div>
    </form>
  );
}

export default AddBox;
