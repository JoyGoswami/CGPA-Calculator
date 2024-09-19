import React, { useContext } from "react";
import Result from "./Result";
import ResultInput from "./ResultInput";
import style from "./ResultContainer.module.css";
import Btn from "./Btn";
import { AppStorageContext } from "./Storage/AppStorage";

function ResultContainer() {
  const { coursesFilteredYear, nationalUniversity, subYearSubmit } =
    useContext(AppStorageContext);
  // let coursesFilteredYear = nationalUniversity[subYearSubmit.subject].filter(
  //   (courseFilteredYear) => {
  //     return courseFilteredYear.year === subYearSubmit.year;
  //   }
  // );
  // let creditArr = [];
  // coursesFilteredYear[0].subjects.map((subject) => {
  //   creditArr.push(coursesFilteredYear[0][subject]);
  // });
  // console.log(creditArr);
  // console.log(coursesFilteredYear[0]);
  return (
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

      <Btn height="35px" width="100px" text="1st Year" />
    </div>
  );
}

export default ResultContainer;
