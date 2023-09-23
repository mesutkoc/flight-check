import { Routes, Route, Navigate } from "react-router-dom";
import FilterPage from "pages/FilterPage";
import "./App.scss";
import TicketsPage from "pages/TicketsPage";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/destination" />} />
          <Route
            path="/destination"
            element={<FilterPage></FilterPage>}
          ></Route>
          <Route path={`/tickets`} element={<TicketsPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
