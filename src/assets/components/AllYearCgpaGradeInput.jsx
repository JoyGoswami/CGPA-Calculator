import React, { useContext } from "react";
import { AppStorageContext } from "./Storage/AppStorage";
import style from "./AllYearCgpaGradeInput.module.css";

function AllYearCgpaGradeInput() {
  const { grades, handleAllYearCgpaInput } = useContext(AppStorageContext);
  const yearArr = ["First Year", "Second Year", "Third Year", "Fourth Year"];
  return (
    <div className={`${style.result_input} container`}>
      <form className={`${style.input_field_container} container_inner`}>
        {/* <div className={`${style.input_field}`}>
          <label htmlFor="grade" className={`${style.grade_label}`}>
            First Year:
          </label>
          <select className={`${style.grade_select}`} name="grade" id="grade">
            <option disabled defaultValue="Select Your GPA">
              Select Your GPA
            </option>
            {grades.map((grade) => {
              return (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              );
            })}
          </select>
        </div> */}
        {yearArr.map((year) => {
          return (
            <div key={year} className={`${style.input_field}`}>
              <label htmlFor="year_name_label">{year}</label>
              <select
                onChange={(e) => handleAllYearCgpaInput(year, e.target.value)}
                className={`${style.grade_select}`}
                name="grade"
                id="grade"
              >
                <option defaultValue="Select Your GPA">Select Your GPA</option>
                {grades.map((grade) => {
                  return (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default AllYearCgpaGradeInput;
