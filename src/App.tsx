import "./App.css";
import SearchInputWithResults from "./components/searchResults/SearchInputWithResults";
import ToolTip from "./components/Tooltips/Tooltip";

function App() {
  return (
    <>
      <div className="read-the-docs">
        Click on the Vite and React logos to learn more
      </div>
      <div className="search-result">
        <SearchInputWithResults />
        <ToolTip />
      </div>
    </>
  );
}

export default App;
