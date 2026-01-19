import "./App.css";
// Patterns
import {
  StyledButton,
  StyledText,
  DogImagesWithLoader,
  DogImageWithHoverAndLoader,
} from "./components/patterns/HOC/HOCExamples";
// Performance
import Button from "./components/button/Button";
import TestLayoutEffect from "./components/Examples/LayoutEffect";
import ComponentA from "./components/NestedComponents/ComponentA";
import ComponentB from "./components/NestedComponents/ComponentB";
import ComponentC from "./components/NestedComponents/ComponentC";
import ComponentD from "./components/NestedComponents/ComponentD";
import RenderOptimization from "./components/Re-render/RenderOptimization";
import SearchInputWithResults from "./components/searchResults/SearchInputWithResults";
import ToolTip from "./components/Tooltips/Tooltip";
import { Flyout } from "./components/patterns/Compound/CompoundExamples";

function App() {
  console.log("AAPPP");

  return (
    <>
      <div>
        <h1>Patterns</h1>
        {/* HOC Pattern */}
        <StyledButton />
        <StyledText />
        <DogImagesWithLoader />
        {/* hooks pattern */}
        <DogImageWithHoverAndLoader />
        {/* Compound Pattern */}
        <Flyout>
          <Flyout.Toggle />
          <Flyout.List>
            <Flyout.Item>Edit</Flyout.Item>
            <Flyout.Item>Delete</Flyout.Item>
          </Flyout.List>
        </Flyout>
      </div>
      <div>
        <RenderOptimization />
        <Button />
        <br />
        <hr />
        <TestLayoutEffect />
        <div className="read-the-docs">
          Click on the Vite and React logos to learn more
        </div>
        <div className="search-result">
          <SearchInputWithResults />
          <ToolTip />
        </div>
        <ComponentA>
          {/* <ComponentB /> If we want to nested this component. it will not render. due to children props not passed or rendering in Comp A */}
          {/* It will not break App functionality */}
        </ComponentA>
        <ComponentB />
        <ComponentC />
        <ComponentD />
      </div>
    </>
  );
}

export default App;
