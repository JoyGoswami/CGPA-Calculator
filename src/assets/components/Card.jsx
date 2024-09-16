import React, { useContext, useState } from "react";
import style from "./Card.module.css";
import { AppStorageContext } from "./Storage/AppStorage";

function Card({ img, text, paddingValue }) {
  const { handleCardClick } = useContext(AppStorageContext);

  return (
    <div onClick={() => handleCardClick(text)} className={style.card_container}>
      <div
        className={style.card_img}
        style={{ paddingTop: `${paddingValue}px` }}
      >
        <img className={style.logo_img} src={img} alt={`${text} Logo`} />
      </div>
      <div className={style.card_content}>
        <p className={style.card_name}>{text}</p>
      </div>
    </div>
  );
}

export default Card;
