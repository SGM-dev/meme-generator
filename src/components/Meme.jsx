import React from "react";
import "./Meme.css";

export default function Meme() {
  return (
    <form className="form-container">
      <input
        type="text"
        id="top-text"
        name="top-text"
        placeholder="Shut up"
      ></input>
      <input
        type="text"
        id="bottom-text"
        name="bottom-text"
        placeholder="and take my money"
      ></input>
      <button type="submit" className="submit-btn">
        Get a new meme image
      </button>
    </form>
  );
}
