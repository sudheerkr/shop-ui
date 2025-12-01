import { useEffect } from "react";

const ComponentB = () => {
  useEffect(() => {
    console.log("Component B");
  }, []);
  return (
    <>
      <p>Component B</p>
    </>
  );
};

export default ComponentB;
