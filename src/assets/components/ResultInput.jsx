import style from "./ResultInput.module.css";
import React from "react";

/* <div className={`${style.result_inner}`}></div> */
function ResultInput() {
  return (
    <div className={`${style.result_input} container`}>
      <div className={`${style.course_name_container}`}>
        <p className={`${style.course_number}`}>1</p>
        <p className={`${style.course_name}`}>Name of the course</p>
        <p className={`${style.course_code}`}>Course Code: 111111</p>
      </div>
      <form className={`${style.input_field_container} container_inner`}>
        <div className={`${style.input_field}`}>
          <p className={`${style.credit_label}`}>Credit:</p>
          <p className={`${style.credit}`}>4</p>
        </div>
        <div className={`${style.input_field}`}>
          <label htmlFor="grade" className={`${style.grade_label}`}>
            Grade:
          </label>
          <select className={`${style.grade_select}`} name="grade" id="grade">
            <option value="Select" defaultValue="Select" disabled>
              Select
            </option>
            <option value="A">A</option>
            <option value="A">A</option>
            <option value="A">A</option>
            <option value="A">A</option>
            <option value="A">A</option>
            <option value="A">A</option>
            <option value="A">A</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default ResultInput;
