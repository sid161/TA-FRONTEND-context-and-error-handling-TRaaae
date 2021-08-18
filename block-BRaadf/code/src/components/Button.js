import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function SwitchButton({ isDarkMode, changeMode }) {
  let isDarkMode = useContext(UserContext)
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
