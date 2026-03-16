import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Placements from "./pages/Placements";
import Meetings from "./pages/Meetings";
import Assistant from "./pages/Assistant";

function App() {
  return (
    <Router>
      <div className="app">

        <h1 className="logo">LearnLoop</h1>

        <nav className="navbar">
          <Link to="/" className="navbox">Home</Link>
          <Link to="/courses" className="navbox">Courses</Link>
          <Link to="/placements" className="navbox">Placements</Link>
          <Link to="/meetings" className="navbox">Meetings</Link>
          <Link to="/assistant" className="navbox">AI Assistant</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;