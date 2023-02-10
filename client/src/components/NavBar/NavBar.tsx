import React from "react";
import "./navBar.scss";
import Home from "../Home/Home";
import SearchBar from "../SearchBar/SearchBar";
import Options from "../Options/Options";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <Home />
      <SearchBar />
      <Options />
    </div>
  );
};

export default NavBar;
