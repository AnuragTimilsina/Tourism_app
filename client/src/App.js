import logo from "./logo.svg";
import "./App.css";
import DestinationPage from "./components/Pages/DestinationPage/views/index";
import { Route, Routes } from "react-router-dom";
import EachDestination from "./components/Pages/EachDestination/views";
import Login from "./components/Pages/LoginPage/login"
import Admin from "./components/Pages/LoginPage/AdminLogin/adminlogin"
import NavigationBar from "./components/Elements/NavBar/navBar";
function App() {
  return (
    <div className="App">
      {/* <NavigationBar/> */}
      <Routes>
      <Route path="/nav" element={<NavigationBar/>} />
        <Route path="/" element={<DestinationPage />} />
        <Route path="/:id" element={<EachDestination />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/admin" element={< Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
