import { Routes, Route, Navigate } from "react-router-dom";
import FilterPage from "pages/FilterPage";
import TicketsPage from "pages/TicketsPage";
import { PATH } from "constants";
import "./App.scss";

function App() {
  return (
    <div className="App">
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
