import "./App.css";
import Button from "./components/button/Button";
import TestLayoutEffect from "./components/Examples/LayoutEffect";
import ComponentA from "./components/NestedComponents/ComponentA";
import ComponentB from "./components/NestedComponents/ComponentB";
import ComponentC from "./components/NestedComponents/ComponentC";
import ComponentD from "./components/NestedComponents/ComponentD";
import RenderOptimization from "./components/Re-render/RenderOptimization";
import SearchInputWithResults from "./components/searchResults/SearchInputWithResults";
import ToolTip from "./components/Tooltips/Tooltip";

function App() {
  console.log("AAPPP");

  return (
    <>
    <Button />
      <RenderOptimization />
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
    </>
  );
}

export default App;
