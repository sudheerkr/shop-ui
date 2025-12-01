import { useEffect } from "react";

const ComponentD = () => {
  useEffect(() => {
    console.log("Component D");
  }, []);
  return (
    <>
      <p>Component D</p>
    </>
  );
};

export default ComponentD;
