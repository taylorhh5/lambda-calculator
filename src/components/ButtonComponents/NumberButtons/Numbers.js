import React, { useState } from "react";


//import any components needed
import {numbers} from "../../../data";
import NumberButton from "../NumberButtons"
// import NumberButton from "../NumberButtons"
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return ( 
    <div>
     {numbers.map((nums=> {
       return <NumberButton number ={nums}
     }))}
      
    
            
        
        {/* {numbers.map(item => (
        <Panel titleOnProps={item.title} contentOnProps={item.content} />
      ))}
       */}
      
      
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Numbers; 

// import numbers
//create a button with each number