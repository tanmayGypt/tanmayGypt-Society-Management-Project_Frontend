import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Home() {
  return (
    <>
      <h1 className="text-center">Society Management Project</h1>
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
