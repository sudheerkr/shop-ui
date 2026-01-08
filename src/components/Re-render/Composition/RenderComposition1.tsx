import { useState } from "react";

const VerySlowComponent = () => {
  console.log("Very slow component re-render");
  return <div>Very slow component</div>;
};

// moving state from Parent: RenderComposition1 to ComponentWithButton.
const ComponentWithButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {!!isModalOpen && "Modal Is Shown"}
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Call Me!</button>
    </>
  );
};

// moving state down: this state is only used on a small isolated portion of the render tree.
const RenderComposition1 = () => {
  return (
    <>
      <h2>Anti Pattern 2</h2>
      <p>Moving state down</p>
      <ComponentWithButton />
      <VerySlowComponent />
    </>
  );
};

export default RenderComposition1;
