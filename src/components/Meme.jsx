import React from "react";
import { useState } from "react";
import "./Meme.css";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

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
          name="topText"
          placeholder="One does not simply"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="bottom-text"
          name="bottomText"
          placeholder="Walk into Mordor"
          onChange={handleChange}
        ></input>
        <button type="submit" className="submit-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
