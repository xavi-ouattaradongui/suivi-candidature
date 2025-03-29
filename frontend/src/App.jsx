import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Candidatures from "./pages/Candidatures";
import Relances from "./pages/Relances";
import Statistiques from "./pages/Statistiques";
import ListeCandidatures from "./pages/ListeCandidatures";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Candidatures />} />
          <Route path="/relances" element={<Relances />} />
          <Route path="/statistiques" element={<Statistiques />} />
          <Route path="/candidatures" element={<ListeCandidatures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

