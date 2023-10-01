import React from "react";
import { useState } from "react";
import "./Meme.css";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
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
      <img src={meme.randomImage} className="meme-image" />
    </main>
  );
}
