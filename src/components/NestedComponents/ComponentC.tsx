import { useEffect } from "react";
import ComponentD from "./ComponentD";

const ComponentC = () => {

  useEffect(() => {
    console.log("Component C");
  }, []);
  
  return (
    <>
      <p>Component C</p>
      <ComponentD />
    </>
  );
};

export default ComponentC;
