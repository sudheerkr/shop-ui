import { useEffect } from "react";

const ComponentA = () => {
  useEffect(() => {
    console.log("Component A");
  }, []);
  return (
    <>
      <p>Component A</p>
    </>
  );
};

export default ComponentA;
