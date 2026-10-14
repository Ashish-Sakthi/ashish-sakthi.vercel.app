import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function Pages() {
  const location = useLocation();
  // keyed by path so each route change replays the page-enter animation
  return (
    <main key={location.pathname} className="flex-grow page-in">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <Pages />
      </div>
    </Router>
  );
}

export default App;
