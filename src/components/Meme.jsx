import React from "react";
import { useState } from "react";
import "./Meme.css";
import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(`${memesArray[randomNumber].url}`);
  }

  return (
    <main>
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
        <button type="submit" className="submit-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>
      <img src={memeImage}  className="meme-image"/>
    </main>
  );
}
