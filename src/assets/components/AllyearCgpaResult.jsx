import React, { useContext } from "react";
import style from "./AllyearCgpaResult.module.css";
import { AppStorageContext } from "./Storage/AppStorage";

function AllyearCgpaResult() {
  const { addallYearCgpa, allYearCgpaArr, allYearCgpaObjValue } =
    useContext(AppStorageContext);

  let cgpa = addallYearCgpa / Object.keys(allYearCgpaObjValue).length;
  return (
    <div className={`${style.result} container`}>
      <div className={`${style.result_inner} container_inner`}>
        <div className={`${style.result_box}`}>
          <div className={`${style.cgpa_box}`}>
            <p className={`${style.gpa_label} ${style.label}`}>CGPA</p>
            <p className={`${style.gpa}`}>
              {isNaN(cgpa) ? 0 : cgpa.toFixed(2)}
            </p>
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

export default AllyearCgpaResult;
