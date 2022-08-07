import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
  console.log(elementRef)
  
  function getDiv(){
    //save elementRef.current to a var
    const div = elementRef.current
    console.log(div.getBoundingClientRect())

  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={getDiv}>Measure</button>
    </div>
  );
}

export default Box;
