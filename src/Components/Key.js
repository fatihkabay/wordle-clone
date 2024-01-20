import React, { useContext } from "react";
import "../App.css";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter();
    }
  };

  return (
    <div className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
