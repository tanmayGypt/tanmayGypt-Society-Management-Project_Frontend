import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common-Components/Navbar";
import Footer from "./Components/Common-Components/Footer";
import Home from "./Pages/Home";
import Existing_Societies_Page from "./Pages/Existing_Societies_Page";
import Student_Involved from "./Pages/Student_Involved";
import Society_Registration_Form from "./Components/Page-Components/Society_Registration/Society_Registration_Form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={<Society_Registration_Form />}
          path="/Student_Registration"
        />
        <Route element={<Student_Involved />} path="/Student_Involved" />
        <Route
          element={<Existing_Societies_Page />}
          path="/Existing_Societies"
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
