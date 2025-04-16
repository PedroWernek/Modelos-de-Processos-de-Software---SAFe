import { Outlet } from "react-router-dom";
import "./css/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App_navbar">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="App_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
