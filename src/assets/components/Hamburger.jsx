import React, { useContext } from "react";
import style from "./Hamburger.module.css";
import { AppStorageContext } from "./Storage/AppStorage";

function Hamburger() {
  const { isHamClicked, handleHamClick } = useContext(AppStorageContext);

  return (
    <div
      onClick={() => handleHamClick(isHamClicked)}
      className={`${style.hamburger_menu} ${isHamClicked ? style.active : ""}`}
    >
      <div className={`${style.hamburger} ${style.hamburger_1}`}></div>
      <div className={`${style.hamburger} ${style.hamburger_2}`}></div>{" "}
      <div className={`${style.hamburger} ${style.hamburger_3}`}></div>
    </div>
  );
}

export default Hamburger;
