import logo from "./logo.svg";
import "./App.css";
import DestinationPage from "./components/Pages/DestinationPage/views/index";
import { Route, Routes } from "react-router-dom";
import EachDestination from "./components/Pages/EachDestination/views";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DestinationPage />} />
        <Route path="/:id" element={<EachDestination />} />
      </Routes>
    </div>
  );
}

export default App;
