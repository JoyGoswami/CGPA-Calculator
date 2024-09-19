import React, { useContext, useState } from "react";
import Result from "./Result";
import ResultInput from "./ResultInput";
import style from "./ResultContainer.module.css";
import Btn from "./Btn";
import { AppStorageContext } from "./Storage/AppStorage";
import AllyearCgpaContainer from "./AllyearCgpaContainer";

function ResultContainer() {
  const {
    coursesFilteredYear,
    nationalUniversity,
    subYearSubmit,
    yearCgpa,
    handleYear,
    handleBtnClickAllYear,
    btnAllYearClick,
  } = useContext(AppStorageContext);

  console.log(btnAllYearClick);
  return (
    // <div>
    //   <Result />

    //   {coursesFilteredYear[0].subjects.map((subject, index) => {
    //     return (
    //       <ResultInput
    //         key={subject}
    //         serialNum={index + 1}
    //         courseName={subject}
    //         courseCode={"later"}
    //         credit={coursesFilteredYear[0][subject]}
    //       />
    //     );
    //   })}

    //   <Btn
    //     handleBtnClickAllYear={handleBtnClickAllYear}
    //     height="35px"
    //     width="200px"
    //     text="Calculate All Year CGPA"
    //   />
    // </div>
    <div>
      {btnAllYearClick ? (
        <AllyearCgpaContainer />
      ) : (
        <div>
          <Result />

          {coursesFilteredYear[0].subjects.map((subject, index) => {
            return (
              <ResultInput
                key={subject}
                serialNum={index + 1}
                courseName={subject}
                courseCode={"later"}
                credit={coursesFilteredYear[0][subject]}
              />
            );
          })}

          <Btn
            handleBtnClickAllYear={handleBtnClickAllYear}
            height="35px"
            width="200px"
            text="Calculate All Year CGPA"
          />
        </div>
      )}
    </div>
  );
}

export default ResultContainer;
