import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50">
          <Navbar />
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
