import React from "react";
import style from "./Footer.module.css";
console.log(style);

function Footer() {
  return (
    <footer className="container">
      <div className={style.footer_inner}>
        <p className={style.footer_content}>Developed by Joy Goswami</p>
      </div>
    </footer>
  );
}

export default Footer;
