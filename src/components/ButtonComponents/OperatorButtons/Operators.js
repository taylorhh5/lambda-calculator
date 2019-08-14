import React from "react";
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file
import { operators } from "../../../data.js";
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  // const [operatorState, setOperatorState] =  {useState}
  return (
    <div>

      {operators.map(operator=> <OperatorButton operator={operator}
      addOperator={props.addOperator} />)}
    
    </div>
  );
};

export default Operators;