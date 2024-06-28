import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common-Components/Navbar";
import Footer from "./Components/Common-Components/Footer";
import Home from "./Pages/Home";
import Society_Registration from "./Pages/Society_Registration";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={<Society_Registration />}
          path="/Society_Registration"
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
