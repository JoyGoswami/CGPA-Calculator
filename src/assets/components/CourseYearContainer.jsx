import React, { useContext } from "react";
import InputSubYear from "./InputSubYear";
import { AppStorageContext } from "./Storage/AppStorage";
import ResultContainer from "./ResultContainer";

function CourseYearContainer() {
  const { subYearSubmit } = useContext(AppStorageContext);
  return (
    <div>{subYearSubmit === "" ? <InputSubYear /> : <ResultContainer />}</div>
  );
}

export default CourseYearContainer;
