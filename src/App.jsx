import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common-Components/Navbar";
import Footer from "./Components/Common-Components/Footer";
import Home from "./Pages/Home";
import Existing_Societies_Page from "./Pages/Existing_Societies_Page";
import Student_Involved from "./Pages/Student_Involved";
import Society_Registration_Form from "./Components/Page-Components/Society_Registration/Society_Registration_Form";
import Student_Login from "./Components/Page-Components/Student_Login/Student_Login";
import Student_Registration_form from "./Components/Page-Components/Student-Registration_Component/Student_Registration_form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route element={<Home />} path="/" />

        <Route element={<Student_Login/>} path="/Student_Login" />
        
        <Route
          element={<Society_Registration_Form />}
          path="/Society_Registration_Form"
        />

        <Route
          element={<Student_Registration_form />}
          path="/Student_Registration_form"
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
