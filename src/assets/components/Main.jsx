import React, { useContext, useState } from "react";
import style from "./Main.module.css";
import Card from "./Card";
import NuIcon from "../icons/nu_logo.png";
import OtherUniIcon from "../icons/others_uni_logo.svg";
import { AppStorageContext } from "./Storage/AppStorage";
import ResultContainer from "./ResultContainer.jsx";

function Main() {
  const { isHamClicked, whichCardClicked } = useContext(AppStorageContext);

  console.log(whichCardClicked);
  return (
    <main className="container">
      {/* <div className={style.main_inner}>
        <Card img={NuIcon} text="National University" />
        <Card img={OtherUniIcon} text="Others Universities" />
      </div> */}
      {whichCardClicked === "" ? (
        <div className={style.main_inner}>
          <Card img={NuIcon} text="National University" />
          <Card img={OtherUniIcon} text="Others Universities" />
        </div>
      ) : (
        <ResultContainer />
      )}
      <div className={`${style.overlay} ${isHamClicked ? style.active : ""}`}>
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
