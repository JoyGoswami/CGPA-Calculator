import React from "react";
import style from "./Card.module.css";

function Card({ img, text }) {
  return (
    <div className={style.card_container}>
      <div className={style.card_img}>
        <img
          className={style.logo_img}
          src={img}
          alt="National University Logo"
        />
      </div>
      <div className={style.card_content}>
        <p className={style.card_name}>{text}</p>
      </div>
    </div>
  );
}

export default Card;
