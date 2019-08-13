import React, {useState} from "react";

//import any components needed
import operators from "../../../data"
import OperatorButton from "../OperatorButtons"
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] =  {useState}
  return (
    <div>

      {operators.map((item=> {
        return <OperatorButoon operator = {item}
      }))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
