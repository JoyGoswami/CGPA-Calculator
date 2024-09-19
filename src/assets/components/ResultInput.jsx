import style from "./ResultInput.module.css";
import React, { useContext, useState } from "react";
import { AppStorageContext } from "./Storage/AppStorage";

/* <div className={`${style.result_inner}`}></div> */
function ResultInput({ courseName, courseCode, credit, serialNum }) {
  const { grades, handleGradeInput, gradeInputArr } =
    useContext(AppStorageContext);

  return (
    <div className={`${style.result_input} container`}>
      <div className={`${style.course_name_container}`}>
        <p className={`${style.course_number}`}>{serialNum}</p>
        <p className={`${style.course_name}`}>{courseName}</p>
        <p className={`${style.course_code}`}>Course Code: {courseCode}</p>
      </div>
      <form className={`${style.input_field_container} container_inner`}>
        <div className={`${style.input_field}`}>
          <p className={`${style.credit_label}`}>Credit:</p>
          <p className={`${style.credit}`}>{credit}</p>
        </div>
        <div className={`${style.input_field}`}>
          <label htmlFor="grade" className={`${style.grade_label}`}>
            Grade:
          </label>
          <select
            onChange={(e) =>
              handleGradeInput(e.target.value, credit, courseName)
            }
            className={`${style.grade_select}`}
            name="grade"
            id="grade"
          >
            <option value="Select" defaultValue="Select" disabled>
              Select
            </option>
            {grades.map((grade) => {
              return (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default ResultInput;
