import React from "react";
import style from "./Result.module.css";

function Result() {
  return (
    <div className={`${style.result} container`}>
      <div className={`${style.result_inner} container_inner`}>
        <p className={`${style.exam_year_name}`}>First Year</p>
        <div className={`${style.result_box}`}>
          <div className={`${style.credit_box}`}>
            <p className={`${style.total_credit_label} ${style.label}`}>
              Total Credit
            </p>
            <p className={`${style.total_credit}`}>140</p>
          </div>
          <div className={`${style.cgpa_box}`}>
            <p className={`${style.gpa_label} ${style.label}`}>GPA</p>
            <p className={`${style.gpa}`}>4</p>
          </div>
          <div className={`${style.percentage_box}`}>
            <p className={`${style.percentage_label} ${style.label}`}>
              Percentage
            </p>
            <p className={`${style.percentage}`}>100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
