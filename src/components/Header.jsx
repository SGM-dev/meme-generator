import React from "react";
import "./Header.css";
import logo from "../assets/troll-face.svg";

export default function Header() {
  return (
    <header>
      <img className="header--logo" src={logo} alt="Troll Face" />
      <h1 className="header--title">Meme Generator</h1>
      <p className="header--subtitle">React Course - Project 3</p>
    </header>
  );
}
