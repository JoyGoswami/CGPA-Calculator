import React from "react";
import Result from "./Result";
import ResultInput from "./ResultInput";
import style from "./ResultContainer.module.css";
import AddBtn from "./AddBtn";

function ResultContainer() {
  return (
    <div>
      <Result />
      <ResultInput />
      <ResultInput />

      <AddBtn />
    </div>
  );
}

export default ResultContainer;
