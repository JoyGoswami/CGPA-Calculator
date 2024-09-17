import React, { useContext, useState } from "react";
import style from "./Main.module.css";
import Card from "./Card";
import NuIcon from "../icons/nu_logo.png";
import OtherUniIcon from "../icons/others_uni_logo.svg";
import HomeIcon from "../icons/home.svg";
import { AppStorageContext } from "./Storage/AppStorage";
import ResultContainer from "./ResultContainer.jsx";
import SubYear from "./SubYear.jsx";

function Main() {
  const { isHamClicked, whichCardClicked } = useContext(AppStorageContext);
  console.log(whichCardClicked);
  return (
    <main className="container">
      {/* {whichCardClicked === "" ? (
        <div className={`${style.main_inner} container_inner`}>
          <Card img={NuIcon} text="National University" paddingValue="0" />
          <Card
            img={OtherUniIcon}
            text="Others Universities"
            paddingValue="0"
          />
        </div>
      ) : whichCardClicked === "National University" ? (
        <SubYear text="National University" />
      ) : (
        <SubYear text="Other Universities" />
      )} */}
      <div className={`${style.main_inner} container_inner`}>
        <Card img={NuIcon} text="National University" paddingValue="0" />
        <Card img={OtherUniIcon} text="Others Universities" paddingValue="0" />
      </div>

      <div className={`${style.overlay} ${isHamClicked ? style.active : ""}`}>
        <h2 className={style.overlay_text}>Calculate Your CGPA</h2>
        {whichCardClicked === "National University" ? (
          <div className={style.overlay_inner}>
            <Card img={HomeIcon} text="Home" paddingValue="20" />

            <Card
              img={OtherUniIcon}
              text="Others Universities"
              paddingValue="0"
            />
          </div>
        ) : (
          <div className={style.overlay_inner}>
            <Card img={HomeIcon} text="Home" paddingValue="20" />
            <Card img={NuIcon} text="National University" paddingValue="0" />
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
