import { Routes, Route, Navigate } from "react-router-dom";
import FilterPage from "pages/FilterPage";
import TicketsPage from "pages/TicketsPage";
import { PATH } from "constants";
import "./App.scss";
import ResultPage from "pages/ResultPage";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">FLIGHT CHECK</div>
      </header>
      <div>
        <Routes>
          <Route
            path={PATH.currentPath}
            element={<Navigate to={PATH.destination} />}
          />
          <Route
            path={PATH?.destination}
            element={<FilterPage></FilterPage>}
          ></Route>
          <Route path={`${PATH.tickets}/:i`} element={<TicketsPage />}></Route>
          <Route path={`${PATH.result}`} element={<ResultPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
