import style from "./Btn.module.css";

import React from "react";

function Btn({ height, width, text }) {
  return (
    <div className={`${style.btn_contaier} container`}>
      <button className={style.btn} style={{ height: height, width: width }}>
        <span className={`${style.left_dash} ${style.dash}`}></span>
        {text}
        <span className={`${style.right_dash} ${style.dash}`}></span>
      </button>
    </div>
  );
}

export default Btn;
