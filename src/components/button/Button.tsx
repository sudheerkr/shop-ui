import { useEffect, useRef, useState } from "react";

const Button = () => {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef<boolean>(false); 

  const handleButtonClick = (event: any) => {
    if (toggleRef.current) {
      event.currentTarget.style.backgroundColor = "red";
    } else {
      event.currentTarget.style.backgroundColor = "blue";
    }
    // setToggle(!toggle);
    toggleRef.current = !toggleRef.current;
  };
  
  // on first render, we are not able to see any color.
  return <button onClick={handleButtonClick}>Click</button>;
};

export default Button;
