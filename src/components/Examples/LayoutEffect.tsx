import { useEffect, useLayoutEffect, useRef } from "react";

const TestLayoutEffect = () => {
  const divRef = useRef<any>(null);

  useEffect(() => {
    console.log(`useEffect: Run after DOM paint`);
  }, []);

  useLayoutEffect(() => {
    divRef.current.style.backgroundColor = 'blue';
    divRef.current.style.color = 'black';
    console.log(`useLayoutEffect: Run before DOM paint`);
    console.log(`Element Width: ${divRef.current?.offsetWidth || ""}`);
  }, []);

  return <div ref={divRef}>Check Layout Effect</div>;
};

export default TestLayoutEffect;
