import RenderComposition from "./Composition/RenderComposition";
import RenderComposition1 from "./Composition/RenderComposition1";
import RenderComposition2 from "./Composition/RenderComposition2";

// https://www.developerway.com/posts/react-re-renders-guide
// https://adevnadia.medium.com/react-re-renders-guide-preventing-unnecessary-re-renders-8a3d2acbdba3

const RenderOptimization = () => {
  return (
    <>
      <h1>{"Render Optimization"}</h1>
      <h2>Anti patterns</h2>
      {/* 
        - Creating component inside component is performance killer.
        - On every re-render React will re-mount this component.
      */}
      <RenderComposition />
      {/* 
        - By moving state down: We are preventing re-rendering of parent component.
        - the button that triggers the update can be encapsulated in smaller component.
      */}
      <RenderComposition1 />
      {/* 
        - by using children props
        - this is same as 'moving state down'.
        - the diffrence here is that state is used on an element that wraps a slow portion of the render tree,
          so it can not be extracted that easily.
        - In this situation, state management and components that use that state can be extracted into a smaller
          component, and the slow component can be passed to it as 'children props'.
        - Props are not affected by the state change, so heavy components would not re-render.
      */}
      <RenderComposition2 />
    </>
  );
};

export default RenderOptimization;
