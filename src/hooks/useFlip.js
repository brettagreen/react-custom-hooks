import { useState } from "react";

function useFlip(initialVal = true) {
  // call useState, "reserve piece of state"
  const [value, setValue] = useState(initialVal);
  const flip = () => {
    setValue(oldValue => !oldValue);
  };
  
  // return piece of state AND a function to toggle it
  return [value, flip];
}

export default useFlip;