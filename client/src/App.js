import logo from "./logo.svg";
import "./App.css";
import DestinationPage from "./components/Pages/DestinationPage/views/index";
import { Route, Routes } from "react-router-dom";
import EachDestination from "./components/Pages/EachDestination/views";
import Login from "./components/Pages/LoginPage/login"
import Admin from "./components/Pages/LoginPage/AdminLogin/adminlogin"
import NavigationBar from "./components/Elements/NavBar/navBar";
import Footer from "./components/Elements/Footer/footer";
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
      <Route path="/foot" element={<Footer />} />
        <Route path="/" element={<DestinationPage />} />
        <Route path="/:id" element={<EachDestination />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/admin" element={< Admin/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
