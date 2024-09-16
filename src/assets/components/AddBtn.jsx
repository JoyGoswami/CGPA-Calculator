import style from "./Addbtn.module.css";

import React from "react";

function AddBtn() {
  return (
    <div className={`${style.add_btn_contaier} container`}>
      {/* <button className={style.add_btn} type="button">
        <svg
          className={style.btn_icon}
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="27" fill="#FAA813" />
          <path
            d="M42.8063 24.3688V29.8063H11.6188V24.3688H42.8063ZM30.1188 11.0875V44.2125H24.3375V11.0875H30.1188Z"
            fill="black"
          />
        </svg>
      </button>
      <div className={`${style.add_btn_year_container} container`}>
        <ul>
          <li>1st Year</li>
          <li>2nd Year</li>
          <li>3rd Year</li>
          <li>4th Year</li>
        </ul>
      </div> */}
      <button className={style.add_btn} type="button">
        <span className={`${style.left_dash} ${style.dash}`}></span>1st Year
        <span className={`${style.right_dash} ${style.dash}`}></span>
      </button>
    </div>
  );
}

export default AddBtn;
