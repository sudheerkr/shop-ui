import { useState, type ReactNode } from "react";

const VerySlowComponent = () => {
  console.log("Very slow component re-render");
  return <div>Very slow component</div>;
};

const SlowComponent = () => {
  console.log("slow component re-render");
  return <div>slow component as Prop</div>;
};

const ComponentWithButton = ({ children, left }: { children: ReactNode, left: ReactNode }) => {
  const [value, setValue] = useState(1);
  const onClick = () => {
    setValue(value + 1);
  };
  return (
    <div style={{background: 'red'}} onClick={onClick}>
      <p>Re-render count: {value}</p>
      {left}
      {children}
    </div>
  );
};

const RenderComposition2 = () => {
  const comp = <SlowComponent />
  return (
    <>
      <h2>Anti Pattern 3</h2>
      <p>Moving state down</p>
      <ComponentWithButton
        left={comp}
      >
        <>
          <h3>component with slow component passed as children</h3>
          <p>Click the block - "slow" component will NOT re-render</p>
          <VerySlowComponent />
        </>
      </ComponentWithButton>
    </>
  );
};

export default RenderComposition2;
