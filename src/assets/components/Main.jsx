import React from "react";
import style from "./Main.module.css";
import Card from "./Card";
import NuIcon from "../icons/nu_logo.png";
import OtherUniIcon from "../icons/others_uni_logo.svg";

function Main({ overlay }) {
  return (
    <main className="container">
      <div className={style.main_inner}>
        <Card img={NuIcon} text="National University" />
        <Card img={OtherUniIcon} text="Others Universities" />
      </div>
      <div className={`${style.overlay} ${overlay ? style.active : ""}`}>
        <h2 className={style.overlay_text}>Calculate Your CGPA</h2>
        <div className={style.overlay_inner}>
          <Card img={NuIcon} text="National University" />
          <Card img={OtherUniIcon} text="Others Universities" />
        </div>
      </div>
    </main>
  );
}

export default Main;
