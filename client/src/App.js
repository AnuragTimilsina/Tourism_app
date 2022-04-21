import "./App.css";
import HomePage from "./components/Pages/HomePage/views";
import { Route, Routes } from "react-router-dom";
import EachDestination from "./components/Pages/EachDestination/views";
import Login from "./components/Pages/LoginPage/login";
import Admin from "./components/Pages/LoginPage/AdminLogin/adminlogin";
import NavigationBar from "./components/Elements/NavBar/navBar";
import Footer from "./components/Elements/Footer/footer";
import EachServices from "./components/Pages/EachServices/views";
import AllDestinations from "./components/Pages/AllDestinationPage/views";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination/:id" element={<EachDestination />} />
        <Route path="/service/:id" element={<EachServices />} />
        <Route path="/destination" element={<AllDestinations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
