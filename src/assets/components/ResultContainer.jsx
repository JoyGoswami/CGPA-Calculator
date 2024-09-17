import React from "react";
import Result from "./Result";
import ResultInput from "./ResultInput";
import style from "./ResultContainer.module.css";
import Btn from "./Btn";

function ResultContainer() {
  return (
    <div>
      <Result />
      <ResultInput />
      <ResultInput />

      <Btn height="35px" width="100px" text="1st Year" />
    </div>
  );
}

export default ResultContainer;
