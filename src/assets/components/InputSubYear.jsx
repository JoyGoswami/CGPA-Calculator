import React, { useContext, useRef } from "react";
import style from "./InputSubYear.module.css";
import Btn from "./Btn";

import { AppStorageContext } from "./Storage/AppStorage";

const grades = [
  "Select",
  "A+ 4.00",
  "A 3.75",
  "A- 3.50",
  "B+ 3.25",
  "B 3.00",
  "B- 2.75",
  "C+ 2.50",
  "C 2.25",
  "D 2.00",
  "F 0.00",
];

function InputSubYear() {
  const { handleSubYearSubmit, nationalUniversity } =
    useContext(AppStorageContext);

  const subInputRef = useRef();
  const yearInputRef = useRef();

  function handleFormSubmitYear(event) {
    event.preventDefault();
    handleSubYearSubmit(subInputRef.current.value, yearInputRef.current.value);
  }
  return (
    <form onSubmit={handleFormSubmitYear} className={style.input_container}>
      <div className={style.input_field}>
        <label htmlFor="subject_input">Subject:</label>
        <select
          ref={subInputRef}
          className={style.select}
          name="subject_input"
          id="subject_input"
        >
          <option defaultValue>Select Your Subject</option>
          {Object.keys(nationalUniversity).map((subjectName) => {
            return (
              <option key={subjectName} value={subjectName}>
                {subjectName}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.input_field}>
        <label htmlFor="year_input">Year:</label>
        <select
          ref={yearInputRef}
          className={style.select}
          name="year_input"
          id="year_input"
        >
          <option defaultValue>Select Year</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
          <option value="Fourth Year">Fourth Year</option>
        </select>
      </div>
      <div className={`${style.input_field} ${style.submit_btn}`}>
        <Btn text="Submit" height="32px" width="80px" />
      </div>
    </form>
  );
}

export default InputSubYear;
