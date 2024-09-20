import React, { useContext, useState } from "react";
import style from "./Main.module.css";
import Card from "./Card";
import NuIcon from "../icons/nu_logo.png";
import OtherUniIcon from "../icons/others_uni_logo.svg";
import HomeIcon from "../icons/home.svg";
import { AppStorageContext } from "./Storage/AppStorage";

import InputSubYear from "./InputSubYear.jsx";
import CourseYearContainer from "./CourseYearContainer.jsx";

function Main() {
  const { isHamClicked, whichCardClicked } = useContext(AppStorageContext);

  return (
    <main className="container">
      {whichCardClicked === "" ? (
        <div className={`${style.main_inner} container_inner`}>
          <Card img={NuIcon} text="National University" paddingValue="0" />
        </div>
      ) : (
        <CourseYearContainer />
      )}
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
        <CourseYearContainer />
      ) : (
        <CourseYearContainer />
      )} */}
    </main>
  );
}

export default Main;
