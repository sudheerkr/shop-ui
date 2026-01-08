import { useEffect, useState } from "react";

// creating components inside render function
const RenderComposition = () => {
  const [count, setCount] = useState(0);
  const ShowHeading = () => {
    // if having state, state being reset in the component with every re-render.
    console.log(`Show Heading Component render`);
    useEffect(() => {
      console.log(`RenderComposition: show heading render`);
      return () => {
        console.log(`RenderComposition: show heading unmount`);
      };
    }, []); // effect with no dependencies triggered on every re-render

    return (
      <>
        <h2>Anti Pattern 1</h2>
        <p>Creating Components inside render function</p>
        <button onClick={() => setCount(count + 1)}>Call Me!</button>
      </>
    );
  };

  return <ShowHeading />;
};

export default RenderComposition;
