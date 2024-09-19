import React, { useContext } from "react";
import style from "./Result.module.css";
import { AppStorageContext } from "./Storage/AppStorage";

function Result({ year }) {
  const {
    coursesFilteredYear,
    totalCredit,
    subjectNameOnSelectChange,
    sgpa,
    sgpaValue,
    gradeInputArr,
  } = useContext(AppStorageContext);

  let sgpaObj = {};
  let creditValue = {};
  let addSgpaValue = 0;
  let addCreditValue = 0;

  // if makes two object(sgpaObj, creditValue) from values from AppStorage
  if (sgpa.length !== 0) {
    sgpa.map((value) => {
      creditValue[`${Object.keys(value)[1]}`] = value[Object.keys(value)[1]];
      sgpaObj[`${Object.keys(value)[0]}`] = value[Object.keys(value)[0]];
    });
  }

  // it makes a value arrey
  let sgpaValueArr = Object.values(sgpaObj);

  // add the value array and stores it into addSgpaValue
  if (sgpaValueArr.length !== 0) {
    addSgpaValue = sgpaValueArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }
  // it makes a value arrey
  let creditValueArr = Object.values(creditValue);
  // add the value array and stores it into creditValueArr
  if (creditValueArr.length !== 0) {
    addCreditValue = creditValueArr.reduce((accumulator, current) => {
      return accumulator + current;
    });
  }
  //it calculates gpa
  let gpa = addSgpaValue / addCreditValue;

  // it calculates percentage
  let percentage = (100 / 4) * gpa;
  console.log(percentage);

  return (
    <div className={`${style.result} container`}>
      <div className={`${style.result_inner} container_inner`}>
        <p className={`${style.exam_year_name}`}>
          {coursesFilteredYear[0].year}
        </p>
        <div className={`${style.result_box}`}>
          <div className={`${style.credit_box}`}>
            <p className={`${style.total_credit_label} ${style.label}`}>
              Total Credit
            </p>
            <p className={`${style.total_credit}`}>{totalCredit}</p>
          </div>
          <div className={`${style.cgpa_box}`}>
            <p className={`${style.gpa_label} ${style.label}`}>GPA</p>
            <p className={`${style.gpa}`}>{isNaN(gpa) ? 4 : gpa.toFixed(2)}</p>
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
