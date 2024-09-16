import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className="container">
      <div className={`${style.footer_inner} container_inner`}>
        <p className={style.footer_content}>Developed by Joy Goswami</p>
      </div>
    </footer>
  );
}

export default Footer;
